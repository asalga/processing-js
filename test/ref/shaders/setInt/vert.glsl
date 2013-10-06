#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

// testing setting single int
uniform int i;

uniform mat4 transform;
attribute vec4 vertex;

varying vec4 vcolor;

void main(){
  gl_Position = transform * vertex;
  vcolor = vec4(i, 0.0, i, 1.0);
}