// Course Detail Page JavaScript

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

// Handle enrollment form submission
function handleEnrollSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.title
    };

    // Log data (in production, send to server)
    console.log('Enrollment Data:', formData);

    // Show success message
    alert('Thank you for your interest! We will contact you soon.');

    // Close popup
    closeRegistrationPopup();

    // Reset form
    document.getElementById('enrollForm').reset();
}

// Close popup on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeRegistrationPopup();
    }
});

// Smooth scroll for anchor links
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

// ====================================
// MOBILE MENU FUNCTIONALITY
// ====================================

const mobileMenu = document.getElementById('mobileMenu');
const mobileToggleBtn = document.getElementById('mobileToggle');
const mobileCloseBtn = document.getElementById('mobileClose');
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

// Open mobile menu
if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close mobile menu
if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close menu when clicking outside
mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Mobile dropdown toggle
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const parentLi = this.closest('.mobile-has-dropdown');
        const isActive = parentLi.classList.contains('active');
        
        // Close all other dropdowns
        document.querySelectorAll('.mobile-has-dropdown').forEach(item => {
            if (item !== parentLi) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        if (isActive) {
            parentLi.classList.remove('active');
        } else {
            parentLi.classList.add('active');
        }
    });
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-dropdown-menu a, .mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Close all dropdowns
        document.querySelectorAll('.mobile-has-dropdown').forEach(item => {
            item.classList.remove('active');
        });
    });
});

// Close menu on window resize to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ====================================
// API INTEGRATION FOR ENROLLMENT
// ====================================

// Override handleEnrollSubmit with API integration
window.handleEnrollSubmit = function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        course: document.title.split(' - ')[0]
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
            alert(' ' + data.message);
            closeRegistrationPopup();
            document.getElementById('enrollForm').reset();
        } else {
            alert(' ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(' Failed to submit. Please try again or contact us directly.');
    })
    .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
};
