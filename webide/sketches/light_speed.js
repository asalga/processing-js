//
// Light Speed
//

// o_O 
float x[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
float y[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
float z[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

float r = 0;
float speed = 0.8;

void setup()
{
  size(500,500,OPENGL);
  stroke(250,250,250);
  strokeWeight(1);
  init();
}

void init()
{
  for(int i = 0; i < x.length; i++)
  {
    z[i] = random(-10,250);
    x[i] = random(-5,5);
    y[i] = random(-5,5);
  }
}

void draw()
{
  camera();
  perspective(60,1,0.01,1000);
  background(0,0,0);

  translate(250,250,200);

  for(int i = 0; i < x.length; i ++)
  {
    z[i] += speed;
    if(z[i] > 250){
      z[i] = random(0,-100);
      y[i] = random(-5,5);
      x[i] = random(-5,5);
    }

    pushMatrix();
    translate(x[i],y[i],z[i]);
    box(.01,.01,25);
    popMatrix();
  }
}