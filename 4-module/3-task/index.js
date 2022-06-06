function highlight(table) {

  let tableArr = Array.from(table.rows).slice(1);

  tableArr.forEach((row) => {

    if (row.cells[3].getAttribute("data-available") == "true") {
      return row.classList.add("available");
    } else if (row.cells[3].getAttribute("data-available") == "false") {
      return row.classList.add("unavailable");
    } return row.setAttribute('hidden', "");

  });

  tableArr.forEach((row) => {

    if (row.cells[2].textContent == "m") {
      return row.classList.add("male");
    } else if (row.cells[2].textContent == "f") {
      return row.classList.add("female");
    }

  });

  tableArr.forEach((row) => {

    if (row.cells[1].innerHTML < 18) {
      return row.style.textDecoration = "line-through";
    }

  });

}
