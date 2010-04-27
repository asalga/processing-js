//
// Kar by Andor Salga
//

float f = 0;
float ff = 0;
float f2 = 0;
PFont font;
PFont font2;

float TheEllipseO = 0;

String letter;
float velocity;
float posX;
float posY;
float opacity;
boolean falling = false;
boolean GExists = true;

ArrayList n;
ArrayList Name;
ArrayList v;
ArrayList o;

void setup(){
  size(450,450);
  font = createFont("arial", 1);

  n = new ArrayList();
  v = new ArrayList();
  Name = new ArrayList();
  o = new ArrayList();

  for(int i=0; i < 30; i++){
    n.push(random(-700,-100));
    v.push(random(5,10));
    Name.push(random(200,400));
    o.push(255);
  }
}

void draw(){
  f -= 0.005;
  TheEllipseO += 0.05;

  background(0);

  noStroke();
  for(int i= 0; i < 30; i++){
    fill(200, 0,0);
    ellipse(100 + i*10, 100+i*10, 110,110);
  }

  noFill();
  strokeWeight(10);
  for(int i = 0; i < 50; i++){
    stroke(0,0,0,250-i*5.0);
    arc(400 - i*2, 400 - i*2, 130, 130, -0.5, 2.1)
  }

  // large letters
  textSize(150);

  for(int i = 0; i < 30; i++){

    if(n[i] > 0){
      if(o[i] > 10){
        o[i] -= 10;
      }
    }

    fill(0,o[i]);
    pushMatrix();
    translate(n[i],n[i] + 70);
    text(String.fromCharCode(Name[i]), 1, 1 );
    popMatrix(); 
 
    n[i] += v[i];
 
    if(n[i] > 500){
        n[i] = random(-300,-100);
        Name[i] = random(100,300);
        o[i] = 250;
        v[i] = random(5,10);
    }
  }
  popMatrix();

  noStroke();
  fill(200,0,0);
  ellipse(100, 100, 110,110);

  textSize(12);

  // THE arc 
  stroke(255,255,255,abs(sin(TheEllipseO)*250));
  noFill();
  strokeWeight(15);
  arc( width/2  , height/2 , 500, 500, -2.6, -2.1 );

  // erase filled ellipse
  fill(0);
  noStroke();
  strokeWeight(2);
  ellipse(100,100, 105,105);

  // white ellipse
  stroke(255);
  noFill();
  ellipse(100, 100, 100, 100);

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



  for(int i=0; i <= 30; i++){
    ff += 0.2;
    stroke(254);
    pushMatrix();

    translate(100, 100);
    stroke(200,0,0);
    rotate(f*2);
    translate((i*1.4), i * (sin(ff)/3.8));

    stroke(254, 0, 0, 255 - (i*8));
    ellipse( 1, 1 , 0, (30 - (i))/5 );

    if(i == 29){
      fill(254);
      text("?", 1,0);
    }

    popMatrix();
  }


  // k kar
  strokeWeight(6);
  line( 100 + 40 * sin(f), 100 + 40 * cos(f), 100,100 );

  // line end
  fill(0,0,0);
  strokeWeight(2);
  stroke(255,0,0,abs(sin(TheEllipseO)*250));
  ellipse( 100 + 40 * sin(f), 100 + 40 * cos(f), 5, 5);

  if( int(random(0,7777)) % 777 == 0){
    GExists = !GExists;
  }

  if(falling == true)
  {
    posY += 3;
    opacity -= 5;
    fill(255,0,0,opacity);
    text(String.fromCharCode(letter), (int)posX, (int)posY);
  }

  if( opacity <= 10){
    falling = false;
  }

  if(GExists){
    noStroke();
    fill(200,200,0);
    rect(95, 96, 10, 10);
   
    fill(0);
    text("G", 95,105);
  }
}