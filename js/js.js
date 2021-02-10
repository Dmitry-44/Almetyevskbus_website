//        //  MENU-BURGER //      //
const burgerBtn = document.getElementById('burger__btn');
//let nav = document.querySelector('nav');

burgerBtn.addEventListener('click', function(){
    var nav = document.getElementsByClassName('nav');
    nav.classList.remove("navigator-enter");
    nav.classList.add("navigation-enter-active")
});


