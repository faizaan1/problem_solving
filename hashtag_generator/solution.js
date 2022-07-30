function generateHashtag(str) {
  if (str.length == 0) {
    return false;
  }
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  let a = `#${str.join("")}`;
  if (a.length > 140 || a == "#") {
    return false;
  }
  return a;
}
generateHashtag("       ");
