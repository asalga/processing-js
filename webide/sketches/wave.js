// Wave by Andor Salga

float f = 0;

float red = 200;
float green = 100;

boolean redUp = true;
boolean greenUp = false;

void setup(){
  size(400,400,OPENGL);
}

void draw(){
  background(0);

  fill(255);
  translate(width/2 , height/2, 180);

  rotateX(-0.75);
  rotateY(PI/4);
  rotateZ(f/180);


  noStroke();
  for(int j = -5; j < 5; j++){

    translate(0,  cos(f*3 + j/2), 0);

    for(int i= -5; i < 5; i++){
      f += 0.0015;
      pushMatrix();
      translate(0, 0, j * 9);
      pushMatrix();
      float c = cos(PI/2 + i/3 + f) *5;
      fill(red, green, 250 - abs(c)* 20);
      translate(i * 9,  abs(c), 0);
      box( 10, 1, 10 );
      popMatrix();
      popMatrix();

      if(red < 5){
        redUp = true;
      }
      if(red > 200)
      {
        redUp = false;
      }

      red += redUp ? 0.1 : -0.1;

      if(green < 25){
        greenUp = true;
      }
      if(green > 240)
      {
        greenUp = false;
      }

      green += greenUp ? 0.1 : -0.1;

    }
  }
}