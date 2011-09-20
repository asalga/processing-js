OBJModel obj;

void setup() {
  size(100, 100, OPENGL);
  obj = new OBJModel();
  obj.load("../ref/obj/cottage_tn/cottage_tn.obj");
}

void draw(){
  background(200);
  translate(width/2, 1.5 * height, -250);

  rotateY(-3.14/6);
  rotateX(-PI/20);

  obj.drawMode(POLYGON);
}