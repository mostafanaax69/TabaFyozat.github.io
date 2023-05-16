function updateCount() {
  const today = new Date();
  const start = new Date("2023-05-16"); // Replace with your start date
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  document.getElementById("count").textContent = diff;
}

updateCount();
