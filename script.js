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
// remember to activate the .highlight
// adds the 'highlight' class to my menu items
const highlightMenu = document.querySelector('.navbarContainer')

if (highlightMenu) {
      const highlightMenu = () => {
            const glow = document.querySelector('.highlight')
            const home = document.querySelector('#homePage')
            const about = document.querySelector('#aboutPage')
            const mind = document.querySelector('#mindPage')
            const body = document.querySelector('#bodyPage')
            const soul = document.querySelector('#soulPage')
            let scrollPosition = window.scrollY;
            console.log(scrollPosition)

            if (window.innerWidth > 960 && scrollPosition < 500) {
                  home.classList.add('highlight');
                  about.classList.remove('highlight');
                  mind.classList.remove('highlight');
                  body.classList.remove('highlight');
                  soul.classList.remove('highlight');
                  return;
            } else if (window.innerWidth > 960 && scrollPosition < 2345) {
                  about.classList.add('highlight');
                  home.classList.remove('highlight');
                  return;
            } else if (window.innerWidth > 960 && scrollPosition < 2500) {
                  mind.classList.add('highlight');
                  body.classList.add('highlight');
                  soul.classList.add('highlight');
                  about.classList.remove('highlight');
                  return;
            } else if (window.innerWidth > 960 && scrollPosition < 3000) {
                  soul.classList.remove('highlight');
                  mind.classList.remove('highlight');
                  body.classList.remove('highlight');
                  return;
            } 
            if ((glow && window.innerWidth < 960 && scrollPosition < 600) || glow) {
                  glow.classList.remove('highlight');
            }
      };
      window.addEventListener('scroll', highlightMenu);
      window.addEventListener('click', highlightMenu);
}

// this is to check what position Y is at each scroll point for the clickable menu links

// let scrollPosition = window.scrollY
// console.log(scrollPosition);

// scroll position y 
// about = 600 
// pathways = 1250
// quote = 1900

//  Close mobile Menu when clicking on a menu item
const logo = document.querySelector('.logo');

const hideMobileMenu = () => {
      const menuBars = document.querySelector('.is-active');
      if (window.innerWidth <= 768 && menuBars) {
            menu.classList.toggle('is-active');
            navLinks.classList.remove('active');
      }
};

navLinks.addEventListener('click', hideMobileMenu);
logo.addEventListener('click', hideMobileMenu);