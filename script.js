// Cached Element References
const sun = document.querySelector('i.fa-sun');
const moon = document.querySelector('i.fa-moon');
const body = document.querySelector('body')

// Functions
const lightmode = () => {
    body.classList.remove('mode');
};

const darkmode = () => {
    body.classList.add('mode');
};

const mouseover = () => {
    if(event.target === sun) {
        sun.classList.add('border');
    } else if (event.target === moon) {
        moon.classList.add('border');
    };
};

const mouseexit = () => {
    if(event.target === sun) {
        sun.classList.remove('border');
    } else if (event.target === moon) {
        moon.classList.remove('border');
    };
};

// Event Listeners
sun.addEventListener('click',lightmode);
moon.addEventListener('click',darkmode);
sun.addEventListener('mouseenter',mouseover);
sun.addEventListener('mouseout',mouseexit);
moon.addEventListener('mouseenter',mouseover);
moon.addEventListener('mouseout',mouseexit);