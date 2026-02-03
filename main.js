// ==========================================
// ÉTREINTE - Main JavaScript
// Full Heavy Interactions & Animations
// ==========================================

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Initialize all features
    initLoadingScreen();
    initCustomCursor();
    initNavigation();
    initParticles();
    initCountdown();
    initScrollAnimations();
    initGSAPAnimations();
    initAOS();
    initDistanceCalculator();
    initProductInteractions();
    initFAQ();
    initOrderForm();
    initStockCounter();
    initScrollProgress();
}

// === LOADING SCREEN ===
function initLoadingScreen() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loadingScreen = document.querySelector('.loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                
                // Remove from DOM after transition
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }
        }, 1500); // Show loading for 1.5s
    });
}

// === CUSTOM CURSOR ===
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor
    function animateCursor() {
        // Cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.9;
        cursorY += (mouseY - cursorY) * 0.9;
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        
        // Follower lags behind
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .faq-question, .info-point');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(1.5)`;
            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(1.3)`;
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(1)`;
            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(1)`;
        });
    });
}

// === NAVIGATION ===
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === PARTICLES.JS ===
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 2,
                        opacity: 0.5
                    }
                }
            },
            retina_detect: true
        });
    }
}

// === COUNTDOWN ===
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const daysTextEl = document.getElementById('days-text');
    const stockPercentageEl = document.getElementById('stock-percentage');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    const valentineDay = new Date('2026-02-14T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = valentineDay - now;
        
        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            if (daysTextEl) daysTextEl.textContent = '0 jour';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
        
        if (daysTextEl) {
            daysTextEl.textContent = `${days} jour${days > 1 ? 's' : ''}`;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    // Parallax effect for hero teddy
    const heroTeddy = document.querySelector('.hero-teddy');
    if (heroTeddy) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroTeddy.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
    
    // Reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.timeline-item, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// === GSAP ANIMATIONS ===
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero title animation
    gsap.from('.hero-title .text-reveal', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });
    
    // Distance indicator animation
    gsap.from('.distance-indicator', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });
    
    // Product showcase
    gsap.from('.product-showcase .product-3d', {
        scrollTrigger: {
            trigger: '.product-showcase',
            start: 'top center'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.from('.product-showcase .product-info', {
        scrollTrigger: {
            trigger: '.product-showcase',
            start: 'top center'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    // Timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%'
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // Stock bar animation
    gsap.to('.stock-fill', {
        scrollTrigger: {
            trigger: '.stock-bar',
            start: 'top center'
        },
        width: '27%',
        duration: 2,
        ease: 'power2.inOut'
    });
}

// === AOS (Animate On Scroll) ===
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

// === DISTANCE CALCULATOR ===
function initDistanceCalculator() {
    const distanceValue = document.getElementById('dynamic-distance');
    if (!distanceValue) return;
    
    // Simulated cities for demo
    const cities = [
        { name: 'Abidjan', pair: 'Accra', distance: 547 },
        { name: 'Dakar', pair: 'Paris', distance: 4184 },
        { name: 'Lomé', pair: 'Cotonou', distance: 155 },
        { name: 'Abidjan', pair: 'Ouagadougou', distance: 1122 },
        { name: 'Accra', pair: 'Lomé', distance: 195 }
    ];
    
    // Rotate through different city pairs
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cities.length;
        const city = cities[currentIndex];
        
        // Update distance
        distanceValue.textContent = `${city.distance} km`;
        
        // Update city names
        const cityPoints = document.querySelectorAll('.city-point');
        if (cityPoints.length >= 2) {
            cityPoints[0].textContent = city.name;
            cityPoints[1].textContent = city.pair;
        }
        
        // Animate change
        gsap.from(distanceValue, {
            scale: 1.3,
            duration: 0.5,
            ease: 'back.out(2)'
        });
    }, 5000);
}

// === PRODUCT INTERACTIONS ===
function initProductInteractions() {
    // Info points hover effect
    const infoPoints = document.querySelectorAll('.info-point');
    infoPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            this.querySelector('.point-dot').style.transform = 'scale(1.2)';
        });
        
        point.addEventListener('mouseleave', function() {
            this.querySelector('.point-dot').style.transform = 'scale(1)';
        });
    });
    
    // Teddy bear rotation on scroll
    const teddyMain = document.querySelector('.teddy-main');
    if (teddyMain && teddyMain.classList.contains('rotating')) {
        let rotation = 0;
        window.addEventListener('scroll', () => {
            rotation += 0.5;
            teddyMain.style.transform = `rotateY(${rotation}deg)`;
        });
    }
}

// === FAQ ACCORDION ===
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// === ORDER FORM ===
function initOrderForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!validateForm(data)) {
            return;
        }
        
        // Simulate order submission
        submitOrder(data);
    });
}

function validateForm(data) {
    // Basic validation
    if (!data.name || !data.phone || !data.email || !data.city || !data.address || !data.payment) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^\+?[0-9\s-]{8,}$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return false;
    }
    
    return true;
}

function submitOrder(data) {
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Traitement en cours...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        document.getElementById('orderForm').reset();
        
        // Log to console (in production, this would be sent to a server)
        console.log('Order submitted:', data);
    }, 2000);
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        
        // Auto-close after 5 seconds
        setTimeout(() => {
            closeModal();
        }, 5000);
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Make closeModal global for onclick
window.closeModal = closeModal;

// === STOCK COUNTER ===
function initStockCounter() {
    const stockCountEl = document.getElementById('stock-count');
    const stockPercentageEl = document.getElementById('stock-percentage');
    const stockFill = document.querySelector('.stock-fill');
    
    if (!stockCountEl || !stockPercentageEl || !stockFill) return;
    
    let currentStock = 54;
    const updateInterval = 30000; // Update every 30 seconds
    
    function updateStock() {
        // Randomly decrease stock (simulation)
        if (currentStock > 10 && Math.random() > 0.5) {
            currentStock -= Math.floor(Math.random() * 3) + 1;
            
            // Calculate percentage (out of 200 initial stock)
            const percentage = Math.round((currentStock / 200) * 100);
            
            // Update UI
            stockCountEl.textContent = currentStock;
            stockPercentageEl.textContent = `${percentage}%`;
            stockFill.style.width = `${percentage}%`;
            
            // Animate update
            gsap.from(stockCountEl, {
                scale: 1.5,
                color: '#EF4444',
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    }
    
    // Update stock periodically
    setInterval(updateStock, updateInterval);
}

// === SCROLL PROGRESS INDICATOR ===
function initScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #B91C1C, #DC2626);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // Update on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// === UTILITY FUNCTIONS ===

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}

// Get user timezone
function getUserTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Detect user city (would require geolocation API in production)
function detectUserCity() {
    // Placeholder - would use geolocation API
    return {
        name: 'Abidjan',
        country: 'Côte d\'Ivoire'
    };
}

// === PERFORMANCE OPTIMIZATIONS ===

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize resize handler
window.addEventListener('resize', debounce(() => {
    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // Refresh ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
}, 250));

// === ANALYTICS (Placeholder) ===
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // In production, send to analytics service
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            button: btn.textContent,
            section: btn.closest('section')?.id || 'unknown'
        });
    });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > maxScroll) {
        maxScroll = Math.floor(scrollPercentage);
        if (maxScroll % 25 === 0) { // Track every 25%
            trackEvent('scroll_depth', { percentage: maxScroll });
        }
    }
}, 500));

// === CONSOLE MESSAGE ===
console.log('%c🌹 ÉTREINTE - La peluche anti-distance', 'color: #B91C1C; font-size: 20px; font-weight: bold;');
console.log('%cConçu avec ❤️ pour le Challenge Saint-Valentin 2026', 'color: #6B7280; font-size: 12px;');
console.log('%cSi vous lisez ceci, vous êtes curieux... J\'aime ça ! 😊', 'color: #10B981; font-size: 12px;');
