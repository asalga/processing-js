#ifdef GL_ES
precision mediump float;
#endif


attribute vec4 vertex;

void main(){
  gl_Position = transform * vertex;
}