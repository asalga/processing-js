#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

varying vec4 vcolor;

void main(){
  gl_FragColor = vcolor;
}
