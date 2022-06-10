function makeFriendsList(friends) {

  const friendsList = friends.map(item => `${item.firstName}  ${item.lastName}`);

  let ul = document.createElement("ul");

  for (let item in friendsList) {
    let li = document.createElement("li");
    li.textContent = friendsList[item];
    ul.append(li);
    li.style.listStyleType = 'none';

  }
  return ul;

}


