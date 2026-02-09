/* ============================================
   SCRIPT.JS - VERSION OPTIMISÉE
   Images hébergées sur imgbb.com (CDN rapide)
   Taille: 40KB au lieu de 5.4MB !
   ============================================ */

/* ============================================
   1. IMAGES (URLs imgbb.com)
   ============================================ */
const IMAGES = {
    heart: 'https://i.ibb.co/XhfLRL0/unnamed-7.jpg',
    giftBox: 'https://i.ibb.co/svLryzFQ/Gemini-Generated-Image-csm486csm486csm4.png',
    hero: 'https://i.ibb.co/J0gcnZN/unnamed-6.jpg',
    studio: 'https://i.ibb.co/8ZX2jL7/Clipfly-20260205013711-jpg.png',
    comfort: 'https://i.ibb.co/Lzh9w10n/unnamed-11.jpg',
    sleep: 'https://i.ibb.co/6JpT6k6v/unnamed-12.jpg',
    perfume: 'https://i.ibb.co/HfJ7b8CK/unnamed-13.jpg',
    travel: 'https://i.ibb.co/wNn8sYSm/unnamed-10.jpg',
    bed: 'https://i.ibb.co/Y4F2mfrc/unnamed-8.jpg',
    teddyWhite: 'https://i.ibb.co/RpDqCqVS/750204c813b23df226d5ee418aa3de4f48408f6f.png'
};

/* ============================================
   2. CONFIGURATION GLOBALE
   ============================================ */
const CONFIG = {
    countdownTarget: new Date('2026-02-14T23:59:59'),
    initialStock: 85,
    currentStock: 23,
    soldCount: 62,
    loadingDuration: 3000
};

/* ============================================
   3. INJECTION DES IMAGES
   ============================================ */
function injectImages() {
    const imageMapping = {
        'imgHeart': IMAGES.heart,
        'imgGiftBox': IMAGES.giftBox,
        'imgHero': IMAGES.hero,
        'imgStudio': IMAGES.studio,
        'imgComfort': IMAGES.comfort,
        'imgSleep': IMAGES.sleep,
        'imgPerfume': IMAGES.perfume,
        'imgTravel': IMAGES.travel,
        'imgBed': IMAGES.bed,
        'imgTeddyWhite': IMAGES.teddyWhite
    };

    Object.entries(imageMapping).forEach(([id, src]) => {
        const img = document.getElementById(id);
        if (img) {
            img.src = src;
            img.onerror = () => {
                console.warn(`Image ${id} failed to load`);
            };
        }
    });
}

/* ============================================
   4. LOADING SCREEN
   ============================================ */
class LoadingScreen {
    constructor() {
        this.screen = document.getElementById('loadingScreen');
        this.progress = document.getElementById('loadingProgress');
        this.percent = document.getElementById('loadingPercent');
        this.currentProgress = 0;
    }

    start() {
        this.simulate();
    }

    simulate() {
        const interval = setInterval(() => {
            this.currentProgress += Math.random() * 15;
            if (this.currentProgress >= 100) {
                this.currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => this.hide(), 500);
            }
            this.update();
        }, 200);
    }

    update() {
        if (this.progress) {
            this.progress.style.width = this.currentProgress + '%';
        }
        if (this.percent) {
            this.percent.textContent = Math.floor(this.currentProgress) + '%';
        }
    }

    hide() {
        if (this.screen) {
            this.screen.classList.add('hide');
            setTimeout(() => {
                this.screen.style.display = 'none';
                const quizSection = document.getElementById('quizSection');
                if (quizSection) {
                    quizSection.classList.remove('hidden');
                }
            }, 500);
        }
    }
}

/* ============================================
   5. CUSTOM CURSOR
   ============================================ */
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('customCursor');
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
    }

    init() {
        if (!this.cursor) return;

        document.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX;
            this.targetY = e.clientY;
        });

        document.addEventListener('mousedown', () => {
            if (this.cursor) {
                this.cursor.classList.add('clicking');
            }
        });

        document.addEventListener('mouseup', () => {
            if (this.cursor) {
                this.cursor.classList.remove('clicking');
            }
        });

        this.animate();
    }

    animate() {
        this.x += (this.targetX - this.x) * 0.15;
        this.y += (this.targetY - this.y) * 0.15;

        if (this.cursor) {
            this.cursor.style.left = this.x + 'px';
            this.cursor.style.top = this.y + 'px';
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   6. SCROLL PROGRESS
   ============================================ */
class ScrollProgress {
    constructor() {
        this.bar = document.getElementById('scrollProgress');
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        if (!this.bar) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        this.bar.style.width = progress + '%';
    }
}

/* ============================================
   7. PARTICLE RAIN
   ============================================ */
class ParticleRain {
    constructor() {
        this.canvas = document.getElementById('particlesCanvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 30;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        const symbols = ['❤', '💗', '💕', '🌹'];
        return {
            x: Math.random() * this.canvas.width,
            y: -50,
            speed: Math.random() * 2 + 1,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            size: Math.random() * 20 + 15,
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.1
        };
    }

    init() {
        if (!this.canvas) return;

        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    animate() {
        if (!this.canvas || !this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, index) => {
            p.y += p.speed;
            p.rotation += p.rotationSpeed;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.font = `${p.size}px Arial`;
            this.ctx.fillText(p.symbol, 0, 0);
            this.ctx.restore();

            if (p.y > this.canvas.height) {
                this.particles[index] = this.createParticle();
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   8. BALLOONS
   ============================================ */
class Balloons {
    constructor() {
        this.balloons = document.querySelectorAll('.balloon');
    }

    init() {
        this.balloons.forEach(balloon => {
            balloon.addEventListener('click', () => {
                balloon.classList.add('pop');
                setTimeout(() => {
                    balloon.classList.remove('pop');
                }, 300);
            });
        });
    }
}

/* ============================================
   9. QUIZ MANAGER
   ============================================ */
class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        this.refusalCount = 0;
        this.questions = [
            {
                title: "Question 1",
                text: "Combien veux-tu dépenser pour la Saint-Valentin ?",
                options: [
                    { letter: "A", text: "Moins de 5.000 FCFA", correct: false },
                    { letter: "B", text: "5.000 - 10.000 FCFA", correct: true },
                    { letter: "C", text: "Plus de 10.000 FCFA", correct: false }
                ]
            },
            {
                title: "Question 2",
                text: "Tu veux un cadeau qui dure combien de temps ?",
                options: [
                    { letter: "A", text: "3 jours (fleurs)", correct: false },
                    { letter: "B", text: "1 soirée (restaurant)", correct: false },
                    { letter: "C", text: "TOUTE SA VIE", correct: true }
                ]
            },
            {
                title: "Question 3",
                text: "Tu veux un cadeau qu'elle utilise comment ?",
                options: [
                    { letter: "A", text: "Jamais (bijoux dans tiroir)", correct: false },
                    { letter: "B", text: "2-3 fois par an", correct: false },
                    { letter: "C", text: "TOUS LES JOURS", correct: true }
                ]
            },
            {
                title: "Question 4",
                text: "Tu veux qu'elle ressente quoi ?",
                options: [
                    { letter: "A", text: "Moment éphémère", correct: false },
                    { letter: "B", text: "Réconfort quotidien", correct: true },
                    { letter: "C", text: "Impression sociale", correct: false }
                ]
            },
            {
                title: "Question 5",
                text: "Tu veux un cadeau qui ?",
                options: [
                    { letter: "A", text: "Disparaît après quelques jours", correct: false },
                    { letter: "B", text: "Reste TOUTE SA VIE", correct: true },
                    { letter: "C", text: "Prend la poussière", correct: false }
                ]
            }
        ];

        this.elements = {
            card: document.getElementById('quizCard'),
            result: document.getElementById('quizResult'),
            title: document.getElementById('questionTitle'),
            text: document.getElementById('questionText'),
            options: document.getElementById('quizOptions'),
            progressBar: document.getElementById('quizProgressBar'),
            currentQ: document.getElementById('currentQ'),
            totalQ: document.getElementById('totalQ'),
            popup: document.getElementById('quizPopup'),
            popupTitle: document.getElementById('popupTitle'),
            popupBody: document.getElementById('popupBody'),
            btnPopupOk: document.getElementById('btnPopupOk'),
            btnPopupRefuse: document.getElementById('btnPopupRefuse'),
            popupOverlay: document.getElementById('popupOverlay'),
            popupClose: document.getElementById('popupClose'),
            btnStartUnwrap: document.getElementById('btnStartUnwrap')
        };
    }

    init() {
        if (!this.elements.card) return;

        if (this.elements.totalQ) {
            this.elements.totalQ.textContent = this.questions.length;
        }

        this.showQuestion(0);
        this.setupPopupEvents();

        if (this.elements.btnStartUnwrap) {
            this.elements.btnStartUnwrap.addEventListener('click', () => {
                this.transitionToUnwrap();
            });
        }
    }

    showQuestion(index) {
        const question = this.questions[index];
        if (!question) return;

        const progress = ((index + 1) / this.questions.length) * 100;
        if (this.elements.progressBar) {
            this.elements.progressBar.style.width = progress + '%';
        }
        if (this.elements.currentQ) {
            this.elements.currentQ.textContent = index + 1;
        }

        if (this.elements.title) {
            this.elements.title.textContent = question.title;
        }
        if (this.elements.text) {
            this.elements.text.textContent = question.text;
        }

        if (this.elements.options) {
            this.elements.options.innerHTML = '';
            question.options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option';
                if (option.correct) btn.classList.add('correct');
                btn.dataset.answer = option.letter;
                
                btn.innerHTML = `
                    <span class="option-letter">${option.letter}</span>
                    <span class="option-text">${option.text}</span>
                    ${option.correct ? '<i class="fas fa-check option-check"></i>' : ''}
                `;

                btn.addEventListener('click', () => {
                    this.handleAnswer(option.correct);
                });

                this.elements.options.appendChild(btn);
            });
        }
    }

    handleAnswer(isCorrect) {
        if (isCorrect) {
            this.nextQuestion();
        } else {
            this.showComparisonPopup();
        }
    }

    showComparisonPopup() {
        const popups = [
            {
                title: "⚠️ ATTENTION !",
                body: `
                    <div style="text-align: center; margin: 2rem 0;">
                        <div style="background: rgba(255,0,0,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
                            <p style="font-size: 1.25rem; font-weight: 700; color: #DC143C;">Restaurant : 40.000 FCFA</p>
                            <p>÷ 1 soirée = <strong>GASPILLAGE</strong></p>
                        </div>
                        <p style="font-size: 1.5rem; font-weight: 900; margin: 1.5rem 0;">VS</p>
                        <div style="background: rgba(255,215,0,0.2); padding: 1.5rem; border-radius: 10px;">
                            <p style="font-size: 1.25rem; font-weight: 700; color: #FFD700;">Peluche : 7.000 FCFA</p>
                            <p>÷ 1.825 jours = <strong>3,8 FCFA/jour</strong></p>
                        </div>
                        <p style="font-size: 1.35rem; font-weight: 700; color: #FFD700; margin-top: 1.5rem;">
                            🎯 Économise 33.000 FCFA !
                        </p>
                    </div>
                `
            },
            {
                title: "😳 VRAIMENT 3 JOURS ???",
                body: `
                    <div style="text-align: center; margin: 2rem 0;">
                        <div style="background: rgba(255,0,0,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
                            <p><strong>Timeline :</strong></p>
                            <p>Jour 1 : Elle sourit 😊</p>
                            <p>Jour 2 : Ça fane 🥀</p>
                            <p>Jour 3 : Poubelle 🗑️ + Larmes 😢</p>
                        </div>
                        <p style="font-size: 1.5rem; font-weight: 900; margin: 1.5rem 0;">VS</p>
                        <div style="background: rgba(255,215,0,0.2); padding: 1.5rem; border-radius: 10px;">
                            <p style="font-size: 1.5rem;">♾️ <strong>PELUCHE ÉTERNELLE</strong></p>
                            <p>94,7% la gardent plus d'1 an</p>
                        </div>
                    </div>
                `
            }
        ];

        const popup = popups[Math.floor(Math.random() * popups.length)];

        if (this.elements.popupTitle) {
            this.elements.popupTitle.innerHTML = popup.title;
        }
        if (this.elements.popupBody) {
            this.elements.popupBody.innerHTML = popup.body;
        }
        if (this.elements.popup) {
            this.elements.popup.classList.remove('hidden');
        }
    }

    setupPopupEvents() {
        if (this.elements.btnPopupOk) {
            this.elements.btnPopupOk.addEventListener('click', () => {
                this.closePopup();
                this.nextQuestion();
            });
        }

        if (this.elements.btnPopupRefuse) {
            this.elements.btnPopupRefuse.addEventListener('click', () => {
                this.refusalCount++;
                if (this.refusalCount >= 2) {
                    this.elements.btnPopupRefuse.classList.add('shrink');
                }
                if (this.refusalCount >= 3) {
                    this.closePopup();
                    this.nextQuestion();
                }
            });
        }

        if (this.elements.popupClose) {
            this.elements.popupClose.addEventListener('click', () => {
                this.closePopup();
            });
        }

        if (this.elements.popupOverlay) {
            this.elements.popupOverlay.addEventListener('click', () => {
                this.closePopup();
            });
        }
    }

    closePopup() {
        if (this.elements.popup) {
            this.elements.popup.classList.add('hidden');
        }
        this.refusalCount = 0;
        if (this.elements.btnPopupRefuse) {
            this.elements.btnPopupRefuse.classList.remove('shrink');
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion >= this.questions.length) {
            this.showResult();
        } else {
            this.showQuestion(this.currentQuestion);
        }
    }

    showResult() {
        if (this.elements.card) {
            this.elements.card.classList.add('hidden');
        }
        if (this.elements.result) {
            this.elements.result.classList.remove('hidden');
        }
    }

    transitionToUnwrap() {
        const quizSection = document.getElementById('quizSection');
        const unwrapSection = document.getElementById('giftUnwrap');

        if (quizSection) {
            quizSection.classList.add('hidden');
        }
        if (unwrapSection) {
            unwrapSection.classList.remove('hidden');
        }
    }
}

/* LE RESTE DU CODE CONTINUE... */

        const particles = [];
        const colors = ['#FF0000', '#FF1493', '#FF69B4', '#FFD700'];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: Math.random() * -20 - 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 5,
                gravity: 0.3
            });
        }

        function animateConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.y > canvas.height) {
                    particles.splice(index, 1);
                }
            });

            if (particles.length > 0) {
                requestAnimationFrame(animateConfetti);
            } else {
                canvas.classList.remove('active');
            }
        }

        animateConfetti();
    }

    showTransition() {
        const message = document.getElementById('transitionMessage');
        if (message) {
            message.classList.remove('hidden');
            message.classList.add('show');

            setTimeout(() => {
                this.goToHero();
            }, 4000);
        }
    }

    goToHero() {
        const unwrapSection = document.getElementById('giftUnwrap');
        const heroSection = document.getElementById('hero');

        if (unwrapSection) {
            unwrapSection.classList.add('hidden');
        }

        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

/* ============================================
   11. TEDDY 3D (Three.js)
   ============================================ */
class Teddy3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container || typeof THREE === 'undefined') return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.teddy = null;
        this.isDragging = false;
        this.previousMousePosition = { x: 0, y: 0 };
    }

    init() {
        if (!this.container) return;

        // Setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        const size = this.container.offsetWidth || 400;
        this.renderer.setSize(size, size);
        this.container.appendChild(this.renderer.domElement);
        
        this.camera.position.z = 5;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        // Create teddy
        this.createTeddy();

        // Controls
        this.setupControls();

        // Animate
        this.animate();
    }

    createTeddy() {
        const group = new THREE.Group();
        const material = new THREE.MeshPhongMaterial({ color: 0xFFD7A8 });

        // Body
        const bodyGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const body = new THREE.Mesh(bodyGeometry, material);
        group.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(1, 32, 32);
        const head = new THREE.Mesh(headGeometry, material);
        head.position.y = 2;
        group.add(head);

        // Heart "Be Mine"
        const heartMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
        const heartGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const heart = new THREE.Mesh(heartGeometry, heartMaterial);
        heart.position.z = 1.6;
        group.add(heart);

        this.teddy = group;
        this.scene.add(group);
    }

    setupControls() {
        // Mouse
        this.container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        this.container.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        this.container.addEventListener('mousemove', (e) => {
            if (this.isDragging && this.teddy) {
                const deltaX = e.clientX - this.previousMousePosition.x;
                const deltaY = e.clientY - this.previousMousePosition.y;

                this.teddy.rotation.y += deltaX * 0.01;
                this.teddy.rotation.x += deltaY * 0.01;

                this.previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        // Touch
        this.container.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            this.previousMousePosition = { 
                x: e.touches[0].clientX, 
                y: e.touches[0].clientY 
            };
        });

        this.container.addEventListener('touchend', () => {
            this.isDragging = false;
        });

        this.container.addEventListener('touchmove', (e) => {
            if (this.isDragging && this.teddy) {
                const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
                const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

                this.teddy.rotation.y += deltaX * 0.01;
                this.teddy.rotation.x += deltaY * 0.01;

                this.previousMousePosition = { 
                    x: e.touches[0].clientX, 
                    y: e.touches[0].clientY 
                };
            }
        });
    }

    animate() {
        if (!this.renderer || !this.scene || !this.camera) return;

        requestAnimationFrame(() => this.animate());

        // Auto-rotation si pas de drag
        if (!this.isDragging && this.teddy) {
            this.teddy.rotation.y += 0.005;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

/* ============================================
   12. COUNTDOWN
   ============================================ */
class Countdown {
    constructor() {
        this.targetDate = CONFIG.countdownTarget;
        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };
    }

    init() {
        if (!this.elements.days) return;
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date();
        const distance = this.targetDate - now;

        if (distance < 0) {
            Object.values(this.elements).forEach(el => {
                if (el) el.textContent = '00';
            });
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (this.elements.days) this.elements.days.textContent = String(days).padStart(2, '0');
        if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
        if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
        if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');
    }
}

/* ============================================
   13. STOCK MANAGER
   ============================================ */
class StockManager {
    constructor() {
        this.currentStock = CONFIG.currentStock;
        this.initialStock = CONFIG.initialStock;
        this.stockNumber = document.getElementById('stockNumber');
        this.stockBar = document.getElementById('stockBar');
    }

    init() {
        if (!this.stockNumber) return;
        this.update();
        // Simule une vente toutes les 30 secondes
        setInterval(() => this.simulateDecrease(), 30000);
    }

    update() {
        if (this.stockNumber) {
            this.stockNumber.textContent = this.currentStock;
        }

        if (this.stockBar) {
            const percentage = (this.currentStock / this.initialStock) * 100;
            this.stockBar.style.width = percentage + '%';
        }
    }

    simulateDecrease() {
        if (this.currentStock > 5) {
            this.currentStock--;
            this.update();
        }
    }
}

/* ============================================
   14. LIVE NOTIFICATIONS
   ============================================ */
class LiveNotifications {
    constructor() {
        this.container = document.getElementById('liveNotifications');
        this.names = [
            'Koffi', 'Aminata', 'Youssouf', 'Fatoumata', 'Ibrahim', 
            'Aïcha', 'Moussa', 'Mariam', 'Rachid', 'Zalika',
            'Serge', 'Nadège', 'Patrick', 'Clarisse', 'Arsène'
        ];
        this.cities = [
            'Cotonou', 'Porto-Novo', 'Parakou', 'Abomey-Calavi',
            'Bohicon', 'Djougou', 'Natitingou', 'Lokossa'
        ];
    }

    init() {
        if (!this.container) return;
        setTimeout(() => this.show(), 5000);
    }

    show() {
        if (!this.container) return;

        const name = this.names[Math.floor(Math.random() * this.names.length)];
        const city = this.cities[Math.floor(Math.random() * this.cities.length)];
        const minutesAgo = Math.floor(Math.random() * 15) + 1;

        const notification = document.createElement('div');
        notification.className = 'live-notification';
        notification.innerHTML = `
            <span class="notif-icon"><i class="fas fa-check-circle"></i></span>
            <span class="notif-text">
                <strong>${name}</strong> de ${city}
                <span class="notif-time">Il y a ${minutesAgo} min</span>
            </span>
        `;

        this.container.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);

        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 500);
        }, 5000);

        // Prochaine notification
        const nextDelay = Math.floor(Math.random() * 7000) + 8000;
        setTimeout(() => this.show(), nextDelay);
    }
}

/* ============================================
   15. ORDER FORM
   ============================================ */
class OrderForm {
    constructor() {
        this.form = document.getElementById('orderForm');
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }

    handleSubmit(event) {
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            city: formData.get('city'),
            address: formData.get('address'),
            payment: formData.get('payment')
        };

        // Validation
        if (!data.name || data.name.length < 3) {
            alert('⚠️ Veuillez entrer votre nom complet (minimum 3 caractères)');
            return;
        }

        if (!data.phone || data.phone.length < 8) {
            alert('⚠️ Veuillez entrer un numéro WhatsApp valide');
            return;
        }

        if (!data.city) {
            alert('⚠️ Veuillez sélectionner votre ville de livraison');
            return;
        }

        if (!data.address || data.address.length < 10) {
            alert('⚠️ Veuillez fournir une adresse complète (minimum 10 caractères)');
            return;
        }

        if (!data.payment) {
            alert('⚠️ Veuillez choisir votre mode de paiement');
            return;
        }

        // Tout est OK → Afficher modal succès
        this.showSuccess();
        this.launchConfetti();

        // Log données (à remplacer par envoi serveur)
        console.log('Commande validée :', data);
    }

    showSuccess() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    launchConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;

        canvas.classList.add('active');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#FF0000', '#FF1493', '#FF69B4', '#FFD700'];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: Math.random() * -20 - 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 5,
                gravity: 0.3
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                if (p.y > canvas.height) {
                    particles.splice(index, 1);
                }
            });

            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                canvas.classList.remove('active');
            }
        }

        animate();
    }
}

/* ============================================
   16. MODAL
   ============================================ */
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/* ============================================
   17. SCROLL FUNCTIONS
   ============================================ */
function scrollToCommander() {
    const section = document.getElementById('commander');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ============================================
   18. INITIALISATION GLOBALE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Inject images
    injectImages();

    // Loading screen
    const loading = new LoadingScreen();
    loading.start();

    // Custom cursor (desktop only)
    if (window.innerWidth > 768) {
        const cursor = new CustomCursor();
        cursor.init();
    }

    // Scroll progress
    const scrollProgress = new ScrollProgress();
    scrollProgress.init();

    // Particle rain
    const particleRain = new ParticleRain();
    particleRain.init();

    // Balloons
    const balloons = new Balloons();
    balloons.init();

    // Quiz
    setTimeout(() => {
        const quiz = new QuizManager();
        quiz.init();
    }, CONFIG.loadingDuration);

    // Gift unwrap
    setTimeout(() => {
        const giftUnwrap = new GiftUnwrap();
        giftUnwrap.init();
    }, CONFIG.loadingDuration + 500);

    // Teddy 3D instances
    setTimeout(() => {
        const teddy1 = new Teddy3D('teddy3DHero');
        teddy1.init();

        const teddy2 = new Teddy3D('teddy3DMain');
        teddy2.init();

        const teddy3 = new Teddy3D('teddy3DFinal');
        teddy3.init();
    }, CONFIG.loadingDuration + 1000);

    // Countdown
    const countdown = new Countdown();
    countdown.init();

    // Stock manager
    const stockManager = new StockManager();
    stockManager.init();

    // Live notifications
    setTimeout(() => {
        const liveNotif = new LiveNotifications();
        liveNotif.init();
    }, 10000);

    // Order form
    const orderForm = new OrderForm();
    orderForm.init();
});

/* ============================================
   FIN DU SCRIPT
   ============================================ */
