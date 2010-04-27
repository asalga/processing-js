boolean elbow = false;
float e = 0;
int x = 0;

void setup(){
  size(500,500, OPENGL);
}

void draw(){
  background(0);
  lights();

  directionalLight(33,66,99, 0, 1, 0);

  translate(width/2-80, height/2, 130);

  rotateX(-PI/4);
  noStroke();

  // shoulder joint
  pushMatrix();
    sphere(28);
  
    // bicep
    pushMatrix();
      translate(40,0,0);
      box(40);

      // elbow joint
      pushMatrix();
        translate(40,0,0);

        if(elbow == false){
          rotate((mouseY-250)/500 * PI*1.5);
          rotateY(e);
        }
        else{
          rotate((mouseY-250)/500 * PI*1.5);
          e = (x-mouseX)/500 * PI*1.5;
          rotateY(e);
        }
        sphere(23);
       
       // forearm
       pushMatrix();
         translate(40,0,0);
         box(40);

         // wrist
         pushMatrix();
           translate(40,0,0);
           rotate((mouseX-250)/500 * PI*1.5);

           sphere(20);

           pushMatrix();
             translate(30,0,0);
             box(20);
           popMatrix();
         popMatrix();
       popMatrix();
      popMatrix();
    popMatrix();
  popMatrix();
}

void mousePressed(){
  elbow = true;
  x = mouseX;
}

void mouseReleased(){
  elbow = false;
}