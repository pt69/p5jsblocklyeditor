// Original-Blockly-Blöcke überschreiben
// Source: https://github.com/google/blockly
// License: Apache 2 - https://github.com/google/blockly/blob/master/LICENSE
// Modifications: Pt 2021 - MIT-License

//Ändere Variable um Wert
Blockly.JavaScript['math_change'] = function(block) {
  // Add to a variable in place.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  var varName = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return code = varName + ' = ' + varName + ' + (' + extrahiereCode(argument0) + ');\n' + '§#' + varName + ' ← ' + varName + ' + ' + extrahiereStrukt(argument0) + '#§';
};

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for 'for' loop.
  {
    "type": "schleife_forto",
    "message0": "für %1 = %2 bis %3 < %4 in Schritten von %5",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": null
      },
      {
        "type": "input_value",
        "name": "FROM",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_variable",
        "name": "n2",
        "variable": null
      },      
      {
        "type": "input_value",
        "name": "TO",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "BY",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "message1": "mache %1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "helpUrl": "%{BKY_CONTROLS_FOR_HELPURL}",
    "extensions": [
      "contextMenu_newGetVariableBlock",
      "controls_for_tooltip"
    ]
  }
]);  // END JSON EXTRACT (Do not delete this comment.)

Blockly.JavaScript['schleife_forto'] = function(block) {
  // For loop.
  var variable0 = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.JavaScript.valueToCode(block, 'BY',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  var code;
  code = 'for (' + variable0 + ' = ' + extrahiereCode(argument0) + '; ' + variable0 + ' < ' + extrahiereCode(argument1) + '; ' +
        variable0 + ' = ' + variable0 + ' + ' + increment + ') {\n' + '§#FOR: Für ' + variable0 + ' ← ' + extrahiereStrukt(argument0) + ' bis ' + variable0 + ' < ' + extrahiereStrukt(argument1) + '#§' + branch + '§#ENDFOR:#§' + '}\n';
  return code;
};

Blockly.Blocks['liste_nimmanindex'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendValueInput("AT")
        .appendField("nimm Inhalt bei Index");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_nimmanindex'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var at = Blockly.JavaScript.valueToCode(block, 'AT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '[' + at + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['liste_NimmEntferneErstesElement'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendDummyInput()
        .appendField("nimm und entferne erstes Element");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_NimmEntferneErstesElement'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var code = list + '.shift()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['zweiDliste_nimmanindex'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in 2D-Liste");
    this.appendValueInput("idx1")
        .appendField("nimm Inhalt bei Index [");
    this.appendValueInput("idx2")
        .appendField(","); 
    this.appendDummyInput()
        .appendField("]");        
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['zweiDliste_nimmanindex'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var idx1_value = Blockly.JavaScript.valueToCode(block, 'idx1', Blockly.JavaScript.ORDER_ATOMIC);
  var idx2_value = Blockly.JavaScript.valueToCode(block, 'idx2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '[' + idx1_value + '][' +  idx2_value + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['liste_setzeanindex'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendValueInput("AT")
        .appendField("setze bei Index");
    this.appendValueInput("neuesElement")
        .appendField("ein:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_setzeanindex'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var at = Blockly.JavaScript.valueToCode(block, 'AT', Blockly.JavaScript.ORDER_ATOMIC);
  var neuesElement = Blockly.JavaScript.valueToCode(block, 'neuesElement', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '[' + at + '] = ' + extrahiereCode(neuesElement) + ';\n' + '§#Setze ' + extrahiereStrukt(neuesElement) + ' in ' + list + ' bei Index ' + at + ' ein#§';
  return code;
};

Blockly.Blocks['zweiDliste_setzeanindex'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in 2D-Liste");
    this.appendValueInput("idx1")
        .appendField("setze bei Index [");
    this.appendValueInput("idx2")
        .appendField(",");        
    this.appendValueInput("neuesElement")
        .appendField("] ein:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['zweiDliste_setzeanindex'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var idx1_value = Blockly.JavaScript.valueToCode(block, 'idx1', Blockly.JavaScript.ORDER_ATOMIC);
  var idx2_value = Blockly.JavaScript.valueToCode(block, 'idx2', Blockly.JavaScript.ORDER_ATOMIC);
  var neuesElement = Blockly.JavaScript.valueToCode(block, 'neuesElement', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '[' + idx1_value + '][' + idx2_value + '] = ' + extrahiereCode(neuesElement) + ';\n' + '§#' + list + '[' + idx1_value + '][' + idx2_value + '] ← ' + extrahiereStrukt(neuesElement) + '#§';;
  return code;
};

Blockly.Blocks['liste_setzeansende'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendValueInput("neuesElement")
        .appendField("setze ans Ende ein:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_setzeansende'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var neuesElement = Blockly.JavaScript.valueToCode(block, 'neuesElement', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '.push(' + extrahiereCode(neuesElement) + ');\n' + '§#Füge ' + extrahiereStrukt(neuesElement) + ' am Ende von ' + list + ' ein#§';
  return code;
};

Blockly.Blocks['liste_setzeamanfang'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendValueInput("neuesElement")
        .appendField("setze am Anfang ein:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_setzeamanfang'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var neuesElement = Blockly.JavaScript.valueToCode(block, 'neuesElement', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '.unshift(' + extrahiereCode(neuesElement) + ');\n' + '§#Füge ' + extrahiereStrukt(neuesElement) + ' am Anfang von ' + list + ' ein#§';
  return code;
};

Blockly.Blocks['liste_loescheanindex'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField("in Liste");
    this.appendValueInput("idx")
        .appendField("entferne Element mit Index:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['liste_loescheanindex'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var idx_value = Blockly.JavaScript.valueToCode(block, 'idx', Blockly.JavaScript.ORDER_ATOMIC);
  var code = list + '.splice(' + idx_value + ', 1);\n' + '§#Entferne in ' + list + ' das Element bei Index ' + idx_value + '#§';
  return code;
};

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + extrahiereCode(argument0) + ';' + '§#' + varName + ' ← ' + extrahiereStrukt(argument0) + '#§\n';
};

Blockly.JavaScript['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL',
      until ? Blockly.JavaScript.ORDER_LOGICAL_NOT :
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  let structArgument;  
  if (until) {
    structArgument = 'bis ' + extrahiereStrukt(argument0);
    argument0 = '!' + extrahiereCode(argument0);
  } else {
    structArgument = 'solange (' + extrahiereStrukt(argument0) + ')';
  }

  return 'while (' + extrahiereCode(argument0) + ') {\n' + '§#LOOP: wiederhole ' + structArgument + '#§' + branch + '}\n' + '§#ENDFOR:#§';
};

Blockly.JavaScript['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
        block);
  }
  do {
    conditionCode = Blockly.JavaScript.valueToCode(block, 'IF' + n,
        Blockly.JavaScript.ORDER_NONE) || 'false';
    branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
          Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
          block), Blockly.JavaScript.INDENT) + branchCode;
    }
    code += (n > 0 ? ' else ' : '') +
        'if (' + conditionCode + ') {\n' + '§#IF: Wenn ' + conditionCode + '#§' + branchCode + '}' + (n > 0 ? '§#ENDIF:#§' : '');
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE') || Blockly.JavaScript.STATEMENT_SUFFIX) {
    branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
          Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
          block), Blockly.JavaScript.INDENT) + branchCode;
    }
    code += ' else {\n' + '§#ELSE:#§'+ branchCode + '}';
  }
  code +=  '§#ENDIF:#§';
  return code + '\n';
};

Blockly.JavaScript['lists_length'] = function(block) {
  // String or array length.
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '[]';
  return [list + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  var code = '';
  var loopVar = Blockly.JavaScript.nameDB_.getDistinctName(
      'count', Blockly.VARIABLE_CATEGORY_NAME);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    endVar = Blockly.JavaScript.nameDB_.getDistinctName(
        'repeat_end', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + extrahiereCode(endVar) + '; ' +
      loopVar + '++) {\n' + '§#FOR: wiederhole ' + extrahiereStrukt(endVar) + ' mal#§' +
      branch + '}\n'  + '§#ENDFOR:#§';
  return code;
};

Blockly.JavaScript['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  var xfix = '';
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    xfix += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
        block);
  }
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the break/continue is triggered.
    xfix += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
        block);
  }
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    var loop = Blockly.Constants.Loops
        .CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(block);
    if (loop && !loop.suppressPrefixSuffix) {
      // Inject loop's statement prefix here since the regular one at the end
      // of the loop will not get executed if 'continue' is triggered.
      // In the case of 'break', a prefix is needed due to the loop's suffix.
      xfix += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
          loop);
    }
  }
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return xfix + 'break;\n' + '§#die Schleife abbrechen#§';
    case 'CONTINUE':
      return xfix + 'continue;\n' + '§#sofort mit dem nächsten Schleifendurchlauf fortfahren#§';
  }
  throw Error('Unknown flow statement.');
};

Blockly.JavaScript['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  var xfix1 = '';
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    xfix1 += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
        block);
  }
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    xfix1 += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
        block);
  }
  if (xfix1) {
    xfix1 = Blockly.JavaScript.prefixLines(xfix1, Blockly.JavaScript.INDENT);
  }
  var loopTrap = '';
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    loopTrap = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(Blockly.JavaScript.INFINITE_LOOP_TRAP,
        block), Blockly.JavaScript.INDENT);
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
      Blockly.JavaScript.ORDER_NONE) || '';
  var xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Blockly.JavaScript.INDENT + 'return ' + returnValue + ';\n';
  }
  var args = [];
  var variables = block.getVars();
  for (var i = 0; i < variables.length; i++) {
    args[i] = Blockly.JavaScript.nameDB_.getName(variables[i],
        Blockly.VARIABLE_CATEGORY_NAME);
  }
  var code = '§#Anfang von Methode ' + funcName + '()#§' + 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      xfix1 + loopTrap + branch + xfix2 + returnValue + '}' + '§#Ende von Methode ' + funcName + '()#§';
  code = Blockly.JavaScript.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.JavaScript['procedures_defnoreturn'] =
    Blockly.JavaScript['procedures_defreturn'];
    
Blockly.JavaScript['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  var tuple = Blockly.JavaScript['procedures_callreturn'](block);
  return tuple[0] + ';\n' + '§#Führe Methode ' + tuple[0] + ' aus#§';
};

Blockly.JavaScript['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION',
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code += Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
        Blockly.JavaScript.INDENT);
  }
  if (block.hasReturnValue_) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_NONE) || 'null';
    code += Blockly.JavaScript.INDENT + 'return ' + value + ';\n';
  } else {
    code += Blockly.JavaScript.INDENT + 'return;\n';
  }
  code += '}\n';
  return code;
};


//Mathe-Block: Plus, Minus, Mal, Durch, Hoch
Blockly.JavaScript['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
    'POWER': [null, Blockly.JavaScript.ORDER_NONE]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in JavaScript requires a special case since it has no operator.
  if (!operator) {
    code = 'Math.pow(' + extrahiereCode(argument0) + ', ' + extrahiereCode(argument1) + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  code = extrahiereCode(argument0) + operator + extrahiereCode(argument1);
  return [code, order];
};

//Logik-Block: Vergleiche logisch
Blockly.JavaScript['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.JavaScript.ORDER_EQUALITY : Blockly.JavaScript.ORDER_RELATIONAL;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code = extrahiereCode(argument0) + ' ' + operator + ' ' + extrahiereCode(argument1);
  return [code, order];
};

//Logik-Block: Und, Oder
Blockly.JavaScript['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.JavaScript.ORDER_LOGICAL_AND :
      Blockly.JavaScript.ORDER_LOGICAL_OR;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order);
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = extrahiereCode(argument0) + ' ' + operator + ' ' + extrahiereCode(argument1);
  return [code, order];
};

//Logik-Block: Negieren
Blockly.JavaScript['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + extrahiereCode(argument0);
  return [code, order];
};

//Mathe-Block: Zufallszahl zwischen a und b
Blockly.JavaScript['math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var functionName = Blockly.JavaScript.provideFunction_(
      'mathRandomInt',
      ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
          '(a, b) {',
       '  if (a > b) {',
       '    // Swap a and b to ensure a is smaller.',
       '    var c = a;',
       '    a = b;',
       '    b = c;',
       '  }',
       '  return Math.floor(Math.random() * (b - a + 1) + a);',
       '}']);
  var code = functionName + '(' + extrahiereCode(argument0) + ', ' + extrahiereCode(argument1) + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Mathe-Block: Operatoren
Blockly.JavaScript['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg_orig;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_UNARY_NEGATION) || '0';
    arg = extrahiereCode(arg_orig);
    if (arg[0] == '-') {
      // --3 is not legal in JS.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.JavaScript.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_DIVISION) || '0';
    arg = extrahiereCode(arg_orig);
  } else {
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
    arg = extrahiereCode(arg_orig);
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'Math.abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'Math.sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'Math.log(' + arg + ')';
      break;
    case 'EXP':
      code = 'Math.exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'Math.pow(10,' + arg + ')';
      break;
    case 'ROUND':
      code = 'Math.round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'Math.ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'Math.floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'Math.sin(' + arg + ' / 180 * Math.PI)';
      break;
    case 'COS':
      code = 'Math.cos(' + arg + ' / 180 * Math.PI)';
      break;
    case 'TAN':
      code = 'Math.tan(' + arg + ' / 180 * Math.PI)';
      break;
  }
  if (code) {
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'Math.log(' + arg + ') / Math.log(10)';
      break;
    case 'ASIN':
      code = 'Math.asin(' + arg + ') / Math.PI * 180';
      break;
    case 'ACOS':
      code = 'Math.acos(' + arg + ') / Math.PI * 180';
      break;
    case 'ATAN':
      code = 'Math.atan(' + arg + ') / Math.PI * 180';
      break;
    default:
      throw Error('Unknown math operator: ' + operator);
  }
  return [code, Blockly.JavaScript.ORDER_DIVISION];
};

// Rounding functions have a single operand.
Blockly.JavaScript['math_round'] = Blockly.JavaScript['math_single'];
// Trigonometry functions have a single operand.
Blockly.JavaScript['math_trig'] = Blockly.JavaScript['math_single'];

//Math-Single Operator
Blockly.JavaScript['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg_orig;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_UNARY_NEGATION) || '0';
    arg = extrahiereCode(arg_orig);
    if (arg[0] == '-') {
      // --3 is not legal in JS.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.JavaScript.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_DIVISION) || '0';
    arg = extrahiereCode(arg_orig);
  } else {
    arg_orig = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
    arg = extrahiereCode(arg_orig);
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'Math.abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'Math.sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'Math.log(' + arg + ')';
      break;
    case 'EXP':
      code = 'Math.exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'Math.pow(10,' + arg + ')';
      break;
    case 'ROUND':
      code = 'Math.round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'Math.ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'Math.floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'Math.sin(' + arg + ' / 180 * Math.PI)';
      break;
    case 'COS':
      code = 'Math.cos(' + arg + ' / 180 * Math.PI)';
      break;
    case 'TAN':
      code = 'Math.tan(' + arg + ' / 180 * Math.PI)';
      break;
  }
  if (code) {
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'Math.log(' + arg + ') / Math.log(10)';
      break;
    case 'ASIN':
      code = 'Math.asin(' + arg + ') / Math.PI * 180';
      break;
    case 'ACOS':
      code = 'Math.acos(' + arg + ') / Math.PI * 180';
      break;
    case 'ATAN':
      code = 'Math.atan(' + arg + ') / Math.PI * 180';
      break;
    default:
      throw Error('Unknown math operator: ' + operator);
  }
  return [code, Blockly.JavaScript.ORDER_DIVISION];
};

//Mathe-Block: Zahl Prüfen
Blockly.JavaScript['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check_orig = Blockly.JavaScript.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var number_to_check = extrahiereCode(number_to_check_orig);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.JavaScript.provideFunction_(
        'mathIsPrime',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
         '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
         '  if (n == 2 || n == 3) {',
         '    return true;',
         '  }',
         '  // False if n is NaN, negative, is 1, or not whole.',
         '  // And false if n is divisible by 2 or 3.',
         '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
         '    return false;',
         '  }',
         '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
         '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
         '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
         '      return false;',
         '    }',
         '  }',
         '  return true;',
         '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
          Blockly.JavaScript.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

//Mathe-Block: Modulo
Blockly.JavaScript['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DIVIDEND',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var code = extrahiereCode(argument0) + ' % ' + extrahiereCode(argument1);
  return [code, Blockly.JavaScript.ORDER_MODULUS];
};

//Funktions-Block: Return
Blockly.JavaScript['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION',
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code += Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
        Blockly.JavaScript.INDENT);
  }
  if (block.hasReturnValue_) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_NONE) || 'null';
    code += Blockly.JavaScript.INDENT + 'return ' + extrahiereCode(value) + ';\n';
  } else {
    code += Blockly.JavaScript.INDENT + 'return;\n';
  }
  code += '}\n';
  return code;
};


//Text-Block: Join
Blockly.JavaScript['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    var element_orig = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    elements[i] = extrahiereCode(element_orig);
  }
  var code = '[' + elements.join(',') + '].join(\'\')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Text-Block: Texteingabe
Blockly.JavaScript['text_prompt_ext'] = function(block) {
  // Prompt function.
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
  }
  var code = 'window.prompt(' + extrahiereCode(msg) + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'Number(' + code + ')';
  }
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Text-Block: Textlänge
Blockly.JavaScript['text_length'] = function(block) {
  // String or array length.
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  var code = extrahiereCode(text) + '.length' + '§#Länge von ' + extrahiereStrukt(text) + '#§';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

//Text-Block: Umwandeln
Blockly.Blocks['text_changeCase'] = {
  /**
   * Block for changing capitalization.
   * @this {Blockly.Block}
   */
  init: function() {
    var OPERATORS = [
      [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'], 'UPPERCASE'],
      [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'], 'LOWERCASE']
    ];
    this.setHelpUrl(Blockly.Msg['TEXT_CHANGECASE_HELPURL']);
    this.setStyle('text_blocks');
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'CASE');
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg['TEXT_CHANGECASE_TOOLTIP']);
  }
};

Blockly.JavaScript['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var textOrder = operator ? Blockly.JavaScript.ORDER_MEMBER :
      Blockly.JavaScript.ORDER_NONE;
  var text_orig = Blockly.JavaScript.valueToCode(block, 'TEXT',
      textOrder) || '\'\'';
  var text = extrahiereCode(text_orig);
  var code = text + operator;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};