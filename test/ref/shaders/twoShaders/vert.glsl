#ifdef GL_ES
precision mediump float;
#endif

attribute vec4 vertex;
uniform mat4 transform;

void main(){
  gl_Position = transform * vertex;
}