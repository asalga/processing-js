//
// Sketch from Processing.org, slightly modified
//

void setup() {
  size(640,360,P3D);
  noStroke();
}

void draw() {
  // removed lights();
  background( 200 );
  float cameraY = height/2.0;
  float fov = mouseX/float(width) * PI/2;
  float cameraZ = cameraY / tan(fov / 2.0);
  float aspect = float(width)/float(height);
  if (mousePressed) {
    aspect = aspect / 2.0;
  }
  perspective(fov, aspect, cameraZ/10.0, cameraZ*10.0);
  
  translate(width/2+30, height/2, 0);
  rotateX(-PI/6);
  rotateY(PI/3 + mouseY/float(height) * PI);
  box(45);
  translate(0, 0, -50);
  box(30);
}