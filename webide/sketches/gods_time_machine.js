float f = 0;
float ff = 0;
float f2 = 0;
PFont font;

String letter;
float velocity;
float posX;
float posY;
float opacity;
boolean falling = false;
boolean GExists = true;

void setup(){
  size(200,200);
  font = createFont("arial", 18);
}

void draw(){
  f -= 0.005;
  background(0);

  strokeWeight(2);
  stroke(255);
  noFill();
  ellipse(100, 100, 100,100);

  line(  100 + 40 * sin(f), 100 + 40 * cos(f), 100,100 );

  stroke( sin(abs(f))*200, 20, 10);
  ellipse( 100 + 40 * sin(f), 100 + 40 * cos(f), 5, 5);

  fill(250);

  if( falling == false){

    if( int(random(0,101)) % 100 == 0){

      posX = 100 + 40 * sin(f);
      posY = 100 + 40 * cos(f);
      falling = true;
      opacity = 255;
      letter = (int)random(500,600);
    }
  }

  if( falling == true)
  {
    posY += 0.4;
    opacity -= 2;
    fill(255,0,0,opacity);
    text(String.fromCharCode(letter), (int)posX, (int)posY);
  }

  if( opacity <= 10){
    falling = false;
  }

  for(int i=0; i <= 30; i++){
    ff += 0.2;
    stroke(254);
    pushMatrix();

    translate(100, 100);
    stroke(200,0,0);
    rotate(f*2);
    translate((i*1.4), i * (sin(ff)/3.8));
    ellipse( 1,1 , 0, (30 - (i))/5 );

    if(i == 29){
      fill(254);
      rotate(ff);
      text("?", 1,0);
    }

    popMatrix();
  }

  if( int(random(0,7777)) % 777 == 0){
    GExists = !GExists;
  }

  if(GExists){
    noStroke();
    fill(200,200,0);
    rect(95,95, 10,10);
   
    fill(0);
    text("G", 95,105);
  }
}