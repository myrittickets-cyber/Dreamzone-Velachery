// Dreamzone Home Page JavaScript

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close mobile menu when clicking outside
if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Mobile dropdown toggles
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const parent = this.parentElement;
        const dropdown = parent.querySelector('.mobile-dropdown-menu');

        // Close other dropdowns
        document.querySelectorAll('.mobile-has-dropdown').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
                const otherDropdown = item.querySelector('.mobile-dropdown-menu');
                if (otherDropdown) {
                    otherDropdown.style.maxHeight = '0';
                }
            }
        });

        // Toggle current dropdown
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        } else {
            dropdown.style.maxHeight = '0';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dropdown menu for mobile
const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        }
    });
});

// Animate on scroll - Enhanced for data-aos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute (gallery items)
document.querySelectorAll('[data-aos]').forEach(el => {
    const delay = el.getAttribute('data-aos-delay') || 0;
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
    observer.observe(el);
});

// Observe other cards without data-aos
document.querySelectorAll('.course-card, .feature-card, .achievement-card').forEach(el => {
    if (!el.hasAttribute('data-aos')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    }
});

// Form validation (if needed)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});

// Counter animation for statistics (if you add them later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when they come into view
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// ====================================
// HERO SLIDER FUNCTIONALITY
// ====================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.slider-dot');
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    // Reset auto-play timer
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, slideInterval);
}

// Initialize slider
if (slides.length > 0) {
    showSlide(0);

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto-play slider
    let sliderTimer = setInterval(nextSlide, slideInterval);

    // Pause on hover
    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(sliderTimer);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            sliderTimer = setInterval(nextSlide, slideInterval);
        });
    }
}

console.log('Dreamzone Home Page Loaded Successfully!');

// Video Modal Functions for HTML5 Video
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Play video after a short delay to ensure modal is visible
    setTimeout(() => {
        videoPlayer.play();
    }, 300);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    modal.classList.remove('active');
    videoPlayer.pause(); // Pause video
    videoPlayer.currentTime = 0; // Reset to beginning
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});



// Close menu on window resize to desktop
window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ====================================
// REGISTRATION & DOWNLOAD POPUP FUNCTIONS
// ====================================

// Open registration popup
function openRegistrationPopup() {
    const popup = document.getElementById('registrationPopup');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close registration popup
function closeRegistrationPopup() {
    const popup = document.getElementById('registrationPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle brochure form submission
function handleBrochureSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.getElementById('regCourse').value
    };

    // Log data (in production, send to server)
    console.log('Brochure Registration:', formData);

    // Close registration popup
    closeRegistrationPopup();

    // Show download popup
    setTimeout(() => {
        openDownloadPopup();
        // Auto-download brochure
        const link = document.createElement('a');
        link.href = 'assets/brochure/Dreamzonebrochure_250526_122724.pdf';
        link.download = 'Dreamzone_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 300);

    // Reset form
    document.getElementById('brochureForm').reset();
}

// Open download success popup
function openDownloadPopup() {
    const popup = document.getElementById('downloadPopup');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close download popup
function closeDownloadPopup() {
    const popup = document.getElementById('downloadPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Close popups on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeRegistrationPopup();
        closeDownloadPopup();
    }
});

// ====================================
// ENROLLMENT POPUP FUNCTIONS
// ====================================

// Open enrollment popup
function openEnrollmentPopup(titleText) {
    const popup = document.getElementById('enrollmentPopup');
    const titleEl = popup.querySelector('.registration-header h2');
    const submitBtn = popup.querySelector('.btn-submit');

    if (titleText && titleEl) {
        titleEl.textContent = titleText;
        if (submitBtn) submitBtn.innerHTML = `${titleText} <i class="ri-send-plane-fill"></i>`;
    } else {
        if (titleEl) titleEl.textContent = 'Enquiry Form';
        if (submitBtn) submitBtn.innerHTML = 'Submit Enquiry <i class="ri-send-plane-fill"></i>';
    }

    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close enrollment popup
function closeEnrollmentPopup() {
    const popup = document.getElementById('enrollmentPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle enrollment form submission (NO DOWNLOAD)
function handleEnrollSubmit(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('enrollName').value,
        email: document.getElementById('enrollEmail').value,
        phone: document.getElementById('enrollPhone').value,
        course: document.getElementById('enrollCourse').value
    };

    const submitBtn = event.target.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class=\"ri-loader-4-line\"></i> Sending...';
    submitBtn.disabled = true;

    // Send to backend API
    fetch('http://localhost:3000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(' ' + data.message);
                closeEnrollmentPopup();
                document.getElementById('enrollForm').reset();
            } else {
                alert(' ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(' Failed to submit enrollment. Please try again or contact us directly.');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

// Update brochure download to send to backend
const originalHandleBrochureSubmit = handleBrochureSubmit;
window.handleBrochureSubmit = function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.getElementById('regCourse').value
    };

    // Send to backend API for brochure download
    fetch('http://localhost:3000/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // Close registration popup
            closeRegistrationPopup();

            // Show download popup and trigger download
            setTimeout(() => {
                openDownloadPopup();
                // Auto-download brochure
                const link = document.createElement('a');
                link.href = 'assets/brochure/Dreamzonebrochure_250526_122724.pdf';
                link.download = 'Dreamzone_Brochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 300);

            // Reset form
            document.getElementById('brochureForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to process request. Please try again.');
        });
};

// Update ESC key handler to close enrollment popup too
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeRegistrationPopup();
        closeDownloadPopup();
        closeEnrollmentPopup();
    }
});

// ====================================
// TOAST NOTIFICATION SYSTEM
// ====================================

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.add('show');

    // Auto-hide after 4 seconds
    setTimeout(() => {
        closeToast();
    }, 4000);
}

function closeToast() {
    const toast = document.getElementById('toastNotification');
    toast.classList.remove('show');
}

// Update enrollment handler to use toast
window.handleEnrollSubmit = function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('enrollName').value,
        email: document.getElementById('enrollEmail').value,
        phone: document.getElementById('enrollPhone').value,
        course: document.getElementById('enrollCourse').value
    };

    const submitBtn = event.target.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class=\"ri-loader-4-line\"></i> Sending...';
    submitBtn.disabled = true;

    fetch('http://localhost:3000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeEnrollmentPopup();
                document.getElementById('enrollForm').reset();
                showToast('Enrollment submitted successfully! Check your email for confirmation.');
            } else {
                showToast('Failed to submit enrollment. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('Network error. Please check your connection and try again.');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
};

// Update brochure handler to use toast
window.handleBrochureSubmit = function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.getElementById('regCourse').value
    };

    const submitBtn = event.target.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class=\"ri-loader-4-line\"></i> Processing...';
    submitBtn.disabled = true;

    fetch('http://localhost:3000/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            closeRegistrationPopup();
            document.getElementById('brochureForm').reset();

            // Show toast
            showToast('Brochure download started! Check your downloads folder.');

            // Trigger download
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'assets/brochure/Dreamzonebrochure_250526_122724.pdf';
                link.download = 'Dreamzone_Brochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 500);
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('Failed to process request. Please try again.');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
};

// Function to toggle Nav Dropdown programmatically
window.toggleNavDropdown = function (category) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        const isMobile = window.innerWidth <= 991;

        if (isMobile) {
            // Mobile: Open mobile menu and expand the dropdown
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Find and expand the correct mobile dropdown
            setTimeout(() => {
                const mobileDropdowns = document.querySelectorAll('.mobile-has-dropdown');
                mobileDropdowns.forEach(item => {
                    const button = item.querySelector('.mobile-dropdown-toggle');
                    const dropdownMenu = item.querySelector('.mobile-dropdown-menu');

                    if (button && dropdownMenu) {
                        const buttonText = button.textContent.toLowerCase();
                        let shouldExpand = false;

                        if (category === 'interior' && buttonText.includes('interior')) {
                            shouldExpand = true;
                        } else if (category === 'fashion' && buttonText.includes('fashion')) {
                            shouldExpand = true;
                        } else if (category === 'graphic' && buttonText.includes('graphic')) {
                            shouldExpand = true;
                        }

                        if (shouldExpand) {
                            item.classList.add('active');
                            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';

                            // Auto-hide after 8 seconds on mobile (longer for easier viewing)
                            setTimeout(() => {
                                item.classList.remove('active');
                                dropdownMenu.style.maxHeight = '0';
                            }, 8000);
                        }
                    }
                });
            }, 400);

        } else {
            // Desktop: Show the navigation dropdown
            // Remove any existing force-show classes first
            document.querySelectorAll('.has-dropdown').forEach(item => {
                item.classList.remove('force-show');
            });

            // Find and show the correct dropdown
            const navItems = document.querySelectorAll('.main-nav .has-dropdown');
            navItems.forEach(item => {
                const link = item.querySelector('a');
                if (link) {
                    const href = link.getAttribute('href');
                    // Match the category: #interior, #fashion, or #graphic
                    if (href === '#' + category) {
                        item.classList.add('force-show');
                        // Auto-hide after 5 seconds
                        setTimeout(() => {
                            item.classList.remove('force-show');
                        }, 5000);
                    }
                }
            });
        }
    }, 600);
};


// Contact Us Popup Functions
function openContactPopup() {
    const popup = document.getElementById('contactPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeContactPopup() {
    const popup = document.getElementById('contactPopup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeContactPopup();
    }
});
