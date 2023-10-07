var slider = tns({
    container: "#landing-slider",
    slideBy: 1,
    autoplay: true,
    "lazyload": true,
    center: true,
    mouseDrag: false,
    items: 1,
    loop: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsContainer: "#lan-controls",
    "controls": true,
    "autoplayTimeout": 3500,
    "speed": 800,
    "arrowKeys": true,
    nav: false
});
var sliderinview = false

slider.getInfo();

var customizedFunction = function (info, eventName) {
    // direct access to info object
    var info = slider.getInfo()
    var cur = info.index + 1 // get current slide starting from 1 
    var len = info.slideCount // total slides 
    if (cur>=len) {
        setTimeout(() => {
       disableslider()
          }, 1000);
       
        
    }
  }


  //change anchor 
function handleIntersection(entries) {
  entries.forEach(({ isIntersecting } )=> {
    console.log("sliderin view", sliderinview);
   
      if (isIntersecting) {
      //anchor = target.getAttribute('title')
      sliderinview = true
      }
      else {
        sliderinview = false
      }

     
  
})
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5
});
document.querySelectorAll("#con-landing-slider").forEach(el => observer.observe(el));






  
function disableslider(){
    document.getElementById("description").scrollIntoView();
    //slider.destroy();

}
  // bind function to event
  slider.events.on('transitionEnd', customizedFunction);





