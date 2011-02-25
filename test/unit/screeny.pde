size(100, 100);
_checkEqual(0, screenY(0, 0));
_checkEqual(1, screenY(0, 1));
_checkEqual(42, screenY(0, 42));
_checkEqual(100, screenY(0, 100));
_checkEqual(-100, screenY(0, -100));
