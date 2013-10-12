#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform mat4 transform;
attribute vec4 vertex;
attribute vec4 normal;

uniform mat4 normalMatrix;

varying vec4 vNormal;

void main(){
  gl_Position = transform * vertex;
  vNormal = normalize(vec4(mat3(normalMatrix) * vec3(normal), 0.0));
}