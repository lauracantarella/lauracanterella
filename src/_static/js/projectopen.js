var btn_more = document.querySelectorAll(".proj, .con-title")
    //console.log(btn_more)
for (var i = 0; i < btn_more.length; i++) {
    btn_more[i].addEventListener('click', function() {
        target = this.getAttribute('data-target')
        console.log("click")
        document.getElementById(target).classList.toggle("open")
        this.classList.toggle("openstatus")
    })

}