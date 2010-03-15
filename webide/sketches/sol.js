//
// Sol by Andor Salga
//

float rotEarth = 0.0;
float rotMoon = 0.0;

void setup(){
  size(200,200,P3D);
}

void draw()
{
  // clear the color buffer
  background(0);
  noStroke();
  directionalLight( 255, 255, 255,   0, 1, 0 );
  ambientLight( 128, 255, 255 );

  // push matrix to center of the viewport
  pushMatrix();
  translate( width/2, height/2, 140 );

  // draw the Sun
  fill( 255, 0, 0 );
  sphere( 5.0 );

  // push on another matrix and rotate and trans
  pushMatrix();
  rotateY( rotEarth += 0.01 );
  translate( 0, 0, 10 );

  fill( 25, 70, 20 );

  // draw the Earth
  sphereDetail( 16 );
  sphere( 2.5 );

  pushMatrix();
  rotateY( rotMoon += 0.08 );
  translate( 0, 0, 3.5 );

  // draw the Moon
  fill( 128, 128, 128 );
  sphere( 0.5 );

  popMatrix();
  popMatrix();
  popMatrix();
}