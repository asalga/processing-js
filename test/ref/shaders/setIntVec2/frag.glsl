#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform ivec2 ivector2;

void main(){
  gl_FragColor = vec4(ivector2, 0.0, 1.0);
}
