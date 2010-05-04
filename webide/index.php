<html>

  <head>
    <title>Processing.JS WEB IDE</title>

   <!-- link to my experiments branch so I don't have to keep ftping the pjs lib -->
    <script src="http://github.com/asalga/processing-js/raw/experiments/processing.js" type="text/javascript"></script>
    <link rel="stylesheet" href="style.css" />
    <script>var p = null;</script>
  </head>
  
  <body onload="loadSketch();">

    <h1><a href="http://asalga.wordpress.com">Andor Salga</a>'s Processing.JS Web IDE</h1>
    <p>
      3D sketches require a WebGL-enabled browser. Get either  <a href="http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/">Minefield</a>, <a href="http://nightly.webkit.org/">Webkit</a> or <a href="http://build.chromium.org/buildbot/snapshots/">Chromium</a>.<br />
      <br />
      To load an existing sketch: Select one from the drop down and hit "Load Sketch".<br />
      Then change the sketch and hit "Update".<br />
      <br />
      Not all Processing functionality has been implemented (vertex, triangle, quad, etc are still missing).<br />
    </p>

    <p>
      <select id="sketchSelect">
      
        <?
          $sel = $_GET['sketchID'];
          
          $sketchNames = array(
            0 => 'Corkscrew', 
            1 => 'Rotating Red Cube',
            2 => 'Light Speed', 
            3 => 'Floating Gun', 
            4 => 'Perspective',
            5 => 'Move Eye',
            6 => 'Sol', 
            7 => 'Bouncing Box',
            8 => 'Mouse Light Direction',
            9 => 'Disco',             
            10 => 'Cubic Grid',            
            11 => 'Bird',
            12 => 'Brids',
            13 => 'Line Lengths', 
            14 => 'Poetry',
            15 => 'Blinds',
            16 => 'Type',
            17 => 'Chem',
            18 => 'Paint Code',
            19 => 'Wave',
            20 => 'Robot Arm',
            21 => 'Skyroads',
            22 => 'Kar',
            23 => 'Precipice',
            24 => 'Create Cube',
            25 => 'Flickering Seeds'
          );

          for( $i = 0; $i < count($sketchNames); $i++ ) {
            echo "<option value='$i'";
            
            if( $sel == $i ) {
              echo " selected='selected' ";
            }
            
            echo ">$sketchNames[$i]</option>\n";
          }
      ?>

      </select>
      <input type="button" value="Load Sketch" onclick="loadSketch();" />
    </p>

    <p>
      <span>
        <textarea id="source" rows="30" cols="30%"></textarea></span>&nbsp;&nbsp;&nbsp;
        <span id="d">
          <canvas id="2d" width="500" style="" height="500"></canvas>
          <canvas id="3d" width="500" style="" height="500"></canvas>
        </span>
      </p>
    </p>

    <p>
      <input type="button" onclick="runIt();" value= "Update"/>
    </p>

    <script type="text/javascript">
    
      //
      function loadDefault()
      {
        source.value = ajax("sketches/corkscrew.js");
        runIt();
      }
      
      function isSketch2D(src)
      {
        var r = "" + src.match(/size\s*\((?:.+),(?:.+),\s*(OPENGL|P3D)\s*\)\s*;/);
        var is2D = true;
        if(src.match(/size\s*\((?:.+),(?:.+),\s*(OPENGL|P3D)\s*\)\s*;/))
        {
         is2D = false;
        }
        return is2D;
      }

      //
      function runIt() {
        if(p) {
          p.exit();
          delete p;
        }        

        var is2D = isSketch2D(source.value);

        var refStrToShow = is2D ? '2d' : '3d';
        var refStrToHide = !is2D ? '2d' : '3d';
        
        var toShow = document.getElementById( refStrToShow );
        toShow.setAttribute("style", "display:inline;");
        
        var toHide = document.getElementById( refStrToHide );
        toHide.setAttribute( "style", "display:none;" );

        p = Processing( toShow, source.value );
      }
      
      //
      function ajax(url)
      {
        var AJAX = new window.XMLHttpRequest();
        if (AJAX) {
          AJAX.open("GET", url + "?t=" + new Date().getTime(), false);
          AJAX.send(null);
          return AJAX.responseText;
        } else {
          return false;
        }
      };

      //
      //
      function loadSketch()
      {
        // because Minefield is telling me to...
        selection = document.getElementById('sketchSelect');
        src = document.getElementById('source');
        var fileSource = "";

        switch(selection.selectedIndex)
        {
          case 0:  fileSource = "sketches/corkscrew.js";break;
          case 1:  fileSource = "sketches/rot_red_cube.js";break;
          case 2:  fileSource = "sketches/light_speed.js";break;
          case 3:  fileSource = "sketches/floating_gun.js";break;
          case 4:  fileSource = "sketches/perspective.js";break;
          case 5:  fileSource = "sketches/move_eye.js";break;
          case 6:  fileSource = "sketches/sol.js";break;
          case 7:  fileSource = "sketches/bouncing_box.js";break;
          case 8:  fileSource = "sketches/mouse_light_direction.js";break;
          case 9:  fileSource = "sketches/disco.js";break;
          case 10: fileSource = "sketches/cubic_grid.js";break;
          case 11: fileSource = "sketches/bird.js";break;
          case 12: fileSource = "sketches/birds.js";break;
          case 13:  fileSource = "sketches/line_lengths.js";break;
          case 14:  fileSource = "sketches/poetry.js";break;
          case 15: fileSource = "sketches/blinds.js";break;
          case 16: fileSource = "sketches/type.js";break;
          case 17: fileSource = "sketches/chem.js";break;
          case 18: fileSource = "sketches/paint_code.js"; break;
          case 19: fileSource = "sketches/wave.js";break;
          case 20: fileSource = "sketches/robot_arm.js";break;
          case 21: fileSource = "sketches/skyroads.js";break;
          case 22: fileSource = "sketches/kar.js";break;
          case 23: fileSource = "sketches/precipice.js";break;
          case 24: fileSource = "sketches/create_cube.js";break;
          case 25: fileSource = "sketches/flickering_seeds.js";break;
          default:break;
        }

        if(fileSource.length > 0) {
          source.value = ajax(fileSource);
          runIt();
        }
      }
    </script>

    <!-- Don't force the recompile button to be right near the bottom of the page -->
    <br />
    <span id="debug"></span>
    <br />
    <br />
  </body>
</html>
