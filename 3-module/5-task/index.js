function getMinMax(str) {

  const onlyNum = str
    .split(" ")
    .filter(item => isFinite(item))
    .map(item => parseFloat(item));

  return {
    min: Math.min(...onlyNum),
    max: Math.max(...onlyNum),
  };
}
