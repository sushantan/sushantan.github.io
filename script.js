// Opening Animation Controller
document.addEventListener('DOMContentLoaded', function() {
    const openingOverlay = document.getElementById('opening-overlay');
    const mainContent = document.getElementById('main-content');
    const heroTitle = document.querySelector('.hero-title');
    const openingName = document.querySelector('.opening-name');
    
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';
    
    // Position the hero title to match the opening name position initially
    if (heroTitle && openingName) {
        heroTitle.style.position = 'fixed';
        heroTitle.style.top = '50%';
        heroTitle.style.left = '50%';
        heroTitle.style.transform = 'translate(-50%, -50%)';
        heroTitle.style.zIndex = '10002';
        heroTitle.style.opacity = '0';
    }
    
    // Start the opening animation sequence
    setTimeout(() => {
        // Show the hero title in the same position as opening name
        if (heroTitle) {
            heroTitle.style.opacity = '1';
        }
        
        // Begin fade out of opening overlay
        openingOverlay.classList.add('fade-out');
        
        // Show main content with animation
        setTimeout(() => {
            mainContent.classList.add('show');
            
            // Move hero title to its final position
            if (heroTitle) {
                heroTitle.style.position = 'static';
                heroTitle.style.top = 'auto';
                heroTitle.style.left = 'auto';
                heroTitle.style.transform = 'none';
                heroTitle.style.zIndex = 'auto';
            }
            
            document.body.style.overflow = 'auto';
            
            // Remove overlay from DOM after animation completes
            setTimeout(() => {
                openingOverlay.remove();
            }, 1200);
        }, 400);
    }, 1700); // Total animation duration: 1.7 seconds
});

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Initialize icon
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Add click event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const sectionId = href.substring(1); // Remove the '#' character
        scrollToSection(sectionId);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[class*="animate-"], .achievement-card, .music-grades, .youtube-section, .education-item, .academic-focus, .contact-info, .contact-form-container').forEach(el => {
    observer.observe(el);
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add smooth reveal animations on scroll
const revealElements = document.querySelectorAll('.achievement-card, .music-grades, .youtube-section, .education-item, .academic-focus, .contact-info, .contact-form-container');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment the line below if you want a typing effect on the hero title
// typeWriter(document.querySelector('.hero-title'), 'Sushantan', 150);

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add click effect to buttons
document.querySelectorAll('button, .hero-btn, .youtube-btn, .social-link, .theme-toggle').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');

formInputs.forEach(input => {
    // Add real-time validation feedback
    input.addEventListener('blur', function() {
        validateField(this);
    });
    
    input.addEventListener('input', function() {
        // Clear validation state on input
        this.classList.remove('invalid');
        const errorMsg = this.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Apply validation styling
    if (!isValid) {
        field.classList.add('invalid');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = errorMessage;
        field.parentNode.appendChild(errorDiv);
    } else {
        field.classList.remove('invalid');
    }
    
    return isValid;
}

// Add styles for form validation
const validationStyles = `
    .form-input.invalid,
    .form-select.invalid,
    .form-textarea.invalid {
        border-color: var(--error-color);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .field-error {
        color: var(--error-color);
        font-size: 12px;
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    
    .field-error::before {
        content: "⚠";
        font-size: 10px;
    }
`;

// Inject validation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = validationStyles;
document.head.appendChild(styleSheet);

// Add smooth scrolling behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Performance optimization: Lazy load animations
const lazyAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            lazyAnimationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Observe elements for lazy animation loading
document.querySelectorAll('.achievement-card, .focus-item, .grade-item').forEach(el => {
    lazyAnimationObserver.observe(el);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Enhance accessibility
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Auto-resize textarea
const textarea = document.querySelector('.form-textarea');
if (textarea) {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.max(120, this.scrollHeight) + 'px';
    });
}

// Add character counter for textarea
if (textarea) {
    const maxLength = 1000;
    textarea.setAttribute('maxlength', maxLength);
    
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
        font-size: 12px;
        color: var(--text-quaternary);
        text-align: right;
        margin-top: 4px;
    `;
    
    function updateCounter() {
        const remaining = maxLength - textarea.value.length;
        counter.textContent = `${remaining} characters remaining`;
        
        if (remaining < 50) {
            counter.style.color = 'var(--warning-color)';
        } else if (remaining < 10) {
            counter.style.color = 'var(--error-color)';
        } else {
            counter.style.color = 'var(--text-quaternary)';
        }
    }
    
    textarea.addEventListener('input', updateCounter);
    textarea.parentNode.appendChild(counter);
    updateCounter();
}