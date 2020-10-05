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

function changeText(){
    document.getElementById("welcome").innerHTML = "Welcome to my <br> very special page"; 
}

function changeImage(){
    var profile = document.getElementById("profile-pic");
    profile.src = "resources/images/chihiro.jpg";

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
    var retVal = confirm("Do you want to change the background color?");
    let navigationLinks = document.querySelectorAll('nav a');

    if(retVal == true){
        var color = prompt("What color? ")
        document.getElementById("body").style.background = color;
        document.getElementById("logo").style.background = color;
        document.getElementById("nav-menu").style.background = color;
    }
    var retVal2 = confirm("Do you want to change the font color? ");
    if(retVal2 == true){
        var textColor = prompt("What color? ");
        document.getElementById("body").style.color = textColor;
        document.getElementById("logo").style.color = textColor;
        document.getElementById("nav-menu").style.color = textColor;
    }
}

function analysis(){
    var ans,ask2,ask3,ask4,ask5;
    var ask = prompt("How are you feeling today?");

    if(ask=="I'm feeling down"){
        ask2 = confirm("Are you feeling down because of your job?");
    } else if(ask=="I'm feeling happy"){
        ask2 = confirm("Are you feeling happy because of your job?");
    } else {
        ask2 = prompt("Why are you feeling like that? ");
    }

    if(ask2==true){
        ask3 = prompt("What is the reason?"); 
    } else if(ask2=="There are so much things to do") {
        ask3 = prompt("What did you do?");
    } else{
        ask3 = prompt("Tell me more about what you feel");
    }
    
    if(ask3=="because of my boss"){
        ask4 = prompt("What did your boss do?"); 
    } else if(ask3=="My boss complimented me!"){
        ans = alert("Keep up the good work!");
    }else if(ask3=="I don't feel satisfied already"){
        ans = alert("It is time for you to resign!");
    } else {
        ans = alert("It is okay to feel like that");
    }

    if(ask4=="My boss overworked me"){
        ask5 = confirm("Have you tried talking to you boss?");
    } else {
        ans = alert("You don't deserved to be treated like that!");
    }

    if(ask5==true){
        ans = alert("I'm pretty sure your boss will change your schedule!");
    } else {
        ans = alert("Find a new job!");
    }

}