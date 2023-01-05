// Pt 2021 - MIT-License

Blockly.Blocks['neue_turtle'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle einfügen:");      
    this.appendDummyInput()
        .appendField("| x =")
        .appendField(new Blockly.FieldNumber(0, -maxKoord, maxKoord, 1), "xkoord")
        .appendField("y =")
        .appendField(new Blockly.FieldNumber(0, -maxKoord, maxKoord, 1), "ykoord");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Fügt eine Turtle in die Zeichenfläche ein.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['neue_turtle'] = function(block) {
  var number_xkoord = block.getFieldValue('xkoord');
  var number_ykoord = block.getFieldValue('ykoord');
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_varName + " = new Turtle(p5sketch, " + number_xkoord + ", " + number_ykoord + ");\n";
  return code;
};

Blockly.Blocks['turtle_run'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");
    this.appendValueInput("runVariable")
        .appendField("| Bewegung aufzeichnen:");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Zeichnet die Bewegung der Turtle auf.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_run'] = function(block) {
  var value_runVarName = Blockly.JavaScript.valueToCode(block, 'runVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_turtleVarName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_runVarName + ' = ' + value_turtleVarName + '.getRun();\n';
  return code;
};

Blockly.Blocks['turtle_animate'] = {
  init: function() {
    this.appendValueInput("runVariable")
        .appendField("Turtle: Animation starten");      
    this.appendDummyInput()
        .appendField("| Geschwindigkeit:")
        .appendField(new Blockly.FieldNumber(1, 0, 100, 0.01), "speed");
    this.setInputsInline(true);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Spielt die Bewegung der Turtle ab.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_animate'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var value_varName = Blockly.JavaScript.valueToCode(block, 'runVariable', Blockly.JavaScript.ORDER_ATOMIC);   
  var code =  value_varName + '.animate(' + number_speed + ');\n';
  return code;
};

Blockly.Blocks['turtle_pendown'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Stift runter");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Die Turtle zeichnet während ihrer Bewegung.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_pendown'] = function(block) {
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName+ '.penDown = true;\n';
  return code;
};

Blockly.Blocks['turtle_penup'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Stift rauf");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Die Turtle zeichnet nicht während ihrer Bewegung.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_penup'] = function(block) {
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.penDown = false;\n';
  return code;
};

Blockly.Blocks['turtle_color_pick'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Malfarbe")
        .appendField(new Blockly.FieldColour("#ff0000"), "farb_name");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Malfarbe der Turtle festlegen.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_color_pick'] = function(block) {
  var colour_name = block.getFieldValue('farb_name');
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.color = p5sketch.color(\"' + colour_name + '\");\n';
  return code;
};

Blockly.Blocks['turtle_color_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Malfarbe");
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
    this.setColour(farbeTurtle);
    this.setTooltip("Malfarbe der Turtle festlegen.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_color_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.color = p5sketch.color(' + number_r + ', ' + number_g + ', ' + number_b + ');\n';
  return code;
};

Blockly.Blocks['turtle_color_t_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Malfarbe");
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
    this.setColour(farbeTurtle);
    this.setTooltip("Malfarbe der Turtle festlegen.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_color_t_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.color = p5sketch.color(' + number_r + ', ' + number_g + ', ' + number_b + ', ' + number_t + ');\n';
  return code;
};

Blockly.Blocks['turtle_forward_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Vorwärts");
    this.appendValueInput("delta_forward")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("px");      
    this.setInputsInline(true);     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Turtle bewegt sich die angegebe Anzahl von Pixeln vorwärts.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_forward_var'] = function(block) {
  var number_delta_forward = Blockly.JavaScript.valueToCode(block, 'delta_forward', Blockly.JavaScript.ORDER_ATOMIC);
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.forward(' + number_delta_forward + ');\n';
  return code;
};

Blockly.Blocks['turtle_back_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Rückwärts");
    this.appendValueInput("delta_back")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("px");        
    this.setInputsInline(true);       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Turtle bewegt sich die angegebe Anzahl von Pixeln rückwärts.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_back_var'] = function(block) {
  var number_delta_back = Blockly.JavaScript.valueToCode(block, 'delta_back', Blockly.JavaScript.ORDER_ATOMIC);
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.back(' + number_delta_back + ');\n';
  return code;
};

Blockly.Blocks['turtle_left_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Drehung nach links");
    this.appendValueInput("delta_left")
        .setCheck("Number");
    this.setInputsInline(true);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Turtle dreht sich die angegebe Winkelweite nach links.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_left_var'] = function(block) {
  var number_delta_left = Blockly.JavaScript.valueToCode(block, 'delta_left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.left(' + number_delta_left + ');\n';
  return code;
};

Blockly.Blocks['turtle_right_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");      
    this.appendDummyInput()
        .appendField("| Drehung nach rechts")
    this.appendValueInput("delta_right")
        .setCheck("Number");
    this.setInputsInline(true);       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Turtle dreht sich die angegebe Winkelweite nach rechts.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_right_var'] = function(block) {
  var number_delta_right = Blockly.JavaScript.valueToCode(block, 'delta_right', Blockly.JavaScript.ORDER_ATOMIC);
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = value_varName + '.right(' + number_delta_right + ');\n';
  return code;
};

Blockly.Blocks['turtle_posx_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");    
    this.appendDummyInput()
        .appendField("| x-Position");
    this.setOutput(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Gibt die aktuelle x-Position der Turtle zurück.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_posx_var'] = function(block) {
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = value_varName + '.path[' + value_varName + '.path.length-1].pos.x';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['turtle_posy_var'] = {
  init: function() {
    this.appendValueInput("turtleVariable")
        .appendField("Turtle:");    
    this.appendDummyInput()
        .appendField("| y-Position");
    this.setOutput(true, null);
    this.setColour(farbeTurtle);
 this.setTooltip("Gibt die aktuelle y-Position der Turtle zurück.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['turtle_posy_var'] = function(block) {
  var value_varName = Blockly.JavaScript.valueToCode(block, 'turtleVariable', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = value_varName + '.path[' + value_varName + '.path.length-1].pos.y';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};