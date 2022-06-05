function camelize(str) {

  const camelStr = str.split("-").map((item, index) => {

    if (index == 0) {
      return item;
    } return item[0].toUpperCase() + item.slice(1);

  })
    .join("");


  return camelStr;

}
