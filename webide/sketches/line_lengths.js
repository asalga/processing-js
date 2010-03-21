//
// Line Lengths by Andor Salga
//

boolean released = false;
boolean waiting = false;

int firstX,firstY;
int lastX,lastY;
float alpha = 100;
int lastLength = 0;

ArrayList lineLengths = new ArrayList();
ArrayList textCoords = new ArrayList();
ArrayList lines = new ArrayList();
ArrayList goingUp = new ArrayList();
ArrayList bubbles = new ArrayList();
ArrayList goingUp = new ArrayList();

void setup() {
  size(500,500);
  fill(0);

  PFont fontA = loadFont("Arial");
  textFont(fontA, 14);
}

void draw() {
  background(255);

  // canvas border
  strokeWeight(1);
  stroke(100);
  noFill();
  rect(0,0,width,height);


  // update bubbles (rendered when canvas 
  // does not have focus)
  for (int i = 0; i < bubbles.length; i++) {
    if (goingUp[i] == true) {
      bubbles[i] += 0.1;
    }
    else {
      bubbles[i] -= 0.1;
    }

    if (bubbles[i] > 45) {
      goingUp[i] = false;
    }
    else if (bubbles[i] < 35) {
      goingUp[i] = true;
    }
  }

  if (lines.length == 0) {
    text("Click and drag me!", width/2-50, height/2);
  }


  if (mousePressed && waiting == false) {
    // capture original coords
    firstX = mouseX;
    firstY = mouseY;
    waiting = true;
  }

  if (mousePressed && waiting) {
    float lengthOfLine = mag(mouseX - firstX, 
                             mouseY - firstY);
    lengthOfLine = floor(lengthOfLine);

    pushMatrix();
    translate(firstX, firstY);
    float a = 1;
    float adj;
    float opp;

    if (firstX > mouseX) {
      adj = firstX - mouseX;
    }
    else {
      adj = firstX - mouseX;
      a = -1;
    }

    opp = firstY - mouseY;
    float hyp = sqrt(opp * opp + adj * adj);

    if (hyp > 0) {
      rotate(a * asin(opp / hyp));
    }
    text("" + lengthOfLine, 0, 0);
    popMatrix();

    stroke(200, 0, 0, 50);
    strokeWeight(lengthOfLine / 30);

    line(firstX, firstY, mouseX, mouseY);

    stroke(0);
    strokeWeight(1);
  }

  // released
  if (!mousePressed && waiting) {
    lastX = mouseX;
    lastY = mouseY;

    float lengthOfLine = mag(mouseX - firstX, 
                             mouseY - firstY);
    lengthOfLine = floor(lengthOfLine);

    if (lengthOfLine > 0) {
      lines.add(firstX);
      lines.add(firstY);
      lines.add(lastX);
      lines.add(lastY);

      textCoords.add(firstX);
      textCoords.add(firstY);

      bubbles.add(25);
      goingUp.add(true);

      lastLength = lengthOfLine;
      alpha = 100;

      lineLengths.add(lengthOfLine);
    }
    waiting = false;
  }

  if (alpha > 0 && lastLength > 0) {
    alpha -= .5;

    pushMatrix();
    translate(width/2 - (100 - alpha) * 10, 
              height/2 + (100 - alpha) * 4.5);
    scale(100 - alpha);

    fill(200, 0, 0, alpha - 50);
    text("" + lastLength, 0, 0);
    popMatrix();
  }

  // draw all the lines
  for (int i = 0; i < lines.length; i += 4) {
    stroke(0);
    line(lines[i], lines[i + 1], 
        lines[i + 2], lines[i + 3]);
  }

  // find the longest and shortest
  float longest = 0.0;
  float shortest = 1000.0;
  int indexOfLongest = 0;
  int indexOfShortest = 0;

  for (int i = 0; i < lineLengths.length; i++) {
    if (lineLengths[i] > longest) {
      longest = lineLengths[i];
      indexOfLongest = i;
    }
  }

  for (int i = 0; i < lineLengths.length; i++) {
    if (lineLengths[i] < shortest) {
      shortest = lineLengths[i];
      indexOfShortest = i;
    }
  }

  // draw all the lengths
  for (int i = 0; i < lineLengths.length; i++) {
    pushMatrix();

    if (indexOfShortest == indexOfLongest) {
      fill(0, 200, 0);
    }
    else if (i == indexOfLongest) {
      fill(0, 0, 200);
    }
    else if (i == indexOfShortest) {
      fill(200, 0, 0);
    }
    else {
      fill(0);
    }

    translate(textCoords[i * 2], textCoords[i * 2 + 1]);
    float a = 1;
    float adj;
    float opp;

    if (lines[i * 4] > lines[i * 4 + 2]) {
      adj = lines[i * 4] - lines[i * 4 + 2];
    }
    else {
      adj = lines[i * 4 + 2] - lines[i * 4];
      a = -1;
    }

    opp = lines[i * 4 + 1] - lines[i * 4 + 3];
    float hyp = sqrt(opp * opp + adj * adj);

    if (hyp > 0) {
      rotate(a * asin(opp / hyp));
    }

    if (!focused) {
      noFill();
      stroke(200, 100, 0, 150);
      ellipse(10, 0, (5 + sin(frameCount / 8 + i)) * 10, (5 + sin(frameCount / 8 + i)) * 10);
    }
    text("" + lineLengths[i], 0, 0);

    popMatrix();
  }
}
