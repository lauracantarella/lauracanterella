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
    console.log(cur, len)
    if (cur>=len) {
     
        setTimeout(() => {
       disableslider()
          }, 1200);
        }   
   
  }



  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const landingslider = document.querySelector('#con-landing-slider');


  
function disableslider(){
  if(isInViewport(landingslider)){
    document.getElementById("description").scrollIntoView();
  }
}
  // bind function to event
  slider.events.on('transitionEnd', customizedFunction);





