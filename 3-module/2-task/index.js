function filterRange(arr, a, b) {

  const range = arr.slice(a, b).filter((num) => num >= a && num <= b);

  return range;
}
