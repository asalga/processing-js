#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

varying vec4 texCoord;

uniform sampler2D texture;

void main(){
  gl_FragColor = texture2D(texture, texCoord.st);
}
