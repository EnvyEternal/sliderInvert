//const colorSlider = document.querySelector('.slider-color-boxes');
//const imgSlider = document.querySelector('.slider-images');
//const upButton = document.querySelector('.btn-up');
//const downButton = document.querySelector('.btn-down');
//const container = document.querySelector('.container');
//const slidesCount = colorSlider.querySelectorAll('div').length;


const upButton = document.querySelector('.btn-up');
const downButton = document.querySelector('.btn-down');
const active = document.querySelector('.activ')
const back = document.querySelectorAll('.back')
const back2 = document.querySelectorAll('.back2')

upButton.addEventListener('click', changeUp);
downButton.addEventListener('click', changeUp);

let index = 0

function changeUp(){
    if(index >= 1 && index <= 4){
    const active = document.querySelector('.activ')
    const active2 = document.querySelector('.activ2')
    active.classList.remove('activ');
    active2.classList.remove('activ2');
    ++index
    back[index].classList.add('activ')
    back2[index].classList.add('activ2')}else{return index = 0}
}

