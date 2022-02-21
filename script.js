// display mobile menu
// defining which class i want to target
// 1st is toggle bar and second is the links in the toggle bar (mobile view)
const menu = document.querySelector('#mobileMenu');
const navLinks = document.querySelector('.navbarMenu'); 


// display mobile menu
// being defensive by saying if you find menu on the page, only then run this function
if (menu) {
      let mobileMenu = () => {
            // targeting the class in css for navbarMenu and the mobile menu toggle
            menu.classList.toggle('is-active')
            navLinks.classList.toggle('active')
      }
// adding an event listener to the function i made, when you click the menu that is when it will toggle the active state defined in the function
      menu.addEventListener('click', mobileMenu);
};

// showing active menu when scrolling
// not sure about let or const but hey
const logo = document.querySelector('.logo');

if (logo) {
      let highlightMenu = () =>{

      }
}


// remember to activate the .highlight