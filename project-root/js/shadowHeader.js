const headerElement = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerElement.classList.add('shadow');
    } else {
        headerElement.classList.remove('shadow');
    }
});
