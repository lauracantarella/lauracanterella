// DARK MODE

document.getElementById("nav-toggledark").addEventListener('click', function() {
    document.querySelector("body").classList.toggle("dark-mode");
    console.log('dark')
});


//change anchor 
function handleIntersection(entries) {
    entries.forEach(({ target, isIntersecting } )=> {
       // console.log(target);
        if (isIntersecting) {
         
        anchor = target.getAttribute('title')

        document.getElementById("loc").innerText=anchor;   
        console.log(target, anchor) 
    } 
})
}

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });
  document.querySelectorAll(".anchor").forEach(el => observer.observe(el));


  

