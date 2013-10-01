#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform mat4 transform;
attribute vec4 vertex;

void main(){
  gl_Position = transform * vertex;
}


