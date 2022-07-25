const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header__content');
const container = document.querySelector('.container');
const body = document.querySelector('body');
burger.addEventListener('click', burgerActive);
// console.log(burger)
function burgerActive(){
    burger.classList.toggle('close');
    header.classList.toggle('active')
    body.classList.toggle('lock');
    container.classList.toggle('paddingNull');
}