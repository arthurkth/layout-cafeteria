(()=>{
const btn = document.querySelector('.header__togglerbtn')
const bar = document.querySelectorAll('.bar')
const nav = document.querySelector('.header__nav')
const slider = document.querySelector('.slider')
const header = document.querySelector('.header')
btn.addEventListener('click',()=>{
    btn.classList.toggle('change');
    nav.classList.toggle('active')
})

window.addEventListener('scroll', fadeHeader)
function fadeHeader() {
    let pagePosition = slider.offsetHeight - 50 
    if(window.pageYOffset >= pagePosition){
       header.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))'
       bar.forEach(item =>{
           item.style.background = '#FFFFFF'
       })
    }else{
        header.style.background = 'transparent'
        if(window.innerWidth <= 991) {
            header.style.background = '#FFFFFF'
        }
        bar.forEach(item =>{
            item.style.background = '#262626'
        })
    }
}
})()