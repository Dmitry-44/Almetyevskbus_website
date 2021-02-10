//        //  MENU-BURGER //      //
const burgerBtn = document.getElementById('burger__btn');
const nav = document.getElementById('nav');


burgerBtn.addEventListener('click', function(){
    nav.classList.toggle("navigation-enter");
    nav.classList.toggle("navigation-enter-active");
    burgerBtn.classList.toggle("burger--open")
});
