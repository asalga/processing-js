//
// Sol by Andor Salga
//
import processing.opengl.*;

float rotEarth = 0.0;
float rotMoon = 0.0;
float zoom = 0;
PFont infoFont;

/*
*/
void setup(){
  size(400,400,OPENGL);
  noStroke();
  //infoFont = loadFont("Arial");
  //textFont(infoFont, 24);
  // for Processing... (add quoatations around Arial)
  // infoFont = createFont(Arial,24);
}

void displayText()
{
  fill(25,70,20);
  //textFont(infoFont); 
  //text( "FPS: " + int(frameRate), 0, 30); 
  //text( "LOD: " + int(zoom + 16.0) , 0, 50);
 
  //text( "Keys:", 15, 100);
  //text( "a - move forward" , 0, 120);
  //text( "z - move backward",  0, 140);
}

/*
*/
void draw()
{
  // clear the color buffer
  background(0);
  displayText();
  
  lightSpecular(255,255,255);
  pointLight(200,200,200,0,100,400);

  specular(204, 102, 0);
  shininess(8.0);

  // push matrix to center of the viewport
  pushMatrix();
  translate(width/2, height/2, 150 + zoom);
  
  // draw the sun
  fill(255,0,0);
  sphere(20.0);
  
  // push on another matrix and rotate and trans
  pushMatrix();
  rotateY(rotEarth += 0.01);
  translate(0,0,40);
  
  fill(25,70,20);
  
  sphereDetail(int(zoom + 16));
  sphere(10);
  
  pushMatrix();
  rotateY(rotMoon += 0.08);
  translate(0,0,14);
  fill(128,128,128);
  sphere(2.5);

  popMatrix();
  popMatrix();
  popMatrix();
}