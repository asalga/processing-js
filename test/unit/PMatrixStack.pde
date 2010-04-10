PMatrixStack matrix2DStack = new PMatrixStack();
PMatrix2D test1 = new PMatrix2D();
PMatrix2D test2 = new PMatrix2D();
PMatrix2D test3 = new PMatrix2D();
PMatrix2D test4 = new PMatrix2D();

test1.set(1,2,3,4,5,6);
test2.set(16,15,14,13,12,11);
matrix2DStack.load(test1);
matrix2DStack.mult(test2);
test3 = matrix2DStack.peek();
test4 = matrix2DStack.pop();

_checkEqual(test1.elements, [1,2,3,4,5,6]);
_checkEqual(test2.elements, [16,15,14,13,12,11]);
_checkEqual(test3.elements, [42,39,39,129,120,117]);
_checkEqual(test4.elements, [42,39,39,129,120,117]);

use3DContext = true;

PMatrixStack matrix3DStack = new PMatrixStack();
PMatrix3D test1 = new PMatrix3D();
PMatrix3D test2 = new PMatrix3D();
PMatrix3D test3 = new PMatrix3D();
PMatrix3D test4 = new PMatrix3D();

test1.set(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
test2.set(16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1);
matrix3DStack.load(test1);
matrix3DStack.mult(test2);
test3 = matrix3DStack.peek();
test4 = matrix3DStack.pop();

_checkEqual(test1.elements, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
_checkEqual(test2.elements, [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);
_checkEqual(test3.elements, [80,70,60,50,240,214,188,162,400,358,316,274,560,502,444,386]);
_checkEqual(test4.elements, [80,70,60,50,240,214,188,162,400,358,316,274,560,502,444,386]);
