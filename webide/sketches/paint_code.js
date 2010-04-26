//
// Paint Code by Andor Salga
//

String C_str =
"#include <iostream> void Permute(int [],int,int); void Print(int [],int); void Swap(int [],int,int); void Rotate_Left(int v[],int,int); using namespace std; int main(){ int N; cout<<\"Please enter \'N\'\"<<endl;cout<<\">>\";cin>>N;int v[100];for (int i=0; i<N; i++){v[i]=i+1;}Permute(v,0,N); cin.get();cin.get(); return 0;}";

String Pjs_str = 
"boolean drawing = false; int coordX = 0; int coordY = 0; int currChar = 0; ArrayList charPositions; ArrayList chars; ArrayList charRot;void setup(){size(500,500);font = loadFont(\"Arial\", 18); charPositions = new ArrayList(); chars = new ArrayList(); charRot = new ArrayList();}";

String str;
boolean drawing = false;
int coordX = 0;
int coordY = 0;
int currChar = 0;

ArrayList charPositions;
ArrayList chars;
ArrayList charRot;
ArrayList charCol;

Color brushColor;

void setup(){
  size(500,500);
  font = loadFont("Arial", 18);
  charPositions = new ArrayList();
  chars = new ArrayList();
  charRot = new ArrayList();
  charCol = new ArrayList();
  brushColor = new color(255);
  brushLang = 0;
  str = C_str;
}

void draw(){
  background(0);
  fill(200);

  stroke(255);
  fill(200,0,0);
  rect(5,5, 30,15);

  stroke(255);
  fill(0,200,0);
  rect(45,5, 30,15);

  stroke(255);
  fill(0,0,200);
  rect(85,5, 30,15);

  stroke(255);
  noFill();
  rect(125,5, 30,15);
  fill(255);
  text("C++", 128, 16);

  stroke(255);
  noFill();
  rect(165,5, 30,15);
  fill(255);
  text("PJS", 170, 16);

  if(drawing){
    if(currChar < str.length()){
      if(mag(coordX-mouseX, coordY-mouseY) > 5){

        float a = getAngleBetweenVectors(0,1, (coordX-mouseX), (coordY-mouseY));
       charRot.push(a);
        charPositions.push(coordX);
        charPositions.push(coordY);

        chars.push(str[currChar]);

        charCol.push(brushColor);
        currChar++;
        
        coordX = mouseX;
        coordY = mouseY;
      }
    }
    else{
      currChar = 0;
    }
  }

  for(int i = 0; i < chars.length(); i++)
  {
    fill(charCol[i]);
    pushMatrix();
    translate(charPositions[i*2], charPositions[(i*2)+1] );
    rotate(-PI/2);
    rotate(charRot[i]);
    text(chars[i], 1, 1);
    popMatrix();
  }
}

float getAngleBetweenVectors(int a, int b, int c, int d){
  float l = mag(c,d);
  c = c/l;
  d = d/l;
  return acos(a*c+b*d);
}

void mousePressed(){
  drawing = true;
  coordX = mouseX;
  coordY = mouseY;

  if(pointIntRect(mouseX,mouseY, 5,5, 30,15)){
    brushColor = color(200,0,0,200);
  }
  else if(pointIntRect(mouseX,mouseY, 45,5, 30,15)){
    brushColor = color(0,200,0,200);
  }
  else if(pointIntRect(mouseX,mouseY, 85,5, 30,15)){
    brushColor = color(0,0,200,200);
  }
  else if(pointIntRect(mouseX,mouseY, 125,5, 30,15)){
    //brushLang = 0;
    str = C_str;
  }
  else if(pointIntRect(mouseX,mouseY, 165,5, 30,15)){
   // brushLang = 1;
    str = Pjs_str;
  }
}

boolean pointIntRect(int px, int py, int rx, int ry, int rw, int rh){
  if(px > rx && px < rx+rw && py > ry && py < ry+rh){
    return true;
  }
  return false;
}

void mouseReleased(){
  drawing = false;
}