window.onscroll = function(){navFunction()};

var nav = document.getElementById("nav-menu");
var sticky = nav.offsetTop; 

function navFunction(){
    
    if(window.pageYOffset >=sticky){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        nav = "nav-shadow";
    } else {
        nav = "nav-menu";
    }
}