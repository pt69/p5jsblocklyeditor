// Pt 2021 - MIT-License

//Kategorie: Werte
Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maus: x-Koordinate");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die aktuelle x-Koordinate der Maus.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseX");
  }
};

Blockly.JavaScript['mousex'] = function(block) {
  var code = 'p5sketch.mouseX';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['pmousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maus: vorige x-Koordinate");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die vorige x-Koordinate der Maus.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/pmouseX");
  }
};

Blockly.JavaScript['pmousex'] = function(block) {
  var code = 'p5sketch.pmouseX';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maus: y-Koordinate");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die y-Koordinate der Maus.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseY");
  }
};

Blockly.JavaScript['mousey'] = function(block) {
  var code = 'p5sketch.mouseY';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['pmousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maus: vorige y-Koordinate");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die vorige y-Koordinate der Maus.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/pmouseY");
  }
};

Blockly.JavaScript['pmousey'] = function(block) {
  var code = 'p5sketch.pmouseY';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['mouse_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Die Maustaste ist gedrückt!");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert \'wahr\', wenn die Maustaste gedrückt ist, sonst \'falsch\'.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseIsPressed");
  }
};

Blockly.JavaScript['mouse_pressed'] = function(block) {
  var code = 'p5sketch.mouseIsPressed';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['canvaswidth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Breite der Zeichenfläche");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die aktuelle Breite der Zeichenfläche.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/width");
  }
};

Blockly.JavaScript['canvaswidth'] = function(block) {
  var code = 'p5sketch.width';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['canvasheight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Höhe der Zeichenfläche");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die aktuelle Höhe der Zeichenfläche.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/height");
  }
};

Blockly.JavaScript['canvasheight'] = function(block) {
  var code = 'p5sketch.height';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['entfernung_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Entfernung von");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1 =");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1 =");
    this.appendDummyInput()
        .appendField("nach");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2 =");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2 =");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
 this.setTooltip("Misst die Entfernung zwischen zwei Koordinaten.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/dist");
  }
};

Blockly.JavaScript['entfernung_var'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.dist(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['map_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rechne ");
    this.appendValueInput("wertVariable")
        .setCheck("Number")
    this.appendValueInput("w1min")
        .setCheck("Number")
        .appendField("min:");
    this.appendValueInput("w1max")
        .setCheck("Number")
        .appendField("max:");
    this.appendDummyInput()
        .appendField("nach");
    this.appendValueInput("w2min")
        .setCheck("Number")
        .appendField("min:");
    this.appendValueInput("w2max")
        .setCheck("Number")
        .appendField("max:");         
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
 this.setTooltip("Rechnet Werte von einem Wertebereich in einen anderen Wertebereich um.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/map");
  }
};

Blockly.JavaScript['map_value'] = function(block) {
  var value_wert = Blockly.JavaScript.valueToCode(block, 'wertVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w1min = Blockly.JavaScript.valueToCode(block, 'w1min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w1max = Blockly.JavaScript.valueToCode(block, 'w1max', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w2min = Blockly.JavaScript.valueToCode(block, 'w2min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w2max = Blockly.JavaScript.valueToCode(block, 'w2max', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.map(' + value_wert + ', ' + value_w1min + ', ' + value_w1max + ', ' + value_w2min + ', ' + value_w2max + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['uhrzeit_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digitale Uhrzeit");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die aktuelle Uhrzeit in digitaler Darstellung.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['uhrzeit_digital'] = function(block) {
  var code = 'String(p5sketch.hour()).padStart(2, "0") + \":\" + String(p5sketch.minute()).padStart(2, "0")  + \":\" + String(p5sketch.second()).padStart(2, "0")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['uhrzeit_sekunde'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Uhrzeit: Sekunde");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die Sekundenzahl der aktuellen Uhrzeit.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/second");
  }
};

Blockly.JavaScript['uhrzeit_sekunde'] = function(block) {
  var code = 'p5sketch.second()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['uhrzeit_minute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Uhrzeit: Minute");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die Minutenzahl der aktuellen Uhrzeit.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/minute");
  }
};

Blockly.JavaScript['uhrzeit_minute'] = function(block) {
  var code = 'p5sketch.minute()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['uhrzeit_stunde'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Uhrzeit: Stunde");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die Stundenzahl der aktuellen Uhrzeit.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/hour");
  }
};

Blockly.JavaScript['uhrzeit_stunde'] = function(block) {
  var code = 'p5sketch.hour()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['zeit_millis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Millisekunden seit Programmstart");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die Anzahl der Millisekunden seit Programmstart.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/millis");
  }
};

Blockly.JavaScript['zeit_millis'] = function(block) {
  var code = 'p5sketch.millis()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tastatur: Taste");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert die gedrückte Taste des aktuellen Tastaturlayouts.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/key");
  }
};

Blockly.JavaScript['p5key'] = function(block) {
  var code = 'p5sketch.key';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5keyCode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tastatur: Tasten-Code");
    this.setOutput(true, null);
    this.setColour(farbep5Werte);
    this.setTooltip("Liefert den Tasten-Code der gedrückten Taste.");
    this.setHelpUrl("https://p5js.org/reference/#p5/keyCode");
  }
};

Blockly.JavaScript['p5keyCode'] = function(block) {
  var code = 'p5sketch.keyCode';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};