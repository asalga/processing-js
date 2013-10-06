#define PROCESSING_TEXTURE_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform mat4 transform;
attribute vec3 vertex;
attribute vec2 vertTexCoord;

varying vec4 texCoord;

void main(){
  gl_Position = transform * vec4(vertex, 1);
  texCoord = vec4(vertTexCoord.st, 1, 1);
}