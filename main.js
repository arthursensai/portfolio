document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();
    
    // Dark mode functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.className = savedTheme + '-mode';
        updateThemeIcon(savedTheme);

        // Toggle theme
        themeToggle.addEventListener('click', function() {
            const isDark = document.body.classList.contains('dark-mode');
            const newTheme = isDark ? 'light' : 'dark';
            
            // Update body class
            document.body.className = newTheme + '-mode';
            
            // Save preference
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' 
                ? '<i data-feather="sun"></i>' 
                : '<i data-feather="moon"></i>';
            feather.replace();
        }
    }

    // Add animation delay to skill tags
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.style.setProperty('--animation-order', index);
    });

    // Scroll to top functionality
    const scrollTopButton = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Contact Form Functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Add loading state
            submitButton.classList.add('loading');
            
            // Get form data
            const formData = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value
            };

            // Send email using EmailJS
            emailjs.send(
                'YOUR_SERVICE_ID', // Email JS service ID
                'YOUR_TEMPLATE_ID', // Email JS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Mohamed', // Your name
                }
            ).then(
                function(response) {
                    // Success
                    showNotification('Message sent successfully!', 'success');
                    contactForm.reset();
                },
                function(error) {
                    // Error
                    showNotification('Failed to send message. Please try again.', 'error');
                }
            ).finally(() => {
                // Remove loading state
                submitButton.classList.remove('loading');
            });
        });
    }

    // Notification system
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i data-feather="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
                <p>${message}</p>
            </div>
        `;

        // Add to document
        document.body.appendChild(notification);

        // Initialize Feather icon
        feather.replace();

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
