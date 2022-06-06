function makeDiagonalRed(table) {

  Array.from(table.rows)
    .map((row, i) => row.cells[i].style.backgroundColor = 'red');

}
