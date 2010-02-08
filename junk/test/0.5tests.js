float v=1;
void setup()
{
  size(500,500,OPENGL);
}

void draw()
{
  background(33,66,99);

  v+=0.01;

  camera();
  translate(245,245,380);
  rotateY(v);
  
  // play with this
  strokeWeight(0);

  box(1,2,4.5);
}
