const btnMenu = document.querySelector('.menu1');
const menu1 = document.querySelector ('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu1.classList.toggle('active')
})


const alllinks = document.querySelectorAll ('.item-nav');

alllinks.forEach(item => {

    item.addEventListener('click', () => {
        menu1.classList.toggle('active')
    })
})