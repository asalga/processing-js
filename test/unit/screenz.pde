size(100, 100);
_checkEqual(0, screenZ(0, 0, 0));
_checkEqual(0, screenZ(1, 2, 3));
_checkEqual(0, screenZ(42, 1.159, 3.14));
_checkEqual(0, screenZ(-100, -100, -100));