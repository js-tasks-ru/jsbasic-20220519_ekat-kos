function namify(users) {

  const names = users.filter((user) => user.name).map((user) => user.name);

  return names;
}
