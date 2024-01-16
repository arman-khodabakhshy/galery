const wrapp = document.querySelector('.wrapper');
const modal =  document.querySelector('.modal');

wrapp.addEventListener(`click` , function (e) {
    if(e.target.tagName === 'IMG'){
    modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`
    modal.innerHTML = `<img src="${e.target.src}" alt="">` 
    modal.style.transform = 'scale(1)' ;
   }   

})
modal.addEventListener('dblclick',function (e) {
    if(e.target.tagName !== 'IMG') {
        modal.style.transform = 'scale(0)' ;
    }

})
modal.addEventListener('mousemove' , function (e){
if (e.target.tagName=='IMG') {
    let xdeg = (e.offsetX - 300) / 5;
    let ydeg = -(e.offsetY - 200) / 5;
 
    e.target.style.transform=`rotateX(${ydeg}deg ) rotateY(${xdeg}deg)`
}
} );