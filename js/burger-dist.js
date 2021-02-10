//        //  MENU-BURGER //      //
let burger_btn = document.getElementById("#burger__btn");
//let nav = document.querySelector('nav');

burger_btn.addEventListener('click', function(){
    var nav = document.getElementsByClassName('nav');
    nav.classList.remove("navigator-enter");
    nav.classList.add("navigation-enter-active")
});
