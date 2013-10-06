#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform float v[8];

void main(){
	if(gl_FragCoord < 50){
		gl_FragColor = vec4(v[0], v[1], v[2], v[3]);
	}
	else{
		gl_FragColor = vec4(v[4], v[5], v[6], v[7]);
	}
}
