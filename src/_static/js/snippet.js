// DARK MODE

// document.getElementById("nav-toggledark").addEventListener('click', function() {
//     document.querySelector("body").classList.toggle("dark-mode");
//   checkdark()
//     //console.log('dark')
// });

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

//change anchor 
function handleIntersection(entries) {
    entries.forEach(({ target, isIntersecting } )=> {
     
        if (isIntersecting) {
        anchor = target.getAttribute('title')
        document.getElementById("loc").innerText=anchor;   
       
    } 
})
}

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });
  document.querySelectorAll(".anchor").forEach(el => observer.observe(el));


  

