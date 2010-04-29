//
// Light Speed by Andor Salga
//

// o_O 
float x[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
float y[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
float z[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

float speed = 2;

float r = 0;
float userX;
float userY;
int dir = 0;
boolean jumping = false;
float test = 3.14;

int d = 0;

boolean leftPressed = false;
boolean rightPressed = false;

ArrayList roadsX;
ArrayList roadCol;
ArrayList roadsY;


void setup()
{
  size(500,500,P3D);
  init();
}

void init()
{
  for(int i = 0; i < x.length; i++)
  {
    z[i] = random( 0, 250 );
    x[i] = random( -5, 5 );
    y[i] = random( 0, 5 );
  }
}

void draw()
{
  r += 0.1;
  background(0, 0, 0);
  camera();
  perspective();

  pushMatrix();
  translate(250,278,380);
  strokeWeight(1);
  stroke(200,200,100);
  fill(100,100,0);
  strokeWeight(3);

  pushMatrix();
  translate(20,0,r);
  box(12,1,1840);
  popMatrix();

  pushMatrix();
  translate(-20,0,r);
  box(12,1,1840);
  popMatrix();

  pushMatrix();
  translate(0,0,0+r);
  box(12,1,1840);
  popMatrix();

  // draw user
  fill(50,30,100);
  pushMatrix();
  

  if(leftPressed){
    dir -= 1;
  }
  else if(rightPressed){
    dir += 1;
  }

  // if jumping
  if(jumping)
  {
    test +=0.1;
    if(test >= 3.14*2)
    {
      jumping = false;
      test = 3.14;
    }
    translate(dir,-4+4*sin(test),0);
  }
  else
  {
    translate(dir,-4,0);
  }

  box(4,1,5);
  popMatrix();

  popMatrix();

  perspective( 60, 1, 0.01, 1000 );
 
  strokeWeight(1);
  stroke(255);
  pushMatrix();
  translate( width/2, height/2, 200 );

  for(int i = 0; i < x.length; i ++)
  {
    z[i] += speed;
    if(z[i] > 250){
      z[i] = random( 0, -100 );
      y[i] = random( -5, 5 );
      x[i] = random( -5, 5);
    }

    pushMatrix();
      translate(x[i],y[i],z[i]);
      box( .01, .01, 25 );
    popMatrix();
  }
  popMatrix();
}

void keyPressed()
{
  if(keyCode == DOWN){
    jumping = true;
  }

  if(keyCode == LEFT){
    leftPressed = true;
  }

  else if(keyCode == RIGHT){
    rightPressed = true;
  }
}

void keyReleased(){
  if(keyCode == LEFT){
    leftPressed = false;
  }
  else if(keyCode == RIGHT){
    rightPressed = false;
  }
}