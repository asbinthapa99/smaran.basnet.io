// ===== Navbar toggle =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ===== Scroll sections =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    document.querySelector('header').classList.toggle('sticky', scrollY > 100);

    // hide navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ===== Read More =====
const readMoreBtn = document.getElementById('readMoreBtn');
const content = document.getElementById('content');

function toggleReadMore() {
    content.classList.toggle('expanded');
    readMoreBtn.textContent = content.classList.contains('expanded') ? 'Read less' : 'Read more';
}

// ===== Dynamic text animation =====
const textElement = document.querySelector('.text-animate h3');
const texts = [
    'Digital Marketing Specialist',
    'SEO Expert',
    'Content Strategist',
    'Social Media Manager',
    'Brand Consultant',
    'Marketing Analyst'
];
let textIndex = 0;

function changeText() {
    textElement.classList.add('fade-out');
    setTimeout(() => {
        textIndex = (textIndex + 1) % texts.length;
        textElement.textContent = texts[textIndex];
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');

        setTimeout(() => textElement.classList.remove('fade-in'), 500);
    }, 500);
}

setInterval(changeText, 3000);

// ===== Animate progress bars =====
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress .bar span').forEach(bar => {
        let width = bar.parentElement.previousElementSibling.textContent.match(/\d+/)[0];
        bar.style.width = width + '%';
    });
});
