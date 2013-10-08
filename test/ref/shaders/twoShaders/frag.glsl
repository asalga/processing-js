#ifdef GL_ES
precision mediump float;
#endif

uniform vec4 col;

void main(){
	gl_FragColor = col;
}
