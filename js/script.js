window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


//RIPPLE BUTTON JS

// const buttons = document.querySelectorAll('.ripple');

// buttons.forEach(button => {
//     button.addEventListener('click', function(e) {
//         const x = e.clientX;
//         const y = e.clientY;

//         const buttonTop = e.target.offsetTop;
//         const buttonLeft = e.target.offsetLeft;

//         const xInside = x - buttonLeft;
//         const yInside = y - buttonTop;

//         const circle = document.createElement('span');
//         circle.classList.add('circle');
//         circle.style.top = yInside + 'px';
//         circle.style.left = xInside + 'px';

//         this.appendChild(circle);

//         setTimeout(() => circle.remove(), 500)

//     })
// })

