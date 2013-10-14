#ifdef GL_ES
precision mediump float;
#endif

varying vec3 vNormal;

void main(){

  float col = 0.1;
  float intensity = max(0.0, dot(normalize(vec3(1,1,1)), vNormal));

  if( intensity > 0.9){
    col = 0.9;
  }
  else if(intensity > 0.5){
    col = 0.5;
  }
  else if(intensity > 0.3){
    col = 0.3;
  }

  gl_FragColor = vec4(vec3(col), 1.0);

}
