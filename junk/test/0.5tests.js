// I commented the differences

//import processing.opengl.*;

void setup()
{

  size(500,500,OPENGL);
  //stroke(0);noFill();
  if(testPMatrix3D())
  {
    alert('tests passed');
  }
  else
  {
    alert('failed');
  }
}

void draw()
{
 // background(33,66,99);
  translate(250,250,430);

  box(1,1,1);
}