document.addEventListener("DOMContentLoaded", function() {
  const unverifiedCells = document.querySelectorAll("td[unverified]");
  unverifiedCells.forEach((cell) => {
    cell.setAttribute("title", "This value is unverified.");
  });
});