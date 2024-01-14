const parent = document.querySelector('.parent')
const modal = document.querySelector('.modal')

parent.addEventListener(`click` , function(e){
if (e.target.tagName === 'IMG') {
    modal.style.transformOrigin =`${e.clientX}px ${e.clientY}px`
    modal.innerHTML = `<img src="${e.target.src}" alt="">`
    modal.style.transform = 'scale(1)'
}

})
modal.addEventListener(`dblclick` , function(e){
    if (e.target.tagName !== 'IMG') {
        modal.style.transform = 'scale(0)'
    }

})