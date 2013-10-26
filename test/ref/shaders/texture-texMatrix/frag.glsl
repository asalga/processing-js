#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform sampler2D tex;
varying vec4 vertTexCoord;

void main(){
    gl_FragColor = texture2D(tex, vertTexCoord.st);
}