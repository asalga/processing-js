#ifdef GL_ES
precision mediump float;
#endif

uniform mat3 myMatrix;

void main() {
	float dist = 9.0 * 2.0 * distance(gl_FragCoord.xy/vec2(100.0, 100.0), vec2(0.5, 0.5));

	if(dist > 9.0){
		gl_FragColor = vec4(vec3(0.0), 1.0);
	}
	else{
		dist = min(dist, 9.0);

		int col = int(dist/3.0);
		int row = int(mod(dist, 3.0));

		vec3 column;
		float c;
		
		if(col == 0){
			column = myMatrix[0];
		}
		else if(col == 1){
			column = myMatrix[1];
		}
		else{
			column = myMatrix[2];
		}

		if(row == 0){
			c = column.x;
		}
		else if(row == 1){
			c = column.y;
		}
		else if(row == 2){
			c = column.z;
		}
		
		gl_FragColor = vec4(vec3(c), 1.0);
	}
}
