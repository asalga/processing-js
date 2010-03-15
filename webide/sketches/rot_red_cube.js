//
// Rotating Red Cube
//

float r = 0;

void setup()
{
  size( 100, 500, P3D );
  noFill();
  strokeWeight( 3 );
}

void draw()
{
  background( 0, 0, 0 );
  translate( 50, 100, 340);
  rotateZ( frameCount/20 );
  rotateY( r += 0.02 );
  rotateX( r -= 0.03 );

  stroke( 5 + frameCount % 200, 0, 0 );

  box( 10, 10, 10 );
}