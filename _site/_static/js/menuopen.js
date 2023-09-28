

//OPEN CLOSE MENU

var menubtn =  document.getElementsByClassName("btn-menu")
for (var i = 0; i < menubtn.length; i++) {
    menubtn[i].addEventListener('click', function() {
        document.getElementById("menumore").classList.toggle("open")
        
        checkarrow();
    });
}

document.getElementById("main-page").addEventListener('click', function() {
    document.getElementById("menumore").classList.remove("open");

    checkarrow();
});

document.getElementById("menu-link").addEventListener('click', function() {
    document.getElementById("menumore").classList.remove("open");
    document.getElementById("loc").classList.remove("hidden");
    
    checkarrow();
    checkmarquee();
});

// ROTATE ARROW 

function checkarrow() {
    isopen = document.getElementById("menumore")
    if (isopen.classList.contains("open")){
        document.getElementById("arrow").classList.add("arrowopen")
        document.getElementById("loc").classList.add("hidden");
        //document.getElementById("con-mennu-left").classList.remove("marquee");
    }
    else{
        document.getElementById("arrow").classList.remove("arrowopen")
        document.getElementById("loc").classList.remove("hidden");
    }
}

function checkmarquee() {
    isopen = document.getElementById("close-cross")
    if (isopen.classList.contains("hidden")){
        //gallry is close
        console.log("close")
        document.getElementById("con-menu-left").classList.remove("marquee");
        document.getElementById("loc").classList.remove("hidden");
        document.getElementById("loc").innerText="";
    } 
    else{
        //galley is open
        console.log("open")
        document.getElementById("con-menu-left").classList.add("marquee");
        document.getElementById("loc").classList.remove("hidden");
    }
}

//GET ANCHOR 

// function getAnchor() {
//     return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
// }
