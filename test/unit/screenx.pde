size(100, 100);
_checkEqual(0, screenX(0, 0));
_checkEqual(1, screenX(1, 0));
_checkEqual(42, screenX(42, 0));
_checkEqual(100, screenX(100, 0));
_checkEqual(-100, screenX(-100.0, 0));
