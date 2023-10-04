var slider2 = tns({
    container: "#main-slider",
    slideBy: 1,
    "lazyload": true,
    center: true,
    mouseDrag: false,
    loop: true,
    items: 1,
    controlsContainer: "#main-controls",
    "controls": true,
    "speed": 600,
    "arrowKeys": true,
    nav: false
    
  });

  slider2.getInfo()
  
  var curSlide = function (info, eventName) {
    // direct access to info object
    var info2 = slider2.getInfo()
    var cur2 = info2.displayIndex -1 // get current slide starting from 1 
    console.log(cur2)
    title= document.getElementById("slide-"+cur2).getAttribute('title');
   // console.log(title)
    document.getElementById("loc").innerText=title;
  
  }

  slider2.events.on('indexChanged', curSlide);


  var startbtn =   document.querySelectorAll('[data-target="slider"]')
  for (var i = 0; i < startbtn.length; i++) {
      startbtn[i].addEventListener('click', function() {
          slide=this.getAttribute('data-slide')
          slider2.goTo(slide)
          document.getElementById("con-main-slider").classList.remove("hidden");
          //document.getElementById("loc").classList.remove("hidden");
          document.getElementById("close-cross").classList.remove("hidden");
          checkarrow();
          checkmarquee();
          curSlide();
      });
  }

  document.getElementById("close-cross").addEventListener('click', function() {
    document.getElementById("con-main-slider").classList.add("hidden");
    //document.getElementById("loc").classList.add("hidden");
    document.getElementById("close-cross").classList.add("hidden");
    document.getElementById("top").classList.remove("open");
    checkmarquee();
  });
  


  window.onload = (event) => {
    checkdark()
    url = window.location.href
    if (url.includes('slider')){
          document.getElementById("con-main-slider").classList.remove("hidden");
          //document.getElementById("loc").classList.remove("hidden");
          document.getElementById("close-cross").classList.remove("hidden");
          checkarrow();
          checkmarquee();
    }
    if (url.includes('archit')) {
      document.getElementById("con-main-slider").classList.remove("hidden");
      //document.getElementById("loc").classList.remove("hidden");
      document.getElementById("close-cross").classList.add("hidden");
      
    }
  };