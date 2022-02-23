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


// weather widget

const weatherBox = document.querySelector(".weatherbox");

if (weatherBox) {
      class WeatherBox {
            constructor(element) {
                  this.element = element;
                  this.apiKey = "67be3766c18776d2dfdd118e6fb8bf4d";

                  this.element.querySelector(".search button").addEventListener("click", () => {
                        this.search();
                  });

                  // event listener for when the user presses the enter key
                  this.element.querySelector(".search-bar").addEventListener("keyup", (event) => {
                        if (event.key == "Enter") {
                              this.search();
                        }
                  });
            }

            // search function for the add event listener
            search() {
                  this.fetchWeather(weatherBox.querySelector(".search-bar").value);
            }

            fetchWeather(city) {
                  // tell the fetch what to fetch, the parameters is city and it tells the function to look up the data for the city inputted
                  fetch(
                              "https://api.openweathermap.org/data/2.5/weather?q=" +
                              city +
                              "&units=metric&appid=" +
                              this.apiKey
                        )
                        // once it has fetched the then tells it what to do with it
                        .then((response) => response.json())
                        // then get the data from the json and log it in the console
                        .then((data) => this.displayWeather(data));
            }

            // function to display the weather on the html page
            // the function will take in the data and display the weather
            displayWeather(data) {
                  // extracting the data-----get the data for each html class
                  // below, this will extract the name from the object which will be what ever city the user inputs
                  const {
                        name
                  } = data;
                  // below the .notation is telling it where to get the icon and description which is under the weather tab in the file, this is the same for all the rest of the const
                  // when consoled the first time the icon and description came out as undefined, the problem was unlike other tabs, weather is under an array and not an object, so to reach the icon in the array enter the position in the [] to extract the data from the array instead of the object
                  const {
                        icon,
                        description
                  } = data.weather[0];
                  const {
                        temp,
                        humidity
                  } = data.main;
                  const {
                        speed
                  } = data.wind;
                  // now that the data is extracted it needs to be put in the html page
                  this.element.querySelector(".city").innerText = "Weather in " + name;
                  this.element.querySelector(".icon").src =
                        "https://openweathermap.org/img/wn/" + icon + ".png";
                  this.element.querySelector(".description").innerText = description;
                  this.element.querySelector(".temp").innerText = temp + "°C";
                  this.element.querySelector(".humidity").innerText =
                        "Humidity: " + humidity + "%";
                  this.element.querySelector(".wind").innerText =
                        "Wind speed: " + speed + " km/h";
                  // js to remove whether until dummy text loads
                  this.element.querySelector(".weatherBox").classList.remove("loading");
                  document.body.style.backgroundImage =
                        "url('https://source.unsplash.com/1600x900/?" + name + "')";
            }
      }

      const weatherWidget = new WeatherBox(weatherBox);
      weatherWidget.fetchWeather("London");

};