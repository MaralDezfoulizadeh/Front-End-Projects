const content = document.getElementsByTagName("body")[0];
const DarkMode = document.querySelector(".darkModeToggle");
DarkMode.addEventListener("click", function () {
  DarkMode.classList.toggle("active");
  content.classList.toggle("night");
});
