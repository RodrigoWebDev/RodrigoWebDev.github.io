//Toggle nav menu
var mobMenuBtn = $(".nav__menu-container");
var navMenu = $(".nav__menu");
mobMenuBtn.on("click", function () {
    navMenu.slideToggle(200);
});