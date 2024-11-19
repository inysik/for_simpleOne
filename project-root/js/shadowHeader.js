const headerElement = document.querySelector('.sub-heading__nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerElement.classList.add('shadow');
    } else {
        headerElement.classList.remove('shadow');
    }
});
