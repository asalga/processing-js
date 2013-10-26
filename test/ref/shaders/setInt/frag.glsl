#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform int i;

void main(){
  gl_FragColor = vec4(i, 0.0, i, 1.0);
}
