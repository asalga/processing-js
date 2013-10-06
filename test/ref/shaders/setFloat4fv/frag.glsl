#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

const float PI = 3.141592658;
const float TAU = 2.0 * PI;

uniform vec4 v[3];

void main(){

	vec2 p = gl_FragCoord.xy / vec2(100, 100) - 0.5;

	float pLen = length(p);
	float angle = acos(p.x/pLen);

	if(p.y < 0.0){
		angle = abs(angle - PI) + PI;		
	}

	if(pLen > 0.5){
		gl_FragColor = vec4(0, 0, 0, 1);
	}	
	else if(angle > TAU - PI/6.0){
		gl_FragColor = v[0];
	}
	else if(angle > PI + PI/6.0){
		gl_FragColor = v[1];
	}
	else if( angle > PI/2.0){
		gl_FragColor = v[2];
	}
	else{
		gl_FragColor = v[0];
	}
}
