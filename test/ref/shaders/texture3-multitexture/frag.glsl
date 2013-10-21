// multi-texture example

#define PROCESSING_TEXLIGHT_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform sampler2D texture1;
uniform sampler2D texture2;

varying vec4 vertTexCoord;

void main() {
  gl_FragColor = texture2D(texture1, vertTexCoord.st) * texture2D(texture2, vertTexCoord.st);
}
