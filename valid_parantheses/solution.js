function validParentheses(s) {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")" && c == 0) {
      return false;
    } else if (s[i] == ")" && c > 0) {
      c--;
    } else if (s[i] == "(") {
      c++;
    }
  }
  c = c ? false : true;
  return c;
}
