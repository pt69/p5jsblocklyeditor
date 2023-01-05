function generateDiagram(viewer){
  var diagram = StructDiagram.parseStructCode(struktogrammCode);
  while(viewer.children.length>0)
    viewer.removeChild(viewer.firstChild);
  viewer.appendChild(diagram);
  return viewer.firstElementChild;
}

function updateView(structview){
  var codeid = structview.dataset.structcodeId;
  var sourcecode = document.querySelector('#'+codeid);
  var erroritem = sourcecode.parentNode;
  try{
    erroritem.dataset.parsererror = '';
    var diagram = generateDiagram(structview);
  }catch(e){
    console.warn('parser:', e);
    if(e instanceof StructCodeParseException){
      erroritem.dataset.parsererror = e.toString();
    }
  }
}

function struktogrammAnzeigen(){
  try{
    $('#struktogramm01').val(struktogrammCode);
    var view=document.querySelector(".structview[data-structcode-id=struktogramm01]");
    updateView(view);    
  }catch(e){
    console.warn(e);
    var view=document.querySelector(".structview[data-structcode-id='struktogramm01']");
    updateView(view);
  }
}

function struktogrammBearbeiten(){
  try{
    $('#struktogrammEditor01').val(struktogrammCode);
    var view=document.querySelector(".structview[data-structcode-id=struktogrammEditor01]");
    updateView(view);    
  }catch(e){
    console.warn(e);
    var view=document.querySelector(".structview[data-structcode-id='struktogrammEditor01']");
    updateView(view);
  }
}

document.getElementById('struktogrammEditor01').addEventListener('input', function (event) {
  struktogrammCode = event.target.value;
});

function updateEditor(){
  try{
    var view=document.querySelector(".structview[data-structcode-id=struktogrammEditor01]");
    updateView(view);    
  }catch(e){
    console.warn(e);
    var view=document.querySelector(".structview[data-structcode-id='struktogrammEditor01']");
    updateView(view);
  }
}

class StructElement extends HTMLElement {
  getName(){
    return this.constructor.name.substr(6).toUpperCase();
  }
}
class StructBlock extends StructElement {
}
class StructContainer extends StructElement {
  set condition(condition){this.setAttribute('condition', condition);}
  get condition(){return this.getAttribute('condition');}
  setBlock(index, block){
    if(this.children.length<index)
      throw "ungültiger Index: "+index+' > '+(this.children.length-1);
    if(index<this.children.length)
      this.replaceChild(block, this.children[index]);
    else
      this.appendChild(block);
  }
  getBlock(index){
    if(this.children.length<index)
      throw "ungültiger Index: "+index+' > '+this.children.length;
    if(index<this.children.length)
      return this.children[index];
    else
      return this.appendChild(new StructBlock());
  }
}
class StructSequence extends StructElement {
}
class StructComment extends StructSequence {
  isMultiline() {
    return this.textContent.indexOf("\n") > 0;
  }
  get lines() {
    return this.textContent.split("\n");
  }
  addComment(line) {
    if (this.textContent.length !== 0) {
      this.textContent += "\n" + line;
    } else {
      this.textContent = line;
    }
  }
}
class StructDecision extends StructContainer {
  getName(){
    return "IF";
  }
  set thenBlock(block){
    this.setBlock(0, block);
  }
  get thenBlock(){
    return this.getBlock(0);
  }
  set elseBlock(block){
    this.getBlock(0);//ensure block 0
    this.setBlock(1, block);
  }
  get elseBlock(){
    this.getBlock(0);//ensure block 0
    return this.getBlock(1);
  }
}
class StructChoose extends StructContainer {
  getName(){
    return "SELECT";
  }
  set defaultBlock(block){
    this.lastBlock = block;
  }
  get defaultBlock(){
    if(!this.lastBlock){
      this.lastBlock = new StructBlock();
      this.lastBlock.kind = 'defaultBlock';
      this.appendChild(this.lastBlock);
    }
    return this.lastBlock;
  }
  createNextCase(){
    var block = new StructCaseBlock();
    this.insertBefore(block, this.defaultBlock);
    return block;
  }
}
class StructCaseBlock extends StructBlock {
  set condition(condition){this.setAttribute('condition',condition);}
  get condition(){return this.getAttribute('condition');}
}
class StructLoop extends StructContainer {
  set loopBlock(block){
    this.setBlock(0, block);
  }
  get loopBlock(){
    return this.getBlock(0);
  }
}
class StructIteration extends StructLoop {
  getName(){
    return "FOR";
  }
}
class StructCall extends StructSequence {
}
class StructBreak extends StructSequence {
}
class StructDiagram extends StructElement {
  set caption(caption){this.setAttribute('caption',caption);}
  get caption(){return this.getAttribute('caption');}
  
  static parseStructCode(structCode){
    var stack = [new StructDiagram()];
    
    var lastlineindex;
    var lines = structCode.split('\n');

    function checkBlock(blockname){
      var stackblock=stack[0].getName();
      if(stack[0] instanceof StructBlock){
        stackblock=stack[1].getName();
      }
      if(stackblock!==blockname){
        throw 'Fehler beim Ende eines Blocks. Erwartet wird END'+ stackblock+':';
      }
    }
    function checkEmptyBlock(block){
      if(block.children.length===0){
        block.appendChild(new StructSequence());//.textContent=' ';
      }
    }
    
    for(var i=0;i<lines.length;i++){      
      try{
        var trimmed = lines[i].trim();
        if(trimmed.length===0)
          continue;
        lastlineindex = i;
        if (trimmed.startsWith('#')) {
          let comment = trimmed.substr(1).trim();
          if (comment.length > 0) {
            if (!(stack[0].lastElementChild instanceof StructComment)) {
              stack[0].appendChild(new StructComment());
            }
            stack[0].lastElementChild.addComment(comment);
          }
        }else if(trimmed.startsWith('CAPTION:')){
          stack[0].caption = trimmed.substr(8).trim();
        }else if(trimmed.startsWith('IF:')){
          var item = new StructDecision();
          item.condition = trimmed.substr(3).trim();
          stack.unshift(item);
          stack.unshift(item.thenBlock);
        }else if(trimmed.startsWith('ELSE:')){
          var block = stack.shift();
          stack.unshift(stack[0].elseBlock);
        }else if(trimmed.startsWith('ENDIF:')){
          checkBlock('IF');
          var block = stack.shift();
          var item = stack.shift();
          checkEmptyBlock(item.elseBlock);
          stack[0].appendChild(item);
        }else if(trimmed.startsWith('SELECT:')){
          var item = new StructChoose();
          item.condition = trimmed.substr(7).trim();
          stack.unshift(item);
        }else if(trimmed.startsWith('CASE:')){
          var item = stack[0];
          if(item instanceof StructBlock){
            var prevcase = stack.shift();
            checkEmptyBlock(prevcase);
          }
          var block = stack[0].createNextCase();
          block.condition = trimmed.substr(5).trim();
          stack.unshift(block);
        }else if(trimmed.startsWith('DEFAULT:')){
          var item = stack[0];
          if(item instanceof StructBlock){
            var prevcase = stack.shift();
            checkEmptyBlock(prevcase);
          }
          stack.unshift(stack[0].defaultBlock);
        }else if(trimmed.startsWith('ENDSELECT:')){
          checkBlock('SELECT');
          var item = stack[0];
          if(item instanceof StructBlock){
            var prevcase = stack.shift();
            checkEmptyBlock(prevcase);
          }
          var item = stack.shift();
          checkEmptyBlock(item.defaultBlock);
          stack[0].appendChild(item);
        }else if(trimmed.startsWith('FOR:')){
          var item = new StructIteration();
          item.condition = trimmed.substr(4).trim();
          stack.unshift(item);
          stack.unshift(item.loopBlock);
        }else if(trimmed.startsWith('ENDFOR:')){
          checkBlock('FOR');
          var block = stack.shift();
          var item = stack.shift();
          checkEmptyBlock(item.loopBlock);
          stack[0].appendChild(item);
        }else if(trimmed.startsWith('LOOP:')){
          var item;
          if(trimmed!=='LOOP:'){
            item = new StructIteration();
            item.condition = trimmed.substr(5).trim();
          }else{
            item = new StructLoop();
          }
          stack.unshift(item);
          stack.unshift(item.loopBlock);
        }else if(trimmed.startsWith('ENDLOOP:')){
          checkBlock('LOOP');
          var block = stack.shift();
          var item = stack.shift();
          if(item instanceof StructLoop && trimmed!=='ENDLOOP:'){
            item.condition = trimmed.substr(8).trim();
          }
          checkEmptyBlock(item.loopBlock);
          stack[0].appendChild(item);
        } else if(trimmed.startsWith('CALL:')) {
          stack[0].appendChild(new StructCall()).textContent = trimmed.substr(5).trim();
        } else if(trimmed.startsWith('BREAK:')) {
          stack[0].appendChild(new StructBreak()).textContent = trimmed.substr(6).trim();
        } else if(trimmed.startsWith('RETURN:')) {
          stack[0].appendChild(new StructBreak()).textContent = trimmed.substr(7).trim();
        } else {
          stack[0].appendChild(new StructSequence()).textContent = trimmed;
        }
      }catch(e){
        throw new StructCodeParseException(i+1, lines[i], e);
      }
    }
    if(stack.length!==1){
      var blockname=stack[0].getName();
      if(stack[0] instanceof StructBlock){
        blockname=stack[1].getName();
      }
      throw new StructCodeParseException(lastlineindex+1,lines[lastlineindex],
      'Es fehlt END'+ blockname+':');
    }
    
    return stack.shift();
  }
}
customElements.define('struct-diagram',StructDiagram);
customElements.define('struct-sequence',StructSequence);
customElements.define('struct-comment',StructComment);
customElements.define('struct-block',StructBlock);
customElements.define('struct-decision',StructDecision);
customElements.define('struct-select',StructChoose);
customElements.define('struct-case',StructCaseBlock);
customElements.define('struct-loop',StructLoop);
customElements.define('struct-iteration',StructIteration);
customElements.define('struct-call',StructCall);
customElements.define('struct-break',StructBreak);

function StructCodeParseException(linenum, line, error){
  this.linenum = linenum;
  this.line = line;
  this.contextError = error?error.toString():'unknown';
  this.toString = function() {
    return "Fehler in Zeile " + linenum + ": '"+line+"', " + this.contextError;
  };
}

document.getElementById('struktogrammDateiname').value = 'Struktogramm';

document.getElementById('struktSave').onclick = function() {
  try {
    let link = document.createElement('a');
    link.download = document.getElementById('struktogrammDateiname').value + '.strukt';
    link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(struktogrammCode);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch { }
};

const struktogrammfileSelector = document.getElementById('struktogrammDateiwahl');
struktogrammfileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  let file = fileList[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    struktogrammCode = event.target.result;
    $('#struktogrammEditor01').val(struktogrammCode);
    var view=document.querySelector(".structview[data-structcode-id=struktogrammEditor01]");
    updateView(view);     
    document.getElementById('struktogrammDateiwahl').value = null; 
  };  
});

document.getElementById('struktSvgSave').onclick = function() {
  var node = document.getElementById('diagramEditorView');
  
  domtoimage.toSvg(node)
      .then(function (dataUrl) {
        try {
          let link = document.createElement('a');
          link.download = document.getElementById('struktogrammDateiname').value + '.svg';
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          link.remove();
        } catch { }        
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
};