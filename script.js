// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Dynamic text animation with fade effect
const textElement = document.querySelector('.text-animate h3');
const texts = [
    'Digital Marketing Specialist',
    'SEO Expert',
    'Content Strategist',
    'Social Media Manager',
    'Brand Consultant',
    'Marketing Analyst'
];

let textIndex = 1;

function changeText() {
    // Add fade-out class
    textElement.classList.add('fade-out');
    
    // Wait for fade-out animation to complete, then change text
    setTimeout(() => {
        textIndex = (textIndex + 1) % texts.length;
        textElement.textContent = texts[textIndex];
        
        // Remove fade-out and trigger fade-in
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
        
        // Remove fade-in class after animation completes
        setTimeout(() => {
            textElement.classList.remove('fade-in');
        }, 100);
    }, 500);
}

// Change text every 3 seconds (3000 milliseconds)
setInterval(changeText, 3000);