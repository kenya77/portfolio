// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready!');
    
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Change menu icon between hamburger and close
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('bx-menu')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu when clicking a link
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Theme toggle functionality
    const themeSelector = document.getElementById('color');
    if (themeSelector) {
        themeSelector.addEventListener('change', function() {
            if (this.value === 'white') {
                // Light theme
                document.body.style.background = 'linear-gradient(#f5f5f5, #e0e0e0)';
                document.body.style.color = '#333 !important';
                document.querySelectorAll('.text').forEach(el => {
                    el.style.color = '#333';
                });
                document.querySelectorAll('h2, h3').forEach(el => {
                    el.style.color = '#007BFF';
                });
            } else {
                // Dark theme (default)
                document.body.style.background = 'linear-gradient(#1f2937, #000000)';
                document.body.style.color = '#fff !important';
                document.querySelectorAll('.text').forEach(el => {
                    el.style.color = '#fff';
                });
            }
        });
    }
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.width = bar.getAttribute('style').split('width:')[1];
            } else {
                bar.style.width = '99%';
            }
        });
    };
    
    // Initial check for elements in viewport
    animateProgressBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
    
    // Form submission handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a backend service
            alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
            contactForm.reset();
        });
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 20px';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.padding = '15px 20px';
        header.style.boxShadow = 'none';
    }
});