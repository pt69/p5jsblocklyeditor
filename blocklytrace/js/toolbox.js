// Pt 2021 - MIT-License

var p5jsBlocklyEditorToolbox = `
<xml id="toolbox" style="display: none">
    <category name="Trace-Tabelle" colour="#e67e22">
        <block type="trace_join"></block>     
    </category>      
    <category name="Text" colour="#5ba58c">
      <block type="text"></block>
      <block type="text_prompt_ext">
        <mutation type="TEXT"></mutation>
        <field name="TYPE">TEXT</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block> 
      <block type="text_join"></block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
    </category> 
    <category name="Variablen" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>    
    <category name="Schleifen" colour="%{BKY_LOOPS_HUE}">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="schleife_forto">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
    </category>    
    <category name="Logik" colour="%{BKY_LOGIC_HUE}">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
    </category>
    <category name="Mathematik" colour="%{BKY_MATH_HUE}">
        <block type="math_number"></block>
        <block type="istInputEineZahl"></block>
        <block type="math_random_float"></block>        
        <block type="math_random_int">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>        
        <block type="math_arithmetic">
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_single">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_trig">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
    </category>
    <sep></sep>
    <category name="js-Funktionen" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
    <category name="js-Liste" colour="%{BKY_LISTS_HUE}">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>      
      <block type="liste_nimmanindex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="zweiDliste_nimmanindex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="idx1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="idx2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>
      <block type="liste_NimmEntferneErstesElement">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>      
      <block type="liste_setzeanindex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block>
      <block type="zweiDliste_setzeanindex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="idx1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="idx2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block>  
      <block type="liste_setzeansende">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block> 
      <block type="liste_setzeamanfang">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block> 
      <block type="liste_loescheanindex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
        <value name="idx">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block>       
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
      <block type="lists_reverse"></block>
    </category> 
    <sep></sep>
    <category name="ADT Stapel" colour="#92967D">
      <block type="adt_stack_neu">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_stack_isEmpty">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_stack_top">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_stack_push">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_stack_pop">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_stack_getStack">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>       
    </category>
    <category name="ADT Schlange" colour="#6E7C7C">
      <block type="adt_queue_neu">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_queue_isEmpty">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_queue_head">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_queue_enqueue">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_queue_dequeue">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>  
      <block type="adt_queue_getQueue">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>       
    </category>    
    <category name="ADT Dyn. Reihung" colour="#435560">
      <block type="adt_dynArray_neu">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_dynArray_isEmpty">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>       
      <block type="adt_dynArray_getItem">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>  
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="adt_dynArray_append">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_dynArray_insertAt">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block> 
      <block type="adt_dynArray_setItem">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block>  
      <block type="adt_dynArray_delete">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="idx">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_dynArray_getLength">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>  
      <block type="adt_dynArray_getDynArray">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>        
    </category>    
    </xml>
`