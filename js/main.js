document.addEventListener('DOMContentLoaded', () => {
    const imgAnimation = document.querySelectorAll('.img-animation');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        imgAnimation.forEach(img => {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                img.classList.add('fade-out');
                img.classList.remove('fade-in');
            } else {
                // Scrolling up
                img.classList.add('fade-in');
                img.classList.remove('fade-out');
            }
        });
        lastScrollTop = scrollTop;
    });
});