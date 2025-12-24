/* Main JavaScript for Dreamzone Velachery */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Allow Menu Toggle */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show');
    });
}

/* Menu Close */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show');
    });
}

/* Remove Menu Mobile on Link Click */
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Change Background Header */
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Scroll Active Link (Optional: can be expanded) */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Simple Animation on Scroll using Intersection Observer */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .course-card, .feature-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// CSS class for the animation to apply
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .header.scroll-header {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    background: rgba(255, 255, 255, 1);
  }
  .active-link {
    color: var(--primary-color);
  }
  .active-link::after {
    width: 100%;
  }
`;
document.head.appendChild(styleSheet);
