<html>

  <head>
    <title>Processing.JS WEB IDE</title>
    <script src="processing.js" type="text/javascript"></script>
    <link rel="stylesheet" href="style.css" />
    <script>var p = null;</script>
  </head>
  
  <body onload="loadSketch();">

    <h1><a href="http://asalga.wordpress.com">Andor Salga</a></h1>
    <h2>Processing.JS WEB IDE</h2>

    <p>
      This seems to work with <a href="http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/">Minefield</a> and <a href="http://nightly.webkit.org/">Webkit</a>, but not <a href="http://build.chromium.org/buildbot/snapshots/">Chromium</a><br />
      <br />
      Make changes to the sketch source on the left and click the button on the bottom<br />
      to update the canvas. Keep in mind not all Processing functionality has been implemented.
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
            10 => 'Line Lengths', 
            11 => 'Poetry');
          
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
      
      //
      function runIt(is2D) {
        if(p) {
          p.exit();
          delete p;
        }        

        var refStrToShow = is2D ? '2d' : '3d';
        var refStrToHide = !is2D ? '2d' : '3d';
        
        var toShow = document.getElementById( refStrToShow );
        toShow.setAttribute("style", "display:inline;");
        
        var toHide = document.getElementById( refStrToHide );
        toHide.setAttribute( "style", "display:none;" );

        p = Processing( toShow ,source.value );
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
        var is2D = false;

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

          //
          case 10:  fileSource = "sketches/line_lengths.js";
                    is2D = true;
                    break;
          case 11:  fileSource = "sketches/poetry.js";
                    is2D = true;
                    break;
          default:break;
        }
        
        if(fileSource.length > 0) {
          source.value = ajax(fileSource);
          runIt(is2D);
        }
      }
    </script>

    <!-- Don't force the recompile button to be right near the bottom of the page -->
    <br />
    <br />
    <br />
  </body>
</html>