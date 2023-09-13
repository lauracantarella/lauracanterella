// DARK MODE

document.getElementById("nav-toggledark").addEventListener('click', function() {
    document.querySelector("body").classList.toggle("dark-mode");
    //console.log('dark')
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


  

