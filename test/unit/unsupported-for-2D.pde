var unsupported2D = 
      ["rotateZ","ambientLight","directionalLight","lightFalloff","lightSpecular",
      "lights","pointLight","noLights","spotLight","beginCamera","endCamera",
      "camera","perspective","frustum","ortho","printProjection","printCamera",
      "box","sphereDetail","sphere","modelX","modelY","ambient","emissive",
      "shininess","specular","screenZ"],
    count = unsupported2D.length;

while (count--) {
  _checkThrows(unsupported2D[count]);
}
