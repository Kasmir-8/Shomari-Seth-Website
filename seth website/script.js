function setModalState(modalId, isOpen) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    if (isOpen) {
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
        document.body.style.overflow = 'hidden';
        return;
    }

    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        if (!document.querySelector('.poster-modal.show')) {
            document.body.style.overflow = '';
        }
    }, 220);
}

function openPosterModal() {
    setModalState('posterModal', true);
}

function closePosterModal() {
    setModalState('posterModal', false);
}

function openSethPosterModal() {
    setModalState('sethPosterModal', true);
}

function closeSethPosterModal() {
    setModalState('sethPosterModal', false);
}

window.openPosterModal = openPosterModal;
window.closePosterModal = closePosterModal;
window.openSethPosterModal = openSethPosterModal;
window.closeSethPosterModal = closeSethPosterModal;

function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

window.handleContactForm = handleContactForm;

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        };

        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const heroContent = document.querySelector('.hero-content');
    if (heroContent && window.matchMedia('(pointer: fine)').matches) {
        const resetHero = () => {
            heroContent.style.setProperty('--hero-x', '0px');
            heroContent.style.setProperty('--hero-y', '0px');
        };

        heroContent.addEventListener('pointermove', (event) => {
            const rect = heroContent.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            heroContent.style.setProperty('--hero-x', `${x * 10}px`);
            heroContent.style.setProperty('--hero-y', `${y * 7}px`);
        });

        heroContent.addEventListener('pointerleave', resetHero);
    }

    const revealTargets = document.querySelectorAll('.researcher-card, .content-card, .media-item');
    if (revealTargets.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealTargets.forEach((target) => {
            if (!target.classList.contains('researcher-card')) {
                target.style.opacity = '0';
                target.style.transform = 'translateY(16px)';
                target.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            }
            observer.observe(target);
        });
    }

    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('pointerdown', (event) => {
            const rect = button.getBoundingClientRect();
            button.style.setProperty('--ripple-x', `${event.clientX - rect.left}px`);
            button.style.setProperty('--ripple-y', `${event.clientY - rect.top}px`);
        });
    });

    const navigateWithSeamlessTransition = (href, options = {}) => {
        const { addCardLaunch = false, buttonElement = null } = options;
        if (!href) {
            return;
        }

        let destinationPath = '';
        try {
            destinationPath = new URL(href, window.location.href).pathname.toLowerCase();
        } catch (_) {
            destinationPath = String(href).toLowerCase();
        }

        const goesToProfile = destinationPath.endsWith('/shomari.html') || destinationPath.endsWith('/seth.html') || destinationPath.endsWith('shomari.html') || destinationPath.endsWith('seth.html');
        const goesToHome = destinationPath.endsWith('/index.html') || destinationPath.endsWith('index.html') || destinationPath === '/' || destinationPath === '';

        if (addCardLaunch && buttonElement) {
            buttonElement.classList.add('is-launching');
            const parentCard = buttonElement.closest('.researcher-card');
            if (parentCard) {
                parentCard.classList.add('is-launching');
            }
        }

        if (document.body.classList.contains('home-page')) {
            let transitionWash = document.querySelector('.page-transition-wash');
            if (!transitionWash) {
                transitionWash = document.createElement('div');
                transitionWash.className = 'page-transition-wash';
                document.body.appendChild(transitionWash);
            }

            requestAnimationFrame(() => {
                transitionWash.classList.add('is-visible');
                document.body.classList.add('is-page-leaving');
            });
        }

        if (document.body.classList.contains('profile-page')) {
            requestAnimationFrame(() => {
                document.body.classList.add('is-page-leaving');
            });
        }

        try {
            if (goesToProfile) {
                sessionStorage.setItem('profileEntryFromNav', '1');
            }
            if (goesToHome) {
                sessionStorage.setItem('homeEntryFromNav', '1');
            }
        } catch (_) {
            // no-op: storage may be blocked in some contexts
        }

        setTimeout(() => {
            window.location.href = href;
        }, 430);
    };

    const homeProfileButtons = document.querySelectorAll('.home-page .researcher-card a.btn[href]');
    homeProfileButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const href = button.getAttribute('href');
            const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

            if (!href || isModifiedClick || button.classList.contains('is-launching')) {
                return;
            }

            event.preventDefault();
            navigateWithSeamlessTransition(href, {
                addCardLaunch: true,
                buttonElement: button
            });
        });
    });

    const floatingNavLinks = document.querySelectorAll('.home-page .header .nav-link[href], .profile-page .profile-float-nav .nav-link[href]');
    floatingNavLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
            const isCurrentPageLink = link.classList.contains('active');

            if (!href || isModifiedClick || isCurrentPageLink) {
                return;
            }

            event.preventDefault();
            navigateWithSeamlessTransition(href);
        });
    });

    const isProfilePage = document.body.classList.contains('shomari-profile') || document.body.classList.contains('seth-profile');
    if (isProfilePage) {
        const shouldAnimateProfileEntry = Boolean(window.__profileEntryFromNav);

        if (shouldAnimateProfileEntry) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document.body.classList.add('profile-entry-play');
                });
            });

            setTimeout(() => {
                document.body.classList.remove('profile-entry-prep');
                document.body.classList.remove('profile-entry-play');
            }, 760);
        }
    }

    if (document.body.classList.contains('home-page') && Boolean(window.__homeEntryFromNav)) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.body.classList.add('home-entry-play');
            });
        });

        setTimeout(() => {
            document.body.classList.remove('home-entry-prep');
            document.body.classList.remove('home-entry-play');
        }, 700);
    }

    const interactiveCards = document.querySelectorAll('.researcher-card');
    interactiveCards.forEach((card) => {
        card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;

            const rotateY = (x - 0.5) * 8;
            const rotateX = (0.5 - y) * 8;
            card.style.setProperty('--ry', `${rotateY}deg`);
            card.style.setProperty('--rx', `${rotateX}deg`);
        });

        card.addEventListener('pointerleave', () => {
            card.style.setProperty('--ry', '0deg');
            card.style.setProperty('--rx', '0deg');
        });
    });

    const allModals = document.querySelectorAll('.poster-modal');
    allModals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                if (modal.id === 'posterModal') {
                    closePosterModal();
                }
                if (modal.id === 'sethPosterModal') {
                    closeSethPosterModal();
                }
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }

        closePosterModal();
        closeSethPosterModal();
    });
});
