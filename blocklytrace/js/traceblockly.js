// Pt 2021 - MIT-License

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

var farbeMathe = "#5b67a5";
var farbep5Text = "#5ba58c";

var workspace = Blockly.inject(blocklyDiv, {
            collapse: true,
            comments: true,
            css: true,
            disable: false,
            grid: {
                spacing: 20,
                length: 1,
                colour: '#888',
                snap: true
            },   
            horizontalLayout: false,            
            maxBlocks: Infinity,
            media: 'media/',
            move: {
                scrollbars: {
                    horizontal: true,
                    vertical: true
                },
                drag: true,
                wheel: true
            },
            oneBasedIndex: true,
            readOnly: false,
            rtl: false,
            scrollbars: true,
            toolbox: p5jsBlocklyEditorToolbox,            
            toolboxPosition: 'start',            
            trashcan: true,
            sounds: true,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.02
            } 
        });

Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);

var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};

let splitInstance = Split(['#split-0', '#split-1'], {
        minSize: [0, 10],
        sizes: [30, 70],
        snapOffset: 80,
        gutterSize: 20,
    })

let observer = new ResizeObserver(function(mutations) {
    tabelleBauen();
    onresize();
    Blockly.svgResize(workspace);
});

let child = document.getElementById('split-0');
observer.observe(child, { attributes: true });

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

function zeileErsetzen(code, ersatzString) {
  //ersatzString-Zeile entfernen
  let ersatzStringIdx = code.indexOf(ersatzString);
  while (ersatzStringIdx != -1) {
    let spaceIdx = ersatzStringIdx-1;
    //Leerzeichen vor ersatzString-Zeile entfernen
    while (spaceIdx >= 0) {
      if (code[spaceIdx] == " ") {
        code = code.slice(0, spaceIdx) + code.slice(spaceIdx+1);
        spaceIdx--;
      } else {
        break;
      }
    }
    ersatzStringIdx = code.indexOf(ersatzString);
    let newLineIdx = code.indexOf('\n', ersatzStringIdx);
    code = code.slice(0, ersatzStringIdx) + code.slice(newLineIdx+1);       
    ersatzStringIdx = code.indexOf(ersatzString);
  }
  //dreifache neue Zeile ersetzen
  code = code.replace(/\n\s*\n\s*\n/g, '\n\n');  
  return code;
}

var struktogrammCode = '';

//Code aus Ausdruck extrahieren - muss in neue Blöcke eingefügt werden
function extrahiereCode(codeFragment) {
  if (typeof codeFragment === 'string') {
    let kIdx = codeFragment.indexOf('§#', 0);
    if(kIdx != -1) {  
      let kEndIdx = codeFragment.indexOf('#§', kIdx+2);
      codeFragment = codeFragment.slice(0, kIdx) + codeFragment.slice(kEndIdx+4);
      let cIdx = codeFragment.indexOf('$~', 0);
      if (cIdx != -1) {
        codeFragment = codeFragment.slice(cIdx+2);
      }
    }
  }
  return codeFragment;
}

//Text für Struktogramm extrahieren - muss in neue Blöcke eingefügt werden
function extrahiereStrukt(codeFragment) {
  if (typeof codeFragment === 'string') {  
    let kIdx = codeFragment.indexOf('§#', 0);
    if (kIdx != -1) {
      let kEndIdx = codeFragment.indexOf('#§', kIdx+2);
      codeFragment = codeFragment.slice(kIdx+2, kEndIdx);
    }
  }
  return codeFragment;
}

function struktogrammCodeAuslesen(code) {
  struktogrammCode = '';
  let struktoStartIdx = code.indexOf('§#');
  while (struktoStartIdx != -1) {
    struktoStartIdx = code.indexOf('§#');
    let struktoEndIdx = code.indexOf('#§', struktoStartIdx);
    let struktZeile = code.substring(struktoStartIdx+2, struktoEndIdx);
    struktZeile += '\n';
    struktogrammCode += struktZeile;
    code = code.slice(0, struktoStartIdx) + code.slice(struktoEndIdx+2);       
    struktoStartIdx = code.indexOf('§#');    
  }
  let blocklyCode = code;
  return blocklyCode;
}

function viewCode() {
    let codeInstance = Blockly.JavaScript.workspaceToCode(this.workspace);
    let codeOhneStrukt = struktogrammCodeAuslesen(codeInstance);
    let codeToSave = zeileErsetzen(codeOhneStrukt, "highlightBlock");
    let codeDiv = document.getElementById('codeDiv');
    let htmlImport = Prism.highlight(codeToSave, Prism.languages.javascript, 'javascript');
    codeDiv.innerHTML = htmlImport;
}

function viewFlems() {
    let codeInstance = Blockly.JavaScript.workspaceToCode(this.workspace);
    let codeOhneStrukt = struktogrammCodeAuslesen(codeInstance);
    let codeToSave = zeileErsetzen(codeOhneStrukt, "highlightBlock");
    //tracetabelle ersetzen
    let tracetabelleIdx = codeToSave.indexOf('tracetabelle');
    while (tracetabelleIdx != -1) {
      //VariablenListe ermitteln
      let nextklammerAufIdx = codeToSave.indexOf('[', tracetabelleIdx);
      let nextKlammerZuIdx = codeToSave.indexOf(']', tracetabelleIdx);
      let varListe = codeToSave.substring(nextklammerAufIdx+1, nextKlammerZuIdx);
      let varArr = varListe.split(',');
      let consoleLogText = 'console.log({';
      consoleLogText += '\"Eintrag\":' + varArr[0];
      for (let j = 1; j < varArr.length; j++) {
        consoleLogText += ', \"' + varArr[j] + '\":' + varArr[j];
      }      
      consoleLogText += '});';  
      let newLineIdx = codeToSave.indexOf('\n', tracetabelleIdx);
      codeToSave = codeToSave.slice(0, tracetabelleIdx+12) + codeToSave.slice(newLineIdx);      
      codeToSave = codeToSave.replace('tracetabelle', consoleLogText);
      tracetabelleIdx = codeToSave.indexOf("tracetabelle");
    }
    window.localStorage.setItem("codeLocalStorage", codeToSave);  
    window.open("../p5jsflems/index.html",'_blank');
}

function p5Init() {
    Blockly.mainWorkspace.clear();
    let urlString = window.location.hash;
    if (urlString.length > 0) {
        try {
            let triggerCode = urlString.substring(0, 4);
            if (triggerCode == "#LZ=") {
              let comressedCode = urlString.substring(4);
              let string = LZString.decompressFromEncodedURIComponent(comressedCode);
              let xml = Blockly.Xml.textToDom(string);
              Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);              
            }
            if (triggerCode == "#PN=") {
              let programmName = urlString.substring(4);
              loadBeispielProgramm('programme/' + programmName + '.p5xml');
            }
        }
        catch {
           Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
        }
    } else {
        Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
    }
    onresize();
    resetStepUi(true);
    tabelleBauen();    
    loadTutorial('tutorials/inhalt.html');    
}

document.getElementById('jsAnzeigen').onclick = function() {
  viewCode();
};

document.getElementById('flemsAnzeigen').onclick = function() {
  viewFlems();
};

function tabelleBauen() {
  //die richtige Tabelle für die Zuordnung der Variablen finden
  let hoeheTabelleString = 'calc(100vh - 180px)'; 
  document.getElementById('traceTabelleDiv').setAttribute("style","height:" + hoeheTabelleString);    
  let intViewportHeight = window.innerHeight-160;
  let traceTabelleString = '<table id="traceTabelle" data-toggle="table" data-height="' + intViewportHeight + '"><thead><tr>';
  let max = -Infinity;
  let index = -1;
  allVarNameArr.forEach(function(a, i){
    if (a.length > max) {
      max = a.length;
      index = i;
    }
  });
  for (let i = 0; i < allSingleVarNameArr.length; i++) {
    traceTabelleString += '<th data-field="' + allSingleVarNameArr[i] + '" data-halign="center" data-align="center">' + allSingleVarNameArr[i] + '</th>';
  }
  traceTabelleString += '</tr></thead></table>';
  document.getElementById('traceTabelleDiv').innerHTML = traceTabelleString;
  $traceTabelleVar = $('#traceTabelle');
  $traceTabelleVar.bootstrapTable({data: traceTabelleData});  
}

//JS-Interpreter
var stepButton = document.getElementById('stepButton');
var myInterpreter = null;
var allTraceTabelleArr = [];
var traceTabelleArr = [];
var varNameArr = [];
var allVarNameArr = [];
var allSingleVarNameArr = [];
var anzahlTraceTabelle = 0;
var $traceTabelleVar;
var traceTabelleData = [];

function initApi(interpreter, globalObject) {
  // Add an API function for Tracetabelle
  interpreter.setProperty(globalObject, 'tracetabelle',
      interpreter.createNativeFunction(function(text) {
    text = arguments.length ? text : '';
    let traceTabelleArr = [];
    for (let i = 0; i < text.a.length; i++) {
      if(text.a[i] == null) {
        traceTabelleArr.push('');
      } else {
        if (text.a[i].F == null) {
          traceTabelleArr.push(text.a[i]);
        } else {
          traceTabelleArr.push(text.a[i].a);
        }   
      }
    }
    tabelleBauen();
    let useTraceTabelleIdx = allTraceTabelleArr.findIndex(element => element.includes(traceTabelleArr[0]));          
    var traceTabelleZeileObj = {};
    for (let j = 1; j < traceTabelleArr.length; j++) {
      if(typeof traceTabelleArr[j] === 'object') {
        if (traceTabelleArr[j].length > 0) {
          if (typeof traceTabelleArr[j][0].F === 'undefined') {
            let tempArr = Object.values(traceTabelleArr[j]);
            let tempString = tempArr.join(' | ');
            traceTabelleZeileObj[allVarNameArr[useTraceTabelleIdx][j].toString()] = tempString;
          } else {
            let tempString = '';
            for (let g = 0; g < traceTabelleArr[j].length; g++) {
              let tempArr = Object.values(traceTabelleArr[j][g].a);
              let tempElement = tempArr.join(' | ');
              tempString += tempElement;
              if (g < traceTabelleArr[j].length - 1) {
                tempString += '<br>'
              }
            }
            traceTabelleZeileObj[allVarNameArr[useTraceTabelleIdx][j].toString()] = tempString;
          } 
        }
        else {
          traceTabelleZeileObj[allVarNameArr[useTraceTabelleIdx][j].toString()] = '-';
        }
      } else {
        traceTabelleZeileObj[allVarNameArr[useTraceTabelleIdx][j].toString()] = traceTabelleArr[j];
      }
    }
    traceTabelleData.push(traceTabelleZeileObj);
    $traceTabelleVar.bootstrapTable('append', traceTabelleZeileObj);
  }));

  interpreter.setProperty(globalObject, 'wurzelAusgeben',
      interpreter.createNativeFunction(function(text) {
    text = arguments.length ? text : '';
    let stop = text.a[0];
  }));

  // Add an API function for the prompt() block.
  var wrapper = function(text) {
    return interpreter.createPrimitive(prompt(text));
  };
  interpreter.setProperty(globalObject, 'prompt',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for highlighting blocks.
  var wrapper = function(id) {
    id = String(id || '');
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(globalObject, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));
}

var highlightPause = false;
var latestCode = '';

function highlightBlock(id) {
  workspace.highlightBlock(id);
  highlightPause = true;
}

function resetStepUi(clearOutput) {
  workspace.highlightBlock(null);
  highlightPause = false;
  if (clearOutput) {
    traceTabelleArr = [];
    traceTabelleData = [];
    myInterpreter = null;
  }
}

function generateCodeAndLoadIntoInterpreter() {
  // Generate JavaScript code and parse it.
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.JavaScript.addReservedWords('highlightBlock');
  let codeInstance = Blockly.JavaScript.workspaceToCode(workspace);
  latestCode = struktogrammCodeAuslesen(codeInstance);
  allVarNameArr = [];
  allTraceTabelleArr = [];
  allSingleVarNameArr = [];
  let codeParse = latestCode;
  //VariablenListe ermitteln
  let tracetabelleIdx = codeParse.indexOf("tracetabelle");
  anzahlTraceTabelle = 0;
  while (tracetabelleIdx != -1) {
    anzahlTraceTabelle++;
    let nextklammerAufIdx = codeParse.indexOf('[', tracetabelleIdx);
    let nextKlammerZuIdx = codeParse.indexOf(']', tracetabelleIdx);
    let varListe = codeParse.substring(nextklammerAufIdx+1, nextKlammerZuIdx);
    let varArr = varListe.split(',');
    allVarNameArr.push(varArr);
    codeParse = codeParse.replace('tracetabelle', '');
    tracetabelleIdx = codeParse.indexOf("tracetabelle");
    allTraceTabelleArr.push(varArr[0]);
  }
  
  //alle Variablen sammeln, alphabetisch sortieren und in allSingleVarNameArr speichern
  let varSammlerArr = [];
  for (let i = 0; i < allVarNameArr.length; i++) {
    for (let j = 1; j < allVarNameArr[i].length; j++) {
      varSammlerArr.push(allVarNameArr[i][j]);
    }
  }
  allSingleVarNameArr= [...new Set(varSammlerArr)];
  allSingleVarNameArr.sort((a, b) => a.localeCompare(b));  
  resetStepUi(true);
}

function stepCode() {
  if (!myInterpreter) {
    // First statement of this code.
    // Clear the program output.
    resetStepUi(true);
    //Der js-Interpreter mag keine Deklaration einer Variablen mit let, also var verwenden
    myInterpreter = new Interpreter(latestCode, initApi);
  }
  highlightPause = false;
  do {
    try {
      let hoeheTabelleString = 'calc(100vh - 180px)'; 
      document.getElementById('traceTabelleDiv').setAttribute("style","height:" + hoeheTabelleString);
      var hasMoreCode = myInterpreter.step();
    } finally {
      if (!hasMoreCode) {
        myInterpreter = null;
        resetStepUi(false);
        // Cool down, to discourage accidentally restarting the program.
        stepButton.disabled = 'disabled';
        setTimeout(function() {
          stepButton.disabled = '';
        }, 2000);
        return;
      }
    }
    // Keep executing until a highlight statement is reached,
    // or the code completes or errors.
  } while (hasMoreCode && !highlightPause);
}

function executeCode() {
  if (!myInterpreter) {
    // First statement of this code.
    // Clear the program output.
    resetStepUi(true);
    //Der js-Interpreter mag keine Deklaration einer Variablen mit let, also var verwenden
    myInterpreter = new Interpreter(latestCode, initApi);
  }
  highlightPause = false;
  do {
    try {
      let hoeheTabelleString = 'calc(100vh - 180px)'; 
      document.getElementById('traceTabelleDiv').setAttribute("style","height:" + hoeheTabelleString);
      var hasMoreCode = myInterpreter.step();
    } finally {
      if (!hasMoreCode) {
        myInterpreter = null;
        resetStepUi(false);
        return;
      }
    }
  } while (hasMoreCode);
}

function tabelleLoeschen() {
  traceTabelleData = [];
  tabelleBauen();
}

// Load the interpreter now, and upon future changes.
generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
  //JS-Interpreter wird nicht neu geladen, wenn der ViewPort sich ändert. Sonst schon.
  if (!(event instanceof Blockly.Events.Ui) && event.type != Blockly.Events.VIEWPORT_CHANGE ) {
    // Something changed. Parser needs to be reloaded.
    generateCodeAndLoadIntoInterpreter();
  }
});

let modalConfirm = function(callback){
  $("#p5loeschen").on("click", function(){
    $("#programmLoeschenModal").modal('show');
  });
  $("#btnLoeschJa").on("click", function(){
    callback(true);
    $("#programmLoeschenModal").modal('hide');
  });
  $("#btnLoeschNein").on("click", function(){
    callback(false);
    $("#programmLoeschenModal").modal('hide');
  });
};
modalConfirm(function(confirm){
  if(confirm){
    allVarNameArr = [];
    allSingleVarNameArr = [];
    p5Init();
  }else{
  }
});