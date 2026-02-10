/* ============================================
   SCRIPT.JS - VERSION SANS LOADING
   Démarrage instantané sur le Quiz
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
    soldCount: 62
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
        }
    });
}

/* ============================================
   4. PAS DE LOADING - DÉMARRAGE DIRECT
   ============================================ */
function hideLoadingInstantly() {
    const loading = document.getElementById('loadingScreen');
    const quiz = document.getElementById('quizSection');
    
    if (loading) {
        loading.style.display = 'none';
    }
    
    if (quiz) {
        quiz.classList.remove('hidden');
    }
}

/* ============================================
   5. CUSTOM CURSOR
   ============================================ */
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('customCursor');
    }

    init() {
        if (!this.cursor || window.innerWidth <= 768) return;

        document.addEventListener('mousemove', (e) => {
            if (this.cursor) {
                this.cursor.style.left = e.clientX + 'px';
                this.cursor.style.top = e.clientY + 'px';
            }
        });
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
        if (!this.bar) return;
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        this.bar.style.width = progress + '%';
    }
}

/* ============================================
   7. BALLOONS
   ============================================ */
class Balloons {
    constructor() {
        this.balloons = document.querySelectorAll('.balloon');
    }

    init() {
        this.balloons.forEach(balloon => {
            balloon.addEventListener('click', () => {
                balloon.classList.add('pop');
                setTimeout(() => balloon.classList.remove('pop'), 300);
            });
        });
    }
}

/* ============================================
   8. QUIZ MANAGER (SIMPLIFIÉ)
   ============================================ */
class QuizManager {
    constructor() {
        this.currentQuestion = 0;
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
            btnStartUnwrap: document.getElementById('btnStartUnwrap')
        };
    }

    init() {
        if (!this.elements.card) return;

        if (this.elements.totalQ) {
            this.elements.totalQ.textContent = this.questions.length;
        }

        this.showQuestion(0);

        if (this.elements.btnStartUnwrap) {
            this.elements.btnStartUnwrap.addEventListener('click', () => {
                document.getElementById('quizSection').classList.add('hidden');
                document.getElementById('giftUnwrap').classList.remove('hidden');
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
                
                btn.innerHTML = `
                    <span class="option-letter">${option.letter}</span>
                    <span class="option-text">${option.text}</span>
                    ${option.correct ? '<i class="fas fa-check option-check"></i>' : ''}
                `;

                btn.addEventListener('click', () => {
                    if (option.correct) {
                        this.nextQuestion();
                    } else {
                        alert('Essaie une autre réponse ! 💡');
                    }
                });

                this.elements.options.appendChild(btn);
            });
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
}

/* ============================================
   9. COUNTDOWN
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
   10. STOCK MANAGER
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
}

/* ============================================
   11. ORDER FORM
   ============================================ */
class OrderForm {
    constructor() {
        this.form = document.getElementById('orderForm');
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.add('active');
            }
        });
    }
}

/* ============================================
   12. SCROLL FUNCTIONS
   ============================================ */
function scrollToCommander() {
    const section = document.getElementById('commander');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/* ============================================
   13. INITIALISATION - DÉMARRAGE INSTANTANÉ
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Cacher loading instantanément
    hideLoadingInstantly();
    
    // Injecter images
    injectImages();

    // Custom cursor (desktop)
    if (window.innerWidth > 768) {
        const cursor = new CustomCursor();
        cursor.init();
    }

    // Scroll progress
    const scrollProgress = new ScrollProgress();
    scrollProgress.init();

    // Balloons
    const balloons = new Balloons();
    balloons.init();

    // Quiz
    const quiz = new QuizManager();
    quiz.init();

    // Countdown
    const countdown = new Countdown();
    countdown.init();

    // Stock
    const stock = new StockManager();
    stock.init();

    // Order form
    const orderForm = new OrderForm();
    orderForm.init();
});
