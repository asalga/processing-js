//
// The Andor Corkscrew
//

float r = 0;

void setup()
{
  // Don't modify this...
  size(500,500,OPENGL);
}

void draw()
{
  camera();
  background(33,66,99);

  translate(250,270,380);
  rotateY(r += 0.01);
  
  strokeWeight(1);

  for(int i = 0; i < 15; i++)
  {
    fill(i * 10, 1, 1);
    noStroke();
    pushMatrix();
    translate(i-7,-3,0);
    translate(0,sin(frameCount/5 + i),0);
    rotateX(i/10 + frameCount/20);
    box(1,1,3);
    popMatrix();
  }
  
  stroke(50,200,100);
  noFill();
  strokeWeight(3);
  box(13,1,13);
}