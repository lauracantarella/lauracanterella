

//OPEN CLOSE MENU


document.getElementById("top").addEventListener('click', function() {
        console.log("click")
       this.classList.toggle("open")
        this.classList.toggle("openstatus")
        checkarrow();
});

document.getElementById("main-page").addEventListener('click', function() {
    document.getElementById("top").classList.remove("open");
    document.getElementById("top").classList.remove("openstatus");
    checkarrow();
});

document.getElementById("menu-link").addEventListener('click', function() {
  
    checkarrow();
    checkmarquee();
});

// ROTATE ARROW 

function checkarrow() {
    isopen = document.getElementById("top")
    if (isopen.classList.contains("open")){
        document.getElementById("arrow").classList.add("arrowopen")
   
    }
    else{
        document.getElementById("arrow").classList.remove("arrowopen")

    }
}

function checkmarquee() {
    isopen = document.getElementById("close-cross")
    if (isopen.classList.contains("hidden")){
        //gallry is close
        //console.log("close")
        document.getElementById("con-menu-left").classList.remove("marquee");
       // document.getElementById("loc").classList.remove("hidden");
        document.getElementById("loc").innerText="";
    } 
    else{
        //galley is open
        //console.log("open")
        document.getElementById("con-menu-left").classList.add("marquee");
       // document.getElementById("loc").classList.remove("hidden");
    }
}

//GET ANCHOR 

// function getAnchor() {
//     return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
// }
