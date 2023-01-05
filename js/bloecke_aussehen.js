// Pt 2021 - MIT-License

//Kategorie: Aussehen
Blockly.Blocks['p5_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("p5-Farbe:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("rot:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("grün:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blau:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Durchsichtigkeit:");        
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Legt eine p5-Farbe fest");
    this.setHelpUrl("https://p5js.org/reference/#/p5/color");
  }
};

Blockly.JavaScript['p5_color'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.color(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['background_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hintergrundfarbe:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Hintergrundfarbe festlegen.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  }
};

Blockly.JavaScript['background_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.background(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['background_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Hintergrundfarbe =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Farbname eingeben");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['background_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.background(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['stroke_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Linienfarbe:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Linienfarbe festlegen.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/stroke");
  }
};

Blockly.JavaScript['stroke_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.stroke(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['stroke_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Linienfarbe =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Farbname eingeben");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['stroke_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.stroke(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['fill_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Füllfarbe:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Füllfarbe festlegen.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  }
};

Blockly.JavaScript['fill_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.fill(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['fill_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Füllfarbe =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Farbname eingeben");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['fill_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.fill(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['nofill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ohne Füllfarbe");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Die Figuren werden nicht mit Farbe ausgefüllt.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/noFill");
  }
};

Blockly.JavaScript['nofill'] = function(block) {
  var code = 'p5sketch.noFill();\n';
  return code;
};

Blockly.Blocks['strokeweight_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liniendicke:")
        .appendField(new Blockly.FieldNumber(0, 0, maxKoord, 0.1), "weight");
    this.appendDummyInput()
        .appendField("px");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Legt die Liniendicke fest.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/strokeWeight");
  }
};

Blockly.JavaScript['strokeweight_number'] = function(block) {
  var number_weight = block.getFieldValue('weight');
  var code = 'p5sketch.strokeWeight(' + number_weight + ');\n';
  return code;
};

Blockly.Blocks['background_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hintergrundfarbe");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("rot:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("grün:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blau:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Hintergrundfarbe festlegen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  }
};

Blockly.JavaScript['background_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.background(' + number_r + ', ' + number_g + ', ' + number_b + ');\n';
  return code;
};

Blockly.Blocks['fill_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Füllfarbe:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("rot:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("grün:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blau:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Durchsichtigkeit:");        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Legt die Füllfarbe fest");
    this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  }
};

Blockly.JavaScript['fill_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.fill(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ');\n';
  return code;
};

Blockly.Blocks['stroke_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Linienfarbe:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("rot:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("grün:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blau:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Durchsichtigkeit:");         
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Legt die Linienfarbe fest");
    this.setHelpUrl("https://p5js.org/reference/#/p5/stroke");
  }
};

Blockly.JavaScript['stroke_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.stroke(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ');\n';
  return code;
};

Blockly.Blocks['strokeweight_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liniendicke:");
    this.appendValueInput("dicke")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("px");        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Legt die Liniendicke fest.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/strokeWeight");
  }
};

Blockly.JavaScript['strokeweight_var'] = function(block) {
  var value_weight = Blockly.JavaScript.valueToCode(block, 'dicke', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.strokeWeight(' + value_weight + ');\n';
  return code;
};