// new Game().start()
const btn = document.querySelectorAll('.slider-btn');
const mover = document.querySelector('.slider-wrap ul');
const slides = mover.querySelectorAll('li')
let count = 0;
slides[count].classList.add('active')
console.log(slides)
const onMove = () => {
    const active = mover.querySelector('.active')
    const next = active.nextElementSibling
    let width = 0
    if(next){
        width = getComputedStyle(next).width
        count++;
        active.classList.remove('active')
        next.classList.add('active')
    } else {
        count = 0;
        active.classList.remove('active')
        slides[count].classList.add('active')
    }
    mover.style.transform = `translateX(${-parseInt(width) * count}px)`

    console.log(next)
}
btn.forEach(elem => {
    if(elem.classList.contains('slider__next')){
        elem.addEventListener('click', onMove)
    } else {

    }

})

