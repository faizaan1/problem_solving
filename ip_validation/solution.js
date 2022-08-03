function isValidIP(str) {
  if (str.trim() != str) return false;
  let a = str.split(".");
  if (a.length != 4) return false;
  for (let octat of a) {
    if (
      octat < 0 ||
      octat > 255 ||
      octat.includes("e") ||
      parseInt(octat).toString() != octat.toString()
    ) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}
console.log(isValidIP("0.0.0.0"));
