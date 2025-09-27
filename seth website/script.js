// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => {
            n.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

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

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and content sections
    document.querySelectorAll('.researcher-card, .content-card, .deliverable-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Ensure Contact Me button works correctly
    const contactBtn = document.getElementById('contactEmailBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            // Allow the default mailto behavior
            e.stopPropagation();
            window.location.href = 'mailto:sshaw33@vols.utk.edu';
        });
    }
});

// Contact form handling (if present)
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simple form validation
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Poster Modal Functions - Shomari
function openPosterModal() {
    console.log('Opening poster modal...'); // Debug log
    const modal = document.getElementById('posterModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Trigger animation after a brief delay
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        console.log('Modal opened successfully');
    } else {
        console.error('Modal element not found!');
    }
}

function closePosterModal() {
    console.log('Closing poster modal...'); // Debug log
    const modal = document.getElementById('posterModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300); // Wait for animation to complete
        console.log('Modal closed successfully');
    }
}

// Poster Modal Functions - Seth
function openSethPosterModal() {
    console.log('Opening Seth poster modal...'); // Debug log
    const modal = document.getElementById('sethPosterModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Trigger animation after a brief delay
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        console.log('Seth modal opened successfully');
    } else {
        console.error('Seth modal element not found!');
    }
}

function closeSethPosterModal() {
    console.log('Closing Seth poster modal...'); // Debug log
    const modal = document.getElementById('sethPosterModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300); // Wait for animation to complete
        console.log('Seth modal closed successfully');
    }
}

// Poster Modal Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up modals...'); // Debug log
    
    // Shomari's modal
    const shomariModal = document.getElementById('posterModal');
    const shomariPosterImage = document.querySelector('.poster-image');
    
    // Seth's modal
    const sethModal = document.getElementById('sethPosterModal');
    const sethPosterImage = document.querySelector('img[src="SPS SeCAB Male Sociality Poster Smaller.png"]');
    
    console.log('Shomari modal found:', !!shomariModal);
    console.log('Seth modal found:', !!sethModal);
    
    // Shomari modal setup
    if (shomariModal) {
        shomariModal.addEventListener('click', function(e) {
            if (e.target === shomariModal) {
                closePosterModal();
            }
        });
        
        const shomariModalContent = shomariModal.querySelector('.poster-modal-content');
        if (shomariModalContent) {
            shomariModalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
    
    // Seth modal setup
    if (sethModal) {
        sethModal.addEventListener('click', function(e) {
            if (e.target === sethModal) {
                closeSethPosterModal();
            }
        });
        
        const sethModalContent = sethModal.querySelector('.poster-modal-content');
        if (sethModalContent) {
            sethModalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (shomariModal && shomariModal.style.display === 'block') {
                closePosterModal();
            }
            if (sethModal && sethModal.style.display === 'block') {
                closeSethPosterModal();
            }
        }
    });
});




