function checkSpam(str) {
  let strLow = str.toLowerCase();

  if (strLow.includes("1xbet now") || strLow.includes("free xxxxx")) {
    return true;
  }
  return false;

}
