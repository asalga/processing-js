int leftmargin = 10;
int rightmargin = 20;
String buff = "";
boolean didntTypeYet = true;

void setup()
{
  size(640, 360, P3D);
  PFont font = loadFont("Arial");
  textFont(font,30); 
}

void draw()
{
  background(176);

  if((millis() % 500) < 250){  
    noFill();
  }
  else {
    fill(255);
    stroke(0);
  }
  float rPos;
  rPos = textWidth(buff) + leftmargin;
  rect(rPos+4, 19, 10, 21);

  if(didntTypeYet) {
    fill(0);
  }

  fill(0);
  pushMatrix();
  translate(rPos,10+25,0);
  char k;
  for(int i = 0;i < buff.length(); i++) {
    k = buff.charAt(i);
    translate(-textWidth(k),0,0);
    rotateY(-textWidth(k)/70.0); 
    rotateX(textWidth(k)/70.0);
    scale(1.1);
    text(k,0,0);
  }
  popMatrix();
}

void keyPressed()
{
  char k = char(key);
  switch(k){
  case 8:
    if(buff.length()>0){
      buff = buff.substring(1);
    }
    break;
  case 13:  
  case 10:
  case 65535:
  case 127:
  case 27:
    break;
  default:
    if(textWidth(buff+k)+leftmargin < width-rightmargin){
      didntTypeYet = false;
      buff= String.fromCharCode(k) + buff;
    }
    break;
  }
}