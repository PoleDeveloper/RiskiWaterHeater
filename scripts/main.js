$(document).ready(function(){

    reveal();

    $("#topmenu2-mobile-menu-btn").on("click", function(){
        openmobilemenu();
    });
    $(".mobile-menu-btn").on("click", function(){
        closemobilemenu();
    });
});

function openmobilemenu(){
    $("#mobile-menu").css({"top":"0%"});
}
function closemobilemenu(){
    $("#mobile-menu").css({"top":"-100%"});
}

function reveal(){
    var animateddiv = document.querySelectorAll(".andiv");

    for (var i = 0; i < animateddiv.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = animateddiv[i].getBoundingClientRect().top;
        var elementVisible = 150;
        var attran = $(animateddiv[i]).attr("anver");

        if (elementTop < windowHeight - elementVisible) {
            animateddiv[i].classList.add("appear"+attran);
        }
        if (elementTop > windowHeight){
            animateddiv[i].classList.remove("appear"+attran);   
        }
    }
}

window.addEventListener("scroll", reveal);