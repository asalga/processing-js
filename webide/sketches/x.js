boolean isHolding = false;
int XOffset = 0;
int YOffset = 0;
int bolts = 0;
int USB_WIDTH = 50;
int USB_HEIGHT = 100;
float lightningOpacity = 255;

float ConnectorMouthOpacity = 0;

int level = -1;

int startTime = 0;


class Rect{
 int x, y, w, h;

  Rect(){
   x = y = w = h = 0;
  }

  Rect(int x,int y,int w,int h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}


class PVector2D
{
  float x, y;

  PVector2D(){
    set(0,0);
  }

  PVector2D(float x,float y){
    set(x,y);
  }

  void set(float x, float y){
    this.x = x;
    this.y = y;
  }
  
  String toString(){
    return "[" + x + "," + y + "]";
  }
}

PVector2D add(PVector2D v1, PVector2D v2){
  return new PVector2D(v1.x + v2.x, v1.y + v2.y);
}

PVector2D sub(PVector2D initialPoint, PVector2D terminalPoint){
  return new PVector2D( terminalPoint.x - initialPoint.x,  terminalPoint.y - initialPoint.y);
}

float len(PVector2D v){
  return sqrt(v.x * v.x + v.y * v.y);
}

PVector2D scale(PVector2D v, float s){
  return new PVector2D(v.x * s, v.y * s);
}


//
//
//
class LightningBolt{
  PVector2D start;
  PVector2D end;

  ArrayList nodes = new ArrayList();
  ArrayList onodes = new ArrayList();

  int deviation;
  int bounds;
  int numNodes;
  boolean isInit;

  LightningBolt(){
    bounds = 0;
    isInit = false;
    start = new PVector2D();
    end = new PVector2D();
    numNodes = 0;
    deviation = 0;
    nodes = new ArrayList();
    onodes = new ArrayList();
  }
  
  void init(){ 
    PVector2D startToEnd = sub(start, end);
    float lineLen = len(startToEnd);
    
    print(startToEnd);
    
    float nodeSeparation = lineLen / numNodes;
  
    for(int i = 1; i <= numNodes; i++){
      
      PVector2D p = add(scale(startToEnd, i/(float)numNodes), start);
      PVector2D o = add(scale(startToEnd, i/(float)numNodes), start);
      
      nodes.push(p);
      onodes.push(o);
    }
    isInit = true;
  }
  
  void setDeviation(int d){
    deviation = d;
  }
  
  void setNumNodes(int n){
    numNodes = n;
  }

  void setBounds(int b){ bounds = b;}
  
  void setStartPoint(PVector2D p){
    start = p;
  }
  
  void setEndPoint(PVector2D p){
    end = p;
  }
  
  void update(int deltaTime){
    if(isInit == false){
      init();
    }
    else{
      for(int i=1; i < nodes.size()-1; i++){
        PVector2D p = (PVector2D)nodes.get(i);
        PVector2D op = (PVector2D)onodes.get(i);
      
        float rx = random(-deviation,deviation);
        if( abs((rx + p.x - op.x)) < bounds){
          p.x += rx;
          nodes[i] = p;
        }

        float ry = random(-deviation,deviation);
        if( abs((ry + p.y - op.y)) < bounds){
          p.y += ry;
          nodes[i] = p;
        }
      }
    }
  }
  
  void draw()
  {
    PVector2D lastNode = start;
    int b = 250;
    for(int i = 0; i < nodes.size(); i++){
      PVector2D node = (PVector2D)nodes.get(i);
      
      strokeWeight(1);
      stroke(10,10,b-=10,lightningOpacity);
      line(lastNode.x, lastNode.y, node.x, node.y);
      lastNode = node;
    }
    
    lastNode = start;
    for(int i = 0; i < nodes.size(); i++){
      PVector2D node = (PVector2D)nodes.get(i);
      
      strokeWeight(1);
      stroke(255,150);
      lastNode = node;
    }
  }
}

class Lightning{
  LightningBolt bolt;
  
  Lightning(){
    bolts++;
    bolt = new LightningBolt();
    bolt.setDeviation(10);
    bolt.setBounds(15);
    bolt.setNumNodes(18);

    // only way to get around parser bugs
    if( bolts == 1){
      bolt.setEndPoint(new PVector2D(width/2,0));
      bolt.setStartPoint(new PVector2D(width/2,height/2));
    }
    else if(bolts == 2){
      bolt.setEndPoint(new PVector2D(width/2,height/2));
      bolt.setStartPoint(new PVector2D(width,height));
    }

    else if(bolts == 3){
      bolt.setEndPoint(new PVector2D(width/2,height/2));
      bolt.setStartPoint(new PVector2D(0,height));
    }
    bolt.init();
  }

  void update(int deltaTime){
    bolt.update(deltaTime);
  }

  void draw(){
    bolt.draw();    
  }
}

//
//
//
class W{
  float x;
  float y;
  
  W(){
    x = random(50,450);
    y = random(-100,-500);
  }
  
  void draw(){
    fill(0,255,0);
    stroke(30,0,0);
    rect(x,y,5,5);


    for(var i =0; i < 10; i++){
      fill(0,255,0,200 - i*20);
      rect(x, y - i*4, 5,4);
    }
  }

  void update(){
    y += 1.0 + random(0,100)/100;

   if(y > height){
      x = random(50,450);
      y = random(-500,-100);
    }
  }

  void setCoords(int x, int y){
    this.x = x;
    this.y = y;
  }

  float getX(){return x;}
  float getY(){return y;}
}

class C{
  int x;
  int y;

  C(){
    x = 200;
    y = 250;
  }

  int getX(){return x;}
  int getY(){return y;}

  void setCoords(int x, int y){
    this.x = x;
    this.y = y;
  }

  void draw(){
    strokeWeight(1);
    stroke(0);
    fill(190);
    rect(x+5,y-40, 40,40);

    fill(50);
    rect(x+12, y-20, 8, 8);
    rect(x+30, y-20, 8, 8);

    fill(80);
    noStroke();
    rect(x,y,USB_WIDTH,50);

    // usb mouth
    fill(0,255,0,ConnectorMouthOpacity);
    rect(x+5, y-40,40,5);

    translate(0,50);
    strokeWeight(3);
    fill(80);
    stroke(80);
    arc(x + USB_WIDTH/2, y, 47, 47, 0, PI);


    // symbol
    noStroke();
    fill(0);
    ellipse(x+ 25,y,10,10);
    rect(x+22,y-30, 6,28);
    triangle(x+18, y-30, 
             x+25, y-40,
             x+33, y-30);
    rect(x+33, y - 25, 8,8);

    ellipse(x+13,y-25, 8,8);

    noFill();
    stroke(0);
    arc(x+29, y-17, 15,15, 0,PI/2);
    arc(x+22, y-23, 15,15, PI/2, PI);

    
  }
}

C c;
W w;
Lightning L1,L2,L3;

ArrayLlist words;

//
//
//
void setup(){

  L1 = new Lightning();
  L2 = new Lightning();  
  L3 = new Lightning();

  startTime = millis();

  size(500,500);
  c =  new C();

  words = new ArrayList();
  for(int i=0; i < 10; i++){
    words.push();
  }

  for(int i=0; i < 10; i++){
    W w = new W();
    words[i] = w;
  }
}

//
//
//
void update(int deltaTime){

  if(millis() > 5000){
    level = 0;
  }

  if(level == -1){
    lightningOpacity = 250 -  250*(millis()/5000);
 
    L1.update(deltaTime);
    L2.update(deltaTime);
    L3.update(deltaTime);
  }

  else if(level == 0){
    for(int i = 0; i < 10; i++){
      words[i].update();

      if(pointIntRect(words[i].x, words[i].y, c.getX()+5, c.getY() - 40, 40, 5)){
        ConnectorMouthOpacity = 255;
        words[i].setCoords(random(40,400), random(-400,0));
      }
    }

    if(ConnectorMouthOpacity > 5){
      ConnectorMouthOpacity -= 5.2;
    }
  }
}


//
//
//
void draw(){

  update(millis()-startTime);
  background(0);

  if(millis() < 5000){

    L1.draw();
    L2.draw();
    L3.draw();

    c.setCoords(width/2-25, height/2);
    c.draw();
  }
  else{
  noFill();
  strokeWeight(0);
  if(isHolding == false){
    fill( 255, abs(20 * cos(frameCount/100)) );
    for(int i=0; i< 30; i++){
      ellipse(c.getX()+25,c.getY()+20, i*5, i*5);
    }
  }

  for(var i = 0; i < 10; i++){
    words[i].draw();
  }

  if(isHolding){
    c.setCoords(mouseX- XOffset,mouseY-YOffset);
  }
  c.draw();

  startTime = millis();
  }
}


//
//
//
void mousePressed(){
  if(pointIntRect(mouseX, mouseY, c.getX(), c.getY()-40, USB_WIDTH, USB_HEIGHT+20)){
    isHolding = true;
    XOffset = mouseX - c.getX();
    YOffset = mouseY - c.getY() ;
  }
}

//
//
//
void mouseReleased(){
  isHolding = false;
}


//
//
//
boolean pointIntRect(int px, int py, int rx, int ry, int rw, int rh){
  if(px > rx && px < rx+rw && py > ry && py < ry+rh){
    return true;
  }
  return false;
}