var btn_more = document.getElementsByClassName("con-title")
    //console.log(btn_more)
for (var i = 0; i < btn_more.length; i++) {
    btn_more[i].addEventListener('click', function() {
        target = this.getAttribute('data-target')
        //console.log(target)
        document.getElementById(target).classList.toggle("open")
    })

}