/* ============================================
   SCRIPT.JS - VERSION FINALE CORRIGÉE
   Images préchargées + Déballage fonctionnel
   ============================================ */

/* ============================================
   1. IMAGES - PRELOAD FORCÉ
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
   2. PRELOAD DES IMAGES (Force le chargement)
   ============================================ */
function preloadImages() {
    console.log('🖼️ Préchargement des images...');
    
    Object.entries(IMAGES).forEach(([key, url]) => {
        const img = new Image();
        img.onload = () => console.log(`✅ ${key} chargée`);
        img.onerror = () => console.error(`❌ ${key} échouée`);
        img.src = url;
    });
}

/* ============================================
   3. INJECTION FORCÉE DES IMAGES
   ============================================ */
function injectImages() {
    console.log('💉 Injection des images dans le DOM...');
    
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
            img.alt = id;
            img.loading = 'eager'; // Force chargement immédiat
            console.log(`✅ Injecté: ${id}`);
        } else {
            console.warn(`⚠️ Element ${id} introuvable`);
        }
    });
}

/* ============================================
   4. CONFIGURATION
   ============================================ */
const CONFIG = {
    countdownTarget: new Date('2026-02-14T23:59:59'),
    initialStock: 85,
    currentStock: 23,
    soldCount: 62
};

/* ============================================
   5. DÉMARRAGE INSTANTANÉ
   ============================================ */
function hideLoadingInstantly() {
    const loading = document.getElementById('loadingScreen');
    const quiz = document.getElementById('quizSection');
    
    if (loading) {
        loading.style.display = 'none';
        console.log('✅ Loading caché');
    }
    
    if (quiz) {
        quiz.classList.remove('hidden');
        console.log('✅ Quiz affiché');
    }
}

/* ============================================
   6. QUIZ PSYCHOLOGUE
   ============================================ */
class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        
        this.questions = [
            {
                title: "Question 1 sur 5",
                text: "Combien êtes-vous prêt à investir dans son sourire ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Moins de 5.000 FCFA",
                        response: "Je comprends. Parfois, les budgets sont serrés. Mais réfléchissez : un sourire quotidien pendant 5 ans... ça vaut combien pour vous ?"
                    },
                    { 
                        letter: "B", 
                        text: "5.000 - 10.000 FCFA",
                        response: "Excellent choix. Un investissement raisonnable pour quelque chose qui dure des années. Voyons si on peut maximiser cet investissement..."
                    },
                    { 
                        letter: "C", 
                        text: "Plus de 10.000 FCFA",
                        response: "Généreux ! Mais attention : plus cher ne veut pas dire mieux. Parfois, ce qui compte c'est la présence quotidienne, pas le prix."
                    }
                ]
            },
            {
                title: "Question 2 sur 5",
                text: "Qu'est-ce qui compte le plus pour vous dans un cadeau ?",
                options: [
                    { 
                        letter: "A", 
                        text: "L'effet immédiat (surprise, wow)",
                        response: "Je comprends l'envie d'impressionner. Mais demandez-vous : que restera-t-il dans 3 jours ? Les fleurs fanent. Les restos s'oublient. Que voulez-vous vraiment ?"
                    },
                    { 
                        letter: "B", 
                        text: "La durabilité dans le temps",
                        response: "Sage choix. Vous pensez long terme. Un cadeau qui devient un compagnon quotidien, c'est ça la vraie valeur. Continuons..."
                    },
                    { 
                        letter: "C", 
                        text: "Impressionner les autres",
                        response: "Honnêteté appréciée. Mais réfléchissez : les bijoux à 150K impressionnent... mais dorment dans un tiroir. Et quand elle est seule le soir, qu'est-ce qui compte vraiment ?"
                    }
                ]
            },
            {
                title: "Question 3 sur 5",
                text: "Combien de fois par jour pensez-vous à elle ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Quelques fois",
                        response: "Et elle ? Elle pense à vous combien de fois ? Imaginez un objet qui lui rappelle votre présence 10, 20, 50 fois par jour... Ça change tout."
                    },
                    { 
                        letter: "B", 
                        text: "Souvent (10-20 fois)",
                        response: "C'est touchant. Maintenant imaginez : et si elle avait quelque chose qui lui rappelle VOUS aussi souvent ? Un objet permanent dans sa vie quotidienne..."
                    },
                    { 
                        letter: "C", 
                        text: "Tout le temps",
                        response: "Intensité maximale. Mais quand vous n'êtes pas là, qu'est-ce qui comble ce vide ? Les fleurs ? Un resto ? Non. Il lui faut votre présence permanente."
                    }
                ]
            },
            {
                title: "Question 4 sur 5",
                text: "Quel est votre plus grand regret de Saint-Valentin passées ?",
                options: [
                    { 
                        letter: "A", 
                        text: "J'ai dépensé trop pour rien",
                        response: "Exactement. 40K au resto, oublié en 24h. 12K de fleurs, mortes en 3 jours. Vous avez compris : la valeur, c'est la durée × l'utilisation."
                    },
                    { 
                        letter: "B", 
                        text: "Le cadeau n'a pas duré",
                        response: "Vous l'avez dit. Les cadeaux éphémères créent des regrets permanents. Cette fois, offrez quelque chose qu'elle gardera toute sa vie."
                    },
                    { 
                        letter: "C", 
                        text: "Pas assez d'émotion",
                        response: "L'émotion éphémère vs l'émotion quotidienne. Les fleurs ? Wow 1 jour. Une présence permanente ? Wow 1.825 jours. Faites le calcul."
                    }
                ]
            },
            {
                title: "Question 5 sur 5",
                text: "Si elle pouvait garder UN seul cadeau toute sa vie, ce serait quoi ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Un bijou précieux",
                        response: "Honnêtement ? Les bijoux finissent dans un tiroir. Trop peur de les perdre. Rarement portés. Pensez : qu'est-ce qu'elle utilise VRAIMENT tous les jours ?"
                    },
                    { 
                        letter: "B", 
                        text: "Un souvenir d'expérience",
                        response: "Les souvenirs s'estompent. Les photos jaunissent. Mais un objet tangible qu'elle voit, touche, serre tous les jours ? Ça, ça ne s'efface jamais."
                    },
                    { 
                        letter: "C", 
                        text: "Quelque chose de confortable et présent",
                        response: "BINGO. Vous avez tout compris. Confort + présence quotidienne = valeur infinie. Voyons maintenant ce qui correspond parfaitement à ça..."
                    }
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
        if (!this.elements.card) {
            console.error('❌ Quiz card introuvable');
            return;
        }

        if (this.elements.totalQ) {
            this.elements.totalQ.textContent = this.questions.length;
        }

        this.showQuestion(0);

        if (this.elements.btnStartUnwrap) {
            this.elements.btnStartUnwrap.addEventListener('click', () => {
                console.log('🎁 Déballage cadeau...');
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
            question.options.forEach((option) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option';
                
                btn.innerHTML = `
                    <span class="option-letter">${option.letter}</span>
                    <span class="option-text">${option.text}</span>
                `;

                btn.addEventListener('click', () => {
                    this.handleAnswer(option);
                });

                this.elements.options.appendChild(btn);
            });
        }
    }

    handleAnswer(option) {
        this.showPsychoResponse(option.response);
    }

    showPsychoResponse(responseText) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            animation: fadeIn 0.3s ease;
        `;

        const card = document.createElement('div');
        card.style.cssText = `
            background: white;
            padding: 2.5rem 2rem;
            border-radius: 20px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            animation: scaleIn 0.4s ease;
        `;

        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1.5rem;">🧠</div>
            <p style="font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 2rem;">
                ${responseText}
            </p>
            <button id="btnContinue" style="
                padding: 1rem 2.5rem;
                background: linear-gradient(135deg, #DC143C, #FF1493);
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                width: 100%;
            ">
                Je comprends, continuons
            </button>
        `;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        document.getElementById('btnContinue').addEventListener('click', () => {
            document.body.removeChild(overlay);
            this.nextQuestion();
        });
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
            console.log('✅ Quiz caché');
        }
        if (unwrapSection) {
            unwrapSection.classList.remove('hidden');
            console.log('✅ Déballage affiché');
        }
    }
}

/* ============================================
   7. EXPLOSION DE CŒURS
   ============================================ */
class HeartExplosion {
    constructor() {
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.hearts = [];
        this.active = false;
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'heartExplosionCanvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 10000;
        `;
        document.body.appendChild(canvas);
        return canvas;
    }

    explode() {
        this.active = true;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // 80 cœurs qui explosent dans toutes les directions
        for (let i = 0; i < 80; i++) {
            const angle = (Math.PI * 2 * i) / 80;
            const speed = Math.random() * 8 + 4;
            
            this.hearts.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 40 + 25,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.3,
                color: ['#FF0000', '#FF1493', '#FF69B4', '#DC143C', '#FFD700'][Math.floor(Math.random() * 5)],
                alpha: 1,
                gravity: 0.15
            });
        }

        this.animate();
    }

    drawHeart(x, y, size, rotation, color, alpha) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = color;
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = color;

        this.ctx.beginPath();
        const h = size * 0.3;
        this.ctx.moveTo(0, h);
        this.ctx.bezierCurveTo(0, 0, -size/2, 0, -size/2, h);
        this.ctx.bezierCurveTo(-size/2, (size+h)/2, 0, (size+h)/2, 0, size);
        this.ctx.bezierCurveTo(0, (size+h)/2, size/2, (size+h)/2, size/2, h);
        this.ctx.bezierCurveTo(size/2, 0, 0, 0, 0, h);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }

    animate() {
        if (!this.active) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.hearts.forEach((heart, index) => {
            heart.x += heart.vx;
            heart.y += heart.vy;
            heart.vy += heart.gravity;
            heart.rotation += heart.rotationSpeed;
            heart.alpha -= 0.008;

            if (heart.alpha > 0) {
                this.drawHeart(heart.x, heart.y, heart.size, heart.rotation, heart.color, heart.alpha);
            } else {
                this.hearts.splice(index, 1);
            }
        });

        if (this.hearts.length > 0) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.active = false;
            this.canvas.remove();
        }
    }
}

/* ============================================
   8. SLIDES CAROUSEL - Par Gandxo (gbaguidiexauce@gmail.com)
   ============================================ */
class SlidesCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = [
            {
                image: IMAGES.comfort,
                title: 'Quand elle a besoin de réconfort',
                text: 'Journée difficile au bureau ? Chef énervé ? Elle rentre et serre la peluche. 2 minutes. Sourire revenu. Stress disparu.',
                stats: 'Cortisol ↓ 30% • Ocytocine ↑ 25%'
            },
            {
                image: IMAGES.sleep,
                title: 'Chaque soir quand elle se couche',
                text: 'La peluche sur son lit. Rituel du soir permanent. Endormissement 30% plus rapide. Sommeil plus profond.',
                stats: '89% l\'emmènent au lit tous les soirs'
            },
            {
                image: IMAGES.perfume,
                title: 'Quand elle pense à vous',
                text: 'Elle sent la peluche. Votre parfum est encore là (4-8 semaines). Instant connexion. Vous êtes présent, même absent.',
                stats: 'Mémoire olfactive : 4-8 semaines'
            },
            {
                image: IMAGES.travel,
                title: 'Quand elle voyage',
                text: 'Paris, New York, Lomé... La peluche dans sa valise. TOUJOURS. 87% l\'emmènent partout. Vous voyagez avec elle.',
                stats: '87% la prennent en voyage'
            }
        ];
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;
    }

    init() {
        const situationsSection = document.querySelector('.situations-timeline');
        if (!situationsSection) {
            console.warn('⚠️ Section situations introuvable pour slides');
            return;
        }

        this.injectCSS();
        this.createSlides(situationsSection);
        this.bindEvents();
        this.showSlide(0);
        this.startAutoPlay();
        console.log('✅ Slides carousel initialisé par Gandxo');
    }

    injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
            .slides-carousel {
                position: relative;
                max-width: 1200px;
                margin: 4rem auto;
                border-radius: 30px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            .slides-container {
                position: relative;
                height: 600px;
                overflow: hidden;
            }
            .slide {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.8s ease;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0;
            }
            .slide.active {
                opacity: 1;
                visibility: visible;
                z-index: 1;
            }
            .slide-image-wrapper {
                position: relative;
                overflow: hidden;
            }
            .slide-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .slide.active .slide-image {
                animation: zoomIn 0.8s ease;
            }
            @keyframes zoomIn {
                from { transform: scale(1.1); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .slide-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(220,20,60,0.3) 100%);
            }
            .slide-content {
                padding: 4rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: white;
            }
            .slide-title {
                font-size: 2.5rem;
                font-family: 'Playfair Display', serif;
                color: #DC143C;
                margin-bottom: 2rem;
                line-height: 1.2;
            }
            .slide.active .slide-title {
                animation: slideInRight 0.6s ease 0.2s backwards;
            }
            .slide-text {
                font-size: 1.25rem;
                line-height: 1.8;
                color: #333;
                margin-bottom: 2rem;
            }
            .slide.active .slide-text {
                animation: slideInRight 0.6s ease 0.4s backwards;
            }
            .slide-stats {
                display: inline-flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem 1.5rem;
                background: linear-gradient(135deg, #FFD700, #FFA500);
                color: #000;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1.1rem;
                box-shadow: 0 4px 15px rgba(255,215,0,0.4);
                align-self: flex-start;
            }
            .slide.active .slide-stats {
                animation: slideInRight 0.6s ease 0.6s backwards;
            }
            @keyframes slideInRight {
                from { opacity: 0; transform: translateX(50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .slide-nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 60px;
                height: 60px;
                background: rgba(255,255,255,0.95);
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                color: #DC143C;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .slide-nav:hover {
                background: #DC143C;
                color: white;
                transform: translateY(-50%) scale(1.1);
            }
            .slide-prev { left: 2rem; }
            .slide-next { right: 2rem; }
            .slide-dots {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 1rem;
                z-index: 10;
            }
            .slide-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255,255,255,0.5);
                border: 2px solid white;
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 0;
            }
            .slide-dot:hover {
                background: rgba(255,255,255,0.8);
                transform: scale(1.2);
            }
            .slide-dot.active {
                background: #DC143C;
                border-color: #DC143C;
                width: 40px;
                border-radius: 6px;
            }
            .slide-credit {
                position: absolute;
                bottom: 0.5rem;
                right: 1rem;
                font-size: 0.85rem;
                color: rgba(255,255,255,0.9);
                background: rgba(0,0,0,0.6);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                z-index: 10;
            }
            .slide-credit strong {
                color: #FFD700;
            }
            @media (max-width: 968px) {
                .slides-container { height: 800px; }
                .slide { grid-template-columns: 1fr; grid-template-rows: 400px 1fr; }
                .slide-content { padding: 2rem; }
                .slide-title { font-size: 2rem; }
                .slide-text { font-size: 1.1rem; }
                .slide-nav { width: 50px; height: 50px; font-size: 1.25rem; }
                .slide-prev { left: 1rem; }
                .slide-next { right: 1rem; }
            }
            @media (max-width: 768px) {
                .slides-container { height: 700px; }
                .slide { grid-template-rows: 350px 1fr; }
                .slide-content { padding: 1.5rem; }
                .slide-title { font-size: 1.75rem; margin-bottom: 1.5rem; }
                .slide-text { font-size: 1rem; margin-bottom: 1.5rem; }
                .slide-stats { font-size: 0.95rem; padding: 0.75rem 1.25rem; }
            }
        `;
        document.head.appendChild(style);
    }

    createSlides(container) {
        const html = `
            <div class="slides-carousel">
                <div class="slides-container">
                    ${this.slides.map((slide, i) => `
                        <div class="slide ${i === 0 ? 'active' : ''}">
                            <div class="slide-image-wrapper">
                                <img src="${slide.image}" alt="${slide.title}" class="slide-image" loading="lazy">
                                <div class="slide-overlay"></div>
                            </div>
                            <div class="slide-content">
                                <h3 class="slide-title">${slide.title}</h3>
                                <p class="slide-text">${slide.text}</p>
                                <div class="slide-stats">
                                    <i class="fas fa-chart-line"></i> ${slide.stats}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="slide-nav slide-prev" id="slidePrev">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slide-nav slide-next" id="slideNext">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="slide-dots">
                    ${this.slides.map((_, i) => `
                        <button class="slide-dot ${i === 0 ? 'active' : ''}"></button>
                    `).join('')}
                </div>
                <div class="slide-credit">
                    <i class="fas fa-code"></i> Fait par <strong>Gandxo</strong> - gbaguidiexauce@gmail.com
                </div>
            </div>
        `;
        container.innerHTML = html + container.innerHTML;
    }

    bindEvents() {
        const prev = document.getElementById('slidePrev');
        const next = document.getElementById('slideNext');
        
        if (prev) prev.addEventListener('click', () => this.prevSlide());
        if (next) next.addEventListener('click', () => this.nextSlide());

        document.querySelectorAll('.slide-dot').forEach((dot, i) => {
            dot.addEventListener('click', () => this.goToSlide(i));
        });

        // Swipe mobile
        let startX = 0;
        const container = document.querySelector('.slides-container');
        if (container) {
            container.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            container.addEventListener('touchend', (e) => {
                const endX = e.changedTouches[0].clientX;
                if (startX - endX > 50) this.nextSlide();
                else if (endX - startX > 50) this.prevSlide();
            });
        }

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    showSlide(index) {
        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.slide-dot').forEach(d => d.classList.remove('active'));
        
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-dot');
        
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        this.currentSlide = index;
    }

    nextSlide() {
        this.goToSlide((this.currentSlide + 1) % this.slides.length);
    }

    prevSlide() {
        this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

/* ============================================
   9. DÉBALLAGE CADEAU (SIMPLIFIÉ MAIS FONCTIONNEL)
   ============================================ */
class GiftUnwrap {
    constructor() {
        this.unwrapped = false;
        this.btnUnwrap = document.getElementById('btnUnwrap');
    }

    init() {
        if (!this.btnUnwrap) {
            console.error('❌ Bouton déballage introuvable');
            return;
        }

        console.log('✅ Déballage initialisé');

        this.btnUnwrap.addEventListener('click', () => {
            console.log('🎁 Clic sur déballer !');
            this.unwrap();
        });
    }

    unwrap() {
        if (this.unwrapped) return;
        this.unwrapped = true;

        console.log('🎊 Animation déballage...');

        // Animation simple : cacher la boîte, afficher confetti
        const giftBox = document.getElementById('giftBox3D');
        const giftImg = document.getElementById('imgGiftBox');
        
        if (giftBox) giftBox.style.display = 'none';
        if (giftImg) giftImg.style.display = 'none';
        if (this.btnUnwrap) this.btnUnwrap.style.display = 'none';

        // Confetti simple
        this.launchConfetti();

        // Message de transition
        setTimeout(() => this.showTransition(), 1000);
    }

    launchConfetti() {
        console.log('💥 EXPLOSION DE CŒURS !');
        
        // Explosion de cœurs animés
        const heartExplosion = new HeartExplosion();
        heartExplosion.explode();
        
        // Message emoji au centre pendant l'explosion
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 8rem;
            z-index: 9999;
            animation: heartPulse 0.8s ease infinite;
            text-shadow: 0 0 30px rgba(255,20,147,0.8);
        `;
        message.textContent = '❤️';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                document.body.removeChild(message);
            }
        }, 3000);
    }

    showTransition() {
        console.log('💫 Transition vers Hero...');
        
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #FF1493, #DC143C);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            animation: fadeIn 0.5s ease;
        `;
        
        message.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 2rem; animation: heartPulse 1s ease infinite;">❤️</div>
            <h2 style="font-size: 2rem; margin-bottom: 1rem; text-align: center; padding: 0 2rem;">
                Voici le cadeau parfait...
            </h2>
            <p style="font-size: 1.5rem; text-align: center; padding: 0 2rem;">
                Celui qui ne meurt jamais ♾️
            </p>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            document.body.removeChild(message);
            this.goToHero();
        }, 3000);
    }

    goToHero() {
        const unwrapSection = document.getElementById('giftUnwrap');
        const heroSection = document.getElementById('hero');

        if (unwrapSection) {
            unwrapSection.classList.add('hidden');
            console.log('✅ Déballage caché');
        }

        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
            console.log('✅ Hero affiché');
        }
    }
}

/* ============================================
   8. AUTRES CLASSES
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
   9. FONCTIONS GLOBALES
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
   10. INITIALISATION GLOBALE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SITE DÉMARRÉ !');
    
    // 1. Cacher loading
    hideLoadingInstantly();
    
    // 2. Précharger images
    preloadImages();
    
    // 3. Injecter images
    setTimeout(() => injectImages(), 500);
    
    // 4. Quiz
    const quiz = new QuizManager();
    quiz.init();
    
    // 5. Déballage
    const giftUnwrap = new GiftUnwrap();
    giftUnwrap.init();
    
    // 6. Countdown
    const countdown = new Countdown();
    countdown.init();
    
    // 7. Stock
    const stock = new StockManager();
    stock.init();
    
    // 8. Form
    const orderForm = new OrderForm();
    orderForm.init();
    
    // 9. Scroll progress
    const scrollProgress = new ScrollProgress();
    scrollProgress.init();
    
    // 10. Slides Carousel
    const slidesCarousel = new SlidesCarousel();
    slidesCarousel.init();
    
    console.log('✅ Toutes les classes initialisées');
});

/* Animations CSS inline */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    @keyframes heartPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);
