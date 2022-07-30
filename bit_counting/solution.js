var countBits = function (n) {
  let b = n.toString(2);
  n = 0;
  for (i = 0; i < b.length; i++) {
    if (b[i] == 1) {
      n++;
    }
  }
  return n;
};
