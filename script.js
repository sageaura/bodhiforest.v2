// display mobile menu

const menu = document.querySelector('#mobileMenu');
const navLinks = document.querySelector('.navbarMenu'); 


// display mobile menu

if (menu) {
      let mobileMenu = () => {
            menu.classList.toggle('is-active')
            navLinks.classList.toggle('active')
      }

      menu.addEventListener('click', mobileMenu);
}