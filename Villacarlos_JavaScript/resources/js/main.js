window.onscroll = function(){navFunction()};

function navFunction(){
    var nav = document.getElementById("nav-menu");
    var sticky = nav.offsetTop; 
    var topper = document.getElementById("topper");
    if(window.pageYOffset >=sticky){
        nav.classList.add("sticky");
        nav.classList.add("nav-shadow");
        topper.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        topper.style.display = "none";
    }

    if(document.body.scrollTop < 50 && document.documentElement.scrollTop < 50){
        nav.className = "nav";
    }
}

function ageFun(){
    var name = prompt("Enter your name:","name")
    var year = prompt("Enter your birth year:", "0000")
    document.getElementById("name-contain").innerHTML = name;
    document.getElementById("year-contain").innerHTML = year;
    var age = 2020-year; 
    document.getElementById("age-contain").innerHTML = age;
}

function changeBG(){
    var retVal = confirm("Do you want to change the background color?")
    if(retVal == true){
        var color = prompt("What color? ")
        document.getElementById("body").style.background = color
        document.getElementById("logo").style.background = color
        document.getElementById("nav-menu").style.background = color
    }
    var retVal2 = confirm("Do you want to change the font color? ")
    if(retVal2 == true){
        var textColor = prompt("What color? ")
        document.getElementById("body").style.color = textColor
        document.getElementById("logo").style.color = textColor
        document.getElementById("nav-menu").style.color = textColor
    }
}