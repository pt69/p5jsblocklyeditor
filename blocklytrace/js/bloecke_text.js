// Original-Blockly-Blöcke überschreiben
// Source: https://github.com/google/blockly
// License: Apache 2 - https://github.com/google/blockly/blob/master/LICENSE
// Modifications: Pt 2021 - MIT-License

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for text value
  {
    "type": "trace_join",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "traceName",
        "text": "Trace1"
      }
    ],
    "previousStatement": null,
    "nextStatement": null, 
    "colour": "#e67e22",
    "helpUrl": "",
    "tooltip": "",
    "mutator": "trace_join_mutator"
  },
  {
    "type": "trace_create_join_container",
    "message0": "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    "args0": [{
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "STACK"
    }],
    "colour": "#e67e22",
    "tooltip": "",
    "enableContextMenu": false
  },
  {
    "type": "trace_create_join_item",
    "message0": "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#e67e22",
    "tooltip": "",
    "enableContextMenu": false
  }
]);  // END JSON EXTRACT (Do not delete this comment.)

Blockly.JavaScript['trace_join'] = function(block) {
   var text_tracename = block.getFieldValue('traceName');
  //Variablen für TraceTabelle in varNameArr speichern
  switch (block.itemCount_) {
    case 0:
      return 'tracetabelle(["' + text_tracename + '"]);\n';
    case 1:
      var element = Blockly.JavaScript.valueToCode(block, 'ADD0', Blockly.JavaScript.ORDER_ATOMIC);
      var code = 'tracetabelle(["' + text_tracename + '",' + extrahiereCode(element) + ']);\n';
      return code;
    case 2:
      var element0 = Blockly.JavaScript.valueToCode(block, 'ADD0', Blockly.JavaScript.ORDER_ATOMIC);
      var element1 = Blockly.JavaScript.valueToCode(block, 'ADD1', Blockly.JavaScript.ORDER_ATOMIC);
      var code = 'tracetabelle(["' + text_tracename + '",' + extrahiereCode(element0) + ',' + extrahiereCode(element1) + ']);\n';
      return code;
    default:
      var elements = new Array(block.itemCount_);
      for (var i = 0; i < block.itemCount_; i++) {
        let neuesElement = Blockly.JavaScript.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_ATOMIC);
        elements[i] = extrahiereCode(neuesElement);
      }
      var code = 'tracetabelle(["' + text_tracename + '",' + elements.join(',') + ']);\n';
      return code;
  }
};

/**
 * Mixin for mutator functions in the 'trace_join_mutator' extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
const TRACE_JOIN_MUTATOR_MIXIN = {
  /**
   * Create XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {{itemCount: number}} The state of this block, ie the item count.
   */
  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_,
    };
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the item count.
   */
  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'];
    this.updateShape_();
  },  
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('trace_create_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('trace_create_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    const connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      i++;
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(this.newQuote_(true))
          .appendField(this.newQuote_(false));
    }
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        const input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
        if (i === 0) {
          input.appendField('Trace-Eintrag dazu');
        }
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput('ADD' + i); i++) {
      this.removeInput('ADD' + i);
    }
  }
};

/**
 * @mixin
 * @package
 * @readonly
 */
const QUOTE_IMAGE_MIXIN = {
  /**
   * Image data URI of an LTR opening double quote (same as RTL closing double
   * quote).
   * @readonly
   */
  QUOTE_IMAGE_LEFT_DATAURI:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
      'n0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY' +
      '1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1' +
      'HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMf' +
      'z9AylsaRRgGzvZAAAAAElFTkSuQmCC',
  /**
   * Image data URI of an LTR closing double quote (same as RTL opening double
   * quote).
   * @readonly
   */
  QUOTE_IMAGE_RIGHT_DATAURI:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
      'qUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhg' +
      'gONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvB' +
      'O3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5Aos' +
      'lLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==',
  /**
   * Pixel width of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_WIDTH: 12,
  /**
   * Pixel height of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_HEIGHT: 12,

  /**
   * Inserts appropriate quote images before and after the named field.
   * @param {string} fieldName The name of the field to wrap with quotes.
   * @this {Block}
   */
  quoteField_: function(fieldName) {
    for (let i = 0, input; (input = this.inputList[i]); i++) {
      for (let j = 0, field; (field = input.fieldRow[j]); j++) {
        if (fieldName === field.name) {
          input.insertFieldAt(j, this.newQuote_(true));
          input.insertFieldAt(j + 2, this.newQuote_(false));
          return;
        }
      }
    }
    console.warn(
        'field named "' + fieldName + '" not found in ' + this.toDevString());
  },

  /**
   * A helper function that generates a FieldImage of an opening or
   * closing double quote. The selected quote will be adapted for RTL blocks.
   * @param {boolean} open If the image should be open quote (“ in LTR).
   *                       Otherwise, a closing quote is used (” in LTR).
   * @return {!FieldImage} The new field.
   * @this {Block}
   */
  newQuote_: function(open) {
    const isLeft = this.RTL ? !open : open;
    const dataUri =
        isLeft ? this.QUOTE_IMAGE_LEFT_DATAURI : this.QUOTE_IMAGE_RIGHT_DATAURI;
    return new FieldImage(
        dataUri, this.QUOTE_IMAGE_WIDTH, this.QUOTE_IMAGE_HEIGHT,
        isLeft ? '\u201C' : '\u201D');
  },
};

/**
 * Performs final setup of a trace_join block.
 * @this {Blockly.Block}
 */
const TRACE_JOIN_EXTENSION = function() {
  // Add the quote mixin for the itemCount_ = 0 case.
  this.mixin(QUOTE_IMAGE_MIXIN);
  // Initialize the mutator values.
  this.itemCount_ = 2;
  this.updateShape_();
  // Configure the mutator UI.
  this.setMutator(new Blockly.Mutator(['trace_create_join_item']));
};

Blockly.Extensions.registerMutator('trace_join_mutator', TRACE_JOIN_MUTATOR_MIXIN, TRACE_JOIN_EXTENSION);