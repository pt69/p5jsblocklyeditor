// Pt 2021 - MIT-License

var p5jsBlocklyEditorToolbox = `
<xml id="toolbox" style="display: none">
    <category name="Schildkröte" colour="#006400">
        <block type="neue_turtle">
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>
        <block type="turtle_run">
          <value name="runVariable">
            <block type="variables_get">
              <field name="VAR">turtleRunVar</field>
            </block>
          </value>  
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>        
        <block type="turtle_animate">
          <value name="runVariable">
            <block type="variables_get">
              <field name="VAR">turtleRunVar</field>
            </block>
          </value>           
        </block>        
        <block type="turtle_pendown">
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>
        <block type="turtle_penup">
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>        
        <block type="turtle_color_pick">
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>
        <block type="turtle_color_var">
          <value name="r">
            <shadow type="rgb_num">
              <field name="rgbnum">0</field>
            </shadow>
          </value>
          <value name="g">
            <shadow type="rgb_num">
              <field name="rgbnum">0</field>
            </shadow>
          </value>       
          <value name="b">
            <shadow type="rgb_num">
              <field name="rgbnum">0</field>
            </shadow>
          </value>
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>        
        <block type="turtle_forward_var">
          <value name="delta_forward">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value> 
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>
        <block type="turtle_back_var">
          <value name="delta_back">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>        
        <block type="turtle_left_var">
          <value name="delta_left">
            <shadow type="winkel_num">
              <field name="winkel">0</field>
            </shadow>
          </value> 
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block>
        <block type="turtle_right_var">
          <value name="delta_right">
            <shadow type="winkel_num">
              <field name="winkel">0</field>
            </shadow>
          </value> 
          <value name="turtleVariable">
            <block type="variables_get">
              <field name="VAR">turtleVar</field>
            </block>
          </value>           
        </block> 
    </category>     
    <category name="Grundformen" colour="#e67e22">
      <block type="ellipse_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="point_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
      </block>
      <block type="line_var">
        <value name="x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="triangle_var">
        <value name="x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="x3">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y3">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="rect_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>      
      </block>   
      <block type="polygon"></block> 
      <block type="vertex_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
      </block> 
    </category>    
    <category name="Aussehen" colour="#95a5a6">
      <block type="p5_color">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>        
      <block type="background_pick"></block>
      <block type="background_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>
      <block type="background_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
      </block>       
      <block type="stroke_pick"></block> 
      <block type="stroke_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>      
      <block type="stroke_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>      
      <block type="fill_pick"></block>
      <block type="fill_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>        
      <block type="fill_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>
      <block type="nofill"></block>        
      <block type="strokeweight_var">
        <value name="dicke">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
      </block>
    </category>     
    <category name="Text" colour="#5ba58c">
      <block type="p5textalign"></block>
      <block type="text"></block>
      <block type="text_unicodezeichen"></block>
      <block type="p5text_var">
        <value name="text_eingabe">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="p5textbox_var">
        <value name="text_eingabe">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="p5textsize_var">
        <value name="text_groesse">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="anzeige_stellen">
        <value name="zahl">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="anzahlstellen">
          <shadow type="math_number">
            <field name="NUM">0</field>
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
      <block type="zeichen_an_stelle_aus_string">
        <value name="zeichenfolge">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="stelle">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="string_in_ganzzahl">
        <value name="zeichenfolge">
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
      <block type="text_input">
        <value name="textFeldVariable">
          <block type="variables_get">
            <field name="VAR">eingabefeld</field>
          </block>
        </value>        
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>      
        <value name="speicherVariable">
          <block type="variables_get">
            <field name="VAR">textVar</field>
          </block>
        </value>
          <value name="zeichenflaecheVariable">
            <block type="variables_get">
              <field name="VAR">zeichenflaeche</field>
            </block>
          </value>         
      </block>
    </category> 
    <category name="Werte" colour="#2f7db7">
        <block type="p5key"></block>
        <block type="p5keyCode"></block>
        <block type="mousex"></block>
        <block type="mousey"></block>
        <block type="pmousex"></block>
        <block type="pmousey"></block>        
        <block type="mouse_pressed"></block>
        <block type="canvaswidth"></block>
        <block type="canvasheight"></block>
        <block type="uhrzeit_digital"></block>
        <block type="uhrzeit_stunde"></block>        
        <block type="uhrzeit_minute"></block>
        <block type="uhrzeit_sekunde"></block>
        <block type="zeit_millis"></block>
        <block type="entfernung_var">
          <value name="x1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value> 
          <value name="x2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>        
        </block>
        <block type="map_value">
          <value name="w1min">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="w1max">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value> 
          <value name="w2min">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="w2max">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>         
        </block>        
    </category>
    <category name="p5-Helfer" colour="#da5a73">
        <block type="moduloframe"></block>
        <block type="framerate_number"></block>        
        <block type="p5_random">
          <value name="z1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="z2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>          
        </block>
        <block type="p5_noise"></block>          
        <block type="push_pop"></block>
        <block type="translate_var">
          <value name="deltaX">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="deltaY">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>         
        </block>          
        <block type="rotate_var">
          <value name="winkel">
            <shadow type="winkel_num">
              <field name="winkel">0</field>
            </shadow>
          </value>         
        </block>
        <block type="scale_var">
          <value name="faktor">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>          
        </block>
      <block type="p5_button">
        <value name="buttonVariable">
          <block type="variables_get">
            <field name="VAR">button1</field>
          </block>
        </value>        
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
          <value name="zeichenflaecheVariable">
            <block type="variables_get">
              <field name="VAR">zeichenflaeche</field>
            </block>
          </value>         
      </block>        
    </category>     
    <category name="p5-Funktionen" colour="#ed225d">
        <block type="setup">
          <value name="zeichenflaecheVariable">
              <block type="variables_get">
                <field name="VAR">zeichenflaeche</field>
              </block>
            </value>          
        </block>
        <block type="draw"></block>
        <block type="mousepressed"></block>
        <block type="keypressed"></block>
    </category>
    <sep></sep>
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
        <block type="controls_for">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
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
        <block type="decToBin">
          <value name="ganzZahl">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="binToDec">
          <value name="binZahl">
            <shadow type="math_number">
              <field name="NUM">1010</field>
            </shadow>
          </value>
        </block> 
        <block type="decToHex">
          <value name="ganzZahl">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="hexToDec">
          <value name="hexZahl">
            <shadow type="text">
              <field name="TEXT">1f</field>
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
    <category name="ADT BinTree" colour="#55414b">
      <block type="adt_binaerBaum_neu">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_binaerBaum_inhalteinfuegen">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_binaerBaum_inhaltentfernen">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>
        <value name="entfElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_binaerBaum_maxTiefe">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_binaerBaum_gewichten">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_binaerBaum_bDrucker">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>       
        <value name="xT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
        <value name="dX">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>              
    </category> 
    <sep></sep>             
    <category name="OOP" colour="#d2b48c">
        <block type="klasse_anlegen"></block>
        <block type="klasse_attribut"></block> 
        <block type="klasse_getattribut"></block> 
        <block type="klasse_methode"></block> 
        <block type="methode_parameter"></block>
        <block type="methode_getparameter"></block> 
        <block type="objekt_anlegen">
          <value name="objektVariable">
            <block type="variables_get">
              <field name="VAR">objektVar</field>
            </block>
          </value>           
        </block>
        <block type="objekt_methode_aufrufen">
          <value name="objektVariable">
            <block type="variables_get">
              <field name="VAR">objektVar</field>
            </block>
          </value>           
        </block>         
        <block type="objekt_wert"></block>
        <block type="attribut_aendern"></block>
    </category>      
    </xml>
`