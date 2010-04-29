void setup(){
  size(100,100,OPENGL);
}

void draw(){

  for(int j = 0; j < 10; j++){

    for(int i = 0; i < 10; i++)
    {
      rect(i*10, j* 10, 10, 10);
    }
  }
  document.getElementById('debug').innerHTML = frameRate;
}