#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

// testing setting single float
uniform float f;

uniform mat4 transform;
attribute vec4 vertex;

varying vec4 vcolor;

void main(){
  gl_Position = transform * vertex;
  vcolor = vec4(0.0, f, f, 1.0);
}