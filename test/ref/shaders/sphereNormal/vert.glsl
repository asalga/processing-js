#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_LIGHT_SHADER

uniform mat4 transform;
attribute vec4 vertex;

uniform mat3 normalMatrix;
attribute vec3 normal;
varying vec3 vNormal;

void main(){
  gl_Position = transform * vertex;
  vNormal = normalize(normalMatrix * normal);
}