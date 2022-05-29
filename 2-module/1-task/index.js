function sumSalary(salaries) {
  let counter = 0;

  for (let key in salaries) {

    if (isFinite(salaries[key])) {
      counter += salaries[key];
    } else if (typeof salaries[key] === !"number") {
      return 0;
    }

  }

  return counter;
}
