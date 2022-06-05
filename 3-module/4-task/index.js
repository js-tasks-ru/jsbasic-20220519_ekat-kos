function showSalary(users, age) {

  const searchItems = users
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`);

  if (!searchItems.length[-1]) {
    return searchItems.join("\n");
  }

  return searchItems;
}
