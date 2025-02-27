document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("menu").classList.add("active");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("menu").classList.remove("active");
});
