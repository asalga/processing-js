//
// Disco by Andor Salga
//

int randDirLightX = 0;
int randDirLightY = 0;
int randDirLightZ = -1;

float randDirLightR = 128.0;
float randDirLightG = 0;
float randDirLightB = 0;

float spinDirLightX = 0.0;
float spinDirLightY = 0.0;
float spinDirLightZ = -1.0;

float spinDirLightX2 = 0.0;
float spinDirLightY2 = 1.0
float spinDirLightZ2 = 0.0;

float theta = 0.0;
float theta2 = 1.0;
bool redGoingUp = true;

void setup()
{
  size(200,200,OPENGL);
}

void draw()
{
  background(0);
  noStroke();

  randDirLightR += redGoingUp ? 2 : -2;

  if(randDirLightR > 200)
  {
    redGoingUp = false;
  }
  else if(randDirLightR < 40)
  {
    redGoingUp = true;
  }

  if(frameCount % 100 == 0){
    randDirLightX += random(-.15,.15);
    randDirLightY += random(-.15,.15);
    randDirLightZ += random(-.15,.15);
  }  
  
  directionalLight( randDirLightR, randDirLightG, 200-randDirLightR, randDirLightX, randDirLightY, randDirLightZ);

  theta = (theta+0.1f)/2.5f;
  spinDirLightX = spinDirLightX * cos(theta) + spinDirLightZ * sin(theta);
  spinDirLightZ = spinDirLightX * -sin(theta) + spinDirLightZ * cos(theta);  
  directionalLight( 80, randDirLightR*1.01, 30, spinDirLightX, spinDirLightY, spinDirLightZ);

  theta2 = (theta2+0.1f)/2.0f;
  spinDirLightX2 = spinDirLightX2 * cos(theta2) + spinDirLightY2 * -sin(theta2);
  spinDirLightY2 = spinDirLightX2 * sin(theta2) + spinDirLightY2 * cos(theta2);
  directionalLight( 10, 20, randDirLightR, spinDirLightX2, spinDirLightY2, spinDirLightZ2);

  directionalLight( randDirLightR, randDirLightG, 200-randDirLightR, randDirLightX, randDirLightY, randDirLightZ);
  ambientLight(0, 6, 30 );

  translate(width/2.0f, height/2.0f, 2);
  sphere(50);
}
