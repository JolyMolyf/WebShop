console.log("Ready");
let preloader = document.querySelector('#preloader');

var delayInMilliseconds = 3100; 

window.addEventListener('load', ()=>{
  setTimeout(function() {
    console.log("here");
      preloader.style.display = 'none';
  }, delayInMilliseconds);

})


$(document).ready(function(){

    var opened = false;
    $('#nav-icon').click(function(){

       if(opened){
          opened = false;
          console.log("true");
        $('body').removeClass('stop-scrolling');
       }else{
         console.log("false");
           $('body').addClass('stop-scrolling');

         opened = true;
       }

        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
    });
});

$(".scrolldown").click(function(){
        $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
});

$(".mis").click(function(){
        $(window).scrollTop(0);
});

var kenya = document.getElementById("kenya"); 
var brazil = document.getElementById("brazil"); 
var ethiopia = document.getElementById("ethiopia"); 
var columbia = document.getElementById("columbia"); 




$("#kenBtn").click(function(){
    kenya.scrollIntoView(true);
    $(".menu-item").removeClass("selectedCountry");
    $("#kenBtn").addClass("selectedCountry");
});
$("#ethBtn").click(function(){
    ethiopia.scrollIntoView(true);
    $(".menu-item").removeClass("selectedCountry");
    $("#ethBtn").addClass("selectedCountry");
});
$("#colBtn").click(function(){
    columbia.scrollIntoView(true);
    $(".menu-item").removeClass("selectedCountry");
    $("#colBtn").addClass("selectedCountry");
});
$("#brBtn").click(function(){
    brazil.scrollIntoView(true);
    $(".menu-item").removeClass("selectedCountry");
    $("#brBtn").addClass("selectedCountry");
});


