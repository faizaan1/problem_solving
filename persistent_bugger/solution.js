function persistence(num) {
  if (num < 9) {
    return 0;
  }
  let b = 0;
  while (num > 9) {
    b++;
    let a = 1;
    num = num.toString();
    for (i = 0; i < num.length; i++) {
      a = a * parseInt(num[i]);
    }
    num = a;
  }
  return b;
}
