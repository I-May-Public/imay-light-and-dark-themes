const BG_WHITE = 'rgb(255 255 255 / 50%)';
const BG_BLACK = 'rgb(0 0 0 / 50%)';

const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const currentTheme = localStorage.getItem('theme');

//  Image Mode Function
function imageMode(color) {
   image1.src = `img/undraw_proud_coder_${color}.svg`;
   image2.src = `img/undraw_feeling_proud_${color}.svg`;
   image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function dataTheme(theme) {
   document.documentElement.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme);
   imageMode(theme);
}

// Dark & Light Mode Function
function toggleDarkLightMode(isDark) {
   isDark ? dataTheme('dark') : dataTheme('light')
   nav.style.backgroundColor = isDark ? BG_BLACK : BG_WHITE;
   textBox.style.backgroundColor = isDark ? BG_WHITE : BG_BLACK;
   toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
   isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
      toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Check Local Storage for Theme

if (currentTheme) {
   if (currentTheme === 'dark') {
      toggleDarkLightMode(true);
      toggleSwitch.checked = true;
   }
   else toggleDarkLightMode(false);
}

// Switch Theme Dynamically
function switchTheme(event) {
   if (event.target.checked) {
      toggleDarkLightMode(true);
   } else {
      toggleDarkLightMode(false);
   }
}

// Event Listener

toggleSwitch.addEventListener('change', switchTheme);
