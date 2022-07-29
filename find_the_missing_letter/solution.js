function findMissingLetter(a) {
  for (i = 0; i < a.length - 1; i++) {
    if (a[i].charCodeAt() + 1 == a[i + 1].charCodeAt()) {
      continue;
    }
    return String.fromCharCode(a[i].charCodeAt() + 1);
  }
}
