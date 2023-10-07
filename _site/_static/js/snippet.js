//calculte vh from innerheight
let vh = window.innerHeight;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

function checkdark() {

  if (document.querySelector("body").classList.contains("dark-mode")){
    document.getElementById("nav-toggledark").innerText= 'Light mode';
  }
  else {
    document.getElementById("nav-toggledark").innerText= 'dark mode';
  }
}

const btn = document.getElementById("nav-toggledark")

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.querySelector("body").classList.toggle("dark-mode");
  checkdark()
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  checkdark()
  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});


console.log('Hi there! Any questions regarging the code of this website? You can reach out to the developer --> marie(at)verdeil(dot)net')

