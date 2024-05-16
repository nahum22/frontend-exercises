function toggleColumn(index) {
  let rows = document.querySelectorAll("#dataTable tr");
  console.log(rows);
  rows.forEach((row) => {
    let cell = row.cells[index];

    if (cell.style.display === "none") {
      cell.style.display = "";
    } else {
      cell.style.display = "none";
    }
  });
}

function resetTable() {
  let rows = document.querySelectorAll("#datatable tr");

  rows.forEach((row) => {
    Array.from(row.cells).forEach((cell) => {
      cell.display = "";
    });
  });
}
