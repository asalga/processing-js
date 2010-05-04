ArrayList points;
ArrayList vels;
PFont font;
boolean on;

void setup(){
  size(300,300);
  on = true;
  points = new ArrayList();
  vels = new ArrayList();
  font = createFont("arial", 1);

  for(int i = 0; i < 100; i+=2){
    points[i] = random(0,width);
    points[i+1] = random(-height, height);
  }

  for(int i = 0; i < 50; i++){
    vels[i] = random(0.4, 0.777);
  }
}

void draw(){
  background(0);

  if(random(0,100) < 1){
      on = !on;
  }

  stroke(100);
  fill(200);
  pushMatrix();
    translate(width/2,0);
    rotate(0.7);
    rect(-10,20,10,4);
    rect(-7,-0,5,20);
    
    stroke(100,0,0);
    line(-7,5,-1,2);
    line(-7,8,-1,5);
    line(-7,11,-1,8);
    line(-7,14,-1,11);
    line(-7,17,-1,14);
  popMatrix();


  for(int i=0; i <= 30; i++){
    pushMatrix();

    translate(width/2, height);

    if(frameCount < 1000){
      translate(sin(frameCount/100) + 
                sin(i/5)*3,sin(frameCount/1000) * i* -2);

      if(i == 30){
        fill(255,0,0);
        text("L",0,0);
      }
    }
    else
    {
      translate( sin(i/5)*3, i* -2);
      if(i == 30){
        fill(255,0,0);
        text("L",0,0);
      }
    }

    stroke(0,90,0);
    fill(00,90,0);
    
    ellipse(0, 0, 2, 2);
    popMatrix();
  }

  // snow on the ground
  fill(255);
  noStroke();
  for(int i = 0 ; i < 20; i++){
    ellipse(i*17, height, 25, 25);
  }

  // update and draw snowflakes
  stroke(255);
  for(int i=0; i<100; i+=2){
    point(points[i],points[i+1]);
    
    points[i+1] += vels[i/2];

    if(points[i+1] > height){
      points[i+1] = random(-height,0);
      points[i] = random(0,width);
    }
  }

  translate(width/2, 0);
  rotate(sin(frameCount/50)/10);
  translate(0, height/2);

  if(on){
    stroke(200,20);
  }
  else{
    stroke(200,10);
  }

  // wire
  line(0,-height/2,0,-25);

  // bulb halo
  noStroke();
  for(int i=0; i < 15; i++){
    if(on){
      fill(255,0,0,2);
      ellipse(0,0, i*10, i*10);
    }
  }

  stroke(0);

  if(on){
    fill(190,190);
  }
  else
  {
    fill(190,100);
  }

  rect(-5,-25,10,15);


  // bulb
  if(on){
    fill(190,190,50,120);
    stroke(0);
  }
  else{
    fill(255,0);
    stroke(20);
  }

  ellipse(0,0,20,20);
}
