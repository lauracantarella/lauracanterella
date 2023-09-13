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
    "autoplayTimeout": 2000,
    "speed": 400,
    "arrowKeys": true,
    nav: false
});


slider.getInfo();

var customizedFunction = function (info, eventName) {
    // direct access to info object
    var info = slider.getInfo()
    var cur = info.index + 1 // get current slide starting from 1 
    var len = info.slideCount // total slides 
    if (cur>=len) {
        setTimeout(() => {
       disableslider()
          }, 1700);
       
        
    }
  }


  
function disableslider(){
    document.getElementById("con-landing-slider").classList.add("close");
    slider.events.off('indexChanged', customizedFunction);
   // slider.destroy();

}
  // bind function to event
  slider.events.on('transitionEnd', customizedFunction);




