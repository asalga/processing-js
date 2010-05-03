//
// Chem by Andor Salga
//

float r = 0;
PFont font;

void setup(){
  size(500,500,OPENGL);
  font = createFont("Arial", 24);
}

void draw(){
  background(0);
  noStroke();
  
  text("van der Waals Spheres", 10, 30);
  textSize(30);
  fill(255);

  lightSpecular(255,255,255);
  specular(200, 200, 200);
  shininess(5.0);

  translate(width/2, height/2, -20);
  directionalLight(200, 200, 200, 0, 0, -1);

  rotateY(r+=0.02);
  
  fill(200, 0, 0);
  sphere(70);

  fill(200, 200, 200);
  pushMatrix();
    translate(50, 40, 0);
    sphere(40);
  popMatrix();

  pushMatrix();
    translate(-50, 40, 0);
    sphere(40);
  popMatrix();
}
