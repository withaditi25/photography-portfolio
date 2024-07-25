const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
console.log(showBtn);
console.log(topNav)

showBtn.addEventListener('click', function(){
    console.log("click")
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });