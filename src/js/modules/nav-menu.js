export default (function() {
    if (document.querySelector('.header__hamburger')) {
        const humburger = document.querySelector('.header__hamburger'),
              navDown = document.querySelector('.header__nav-down'),
              navLink = document.querySelectorAll('[data-link]'),
              humburgerFirstLine = document.querySelector('.header__hamburger .header__line:nth-child(1)'),
              humburgerMiddleLine = document.querySelector('.header__hamburger .header__line:nth-child(2)'),
              humburgerLastLine = document.querySelector('.header__hamburger .header__line:nth-child(3)'),
              overlay = document.querySelector('.overlay');

        humburger.addEventListener('click', () => {
            humburgerFirstLine.classList.toggle('header__hamburger--first');
            humburgerMiddleLine.classList.toggle('header__hamburger--middle');
            humburgerLastLine.classList.toggle('header__hamburger--last');

            navLink.forEach(item => {
                item.classList.toggle('header__nav-link--hide');
            });

            navDown.classList.toggle('header__nav-down--active');
    
            overlay.classList.toggle('overlay--active');

            document.body.classList.toggle('body-overflow');
        });
    }
}());