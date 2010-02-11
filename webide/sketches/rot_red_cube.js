//
// Rotating Red Cube
//

float r = 0;

void setup()
{
  // Don't modify this...
  size(500,500,OPENGL);

  noFill();
  strokeWeight(3);
}

void draw()
{
  camera();
  background(0,0,0);

  translate(250,250,340);
  rotateZ(frameCount/20);
  rotateY(r += 0.02);
  stroke(5 + frameCount%200,0,0);

  box(10,10,10);
}