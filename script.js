const toggleBtn = document.querySelector('.nav-toggle i')
const toggleList = document.querySelector('#navigationBar ul')
const allList = document.querySelectorAll('#navigationBar ul li a')
toggleBtn.addEventListener('click' , toggleNav)
allList.forEach(e => {
    e.addEventListener('click' , toggleNav)
})
function toggleNav() {
    if(!toggleList.classList.contains('toggle-nav')) {
        toggleList.classList.add('toggle-nav')
    }else {
        toggleList.classList.remove('toggle-nav')
    }
}