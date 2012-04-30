size(500, 500);

_checkEqual( screenX(0, 0), 0);
_checkEqual( screenX(0, 10), 0);
_checkEqual( screenX(10, 10), 10);
_checkEqual( screenX(0, -10), 0);

pushMatrix();
rotate(PI);
_checkEqual(screenX(1, 0),-1);
popMatrix();

pushMatrix();
translate(width/2, height/2);
rotate(PI);
_checkEqual(screenX(1, 0), 249);
popMatrix();

pushMatrix();
translate(width/2, height/2);
scale(0.5);
_checkEqual(screenX(100, 100), 300);
popMatrix();

pushMatrix();
translate(width/2, height/2);
scale(0.5);
rotate(PI);
_checkEqual(screenX(100, 100), 200);
popMatrix();

_checkEqual( screenY(0, 0), 0);
_checkEqual( screenY(10, 0), 0);
_checkEqual( screenY(10, 10), 10);
_checkEqual( screenY(0, -10), -10);

pushMatrix();
translate(width/2, height/2);
rotate(PI);
_checkEqual(screenY(0, 1), 249);
popMatrix();

pushMatrix();
translate(width/2, height/2);
scale(0.5);
rotate(-PI);
_checkEqual(screenY(100, 100), 200);
popMatrix();