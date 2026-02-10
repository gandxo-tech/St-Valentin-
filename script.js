/* ============================================
   SCRIPT.JS - VERSION FINALE OPTIMISÉE
   Peluche Saint-Valentin 2026
   Par Gandxo - gbaguidiexauce@gmail.com
   ============================================ */

/* ============================================
   1. IMAGES - URLs imgbb.com CORRIGÉES
   ============================================ */
const IMAGES = {
    heart: 'https://i.ibb.co/XhfLRL0/unnamed-7.jpg',
    giftBox: 'https://i.ibb.co/svLryzFQ/Gemini-Generated-Image-csm486csm486csm4.png',
    hero: 'https://i.ibb.co/J0gcnZN/unnamed-6.jpg',
    studio: 'https://i.ibb.co/8ZX2jL7/Clipfly-20260205013711-jpg.png',
    comfort: 'https://i.ibb.co/7tYKcLy0/unnamed-9.jpg',        // Réconfort
    sleep: 'https://i.ibb.co/GfBV1JKp/unnamed-11.jpg',         // Sommeil
    perfume: 'https://i.ibb.co/BRk8KzT/unnamed-12.jpg',        // Parfum
    travel: 'https://i.ibb.co/wNn8sYSm/unnamed-10.jpg',        // VOYAGE (peluche dans valise)
    bed: 'https://i.ibb.co/Y4F2mfrc/unnamed-8.jpg',
    teddyWhite: 'https://i.ibb.co/RpDqCqVS/750204c813b23df226d5ee418aa3de4f48408f6f.png'
};

/* ============================================
   2. CONFIGURATION
   ============================================ */
const CONFIG = {
    countdownTarget: new Date('2026-02-14T23:59:59'),
    initialStock: 85,
    currentStock: 23,
    soldCount: 62
};

/* ============================================
   3. PRELOAD & INJECTION DES IMAGES
   ============================================ */
function preloadImages() {
    console.log('🖼️ Préchargement des images...');
    Object.entries(IMAGES).forEach(([key, url]) => {
        const img = new Image();
        img.onload = () => console.log(`✅ ${key} chargée`);
        img.onerror = () => console.error(`❌ ${key} échouée : ${url}`);
        img.src = url;
    });
}

function injectImages() {
    console.log('💉 Injection des images...');
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
            img.loading = 'eager';
            // Force l'affichage
            img.style.display = 'block';
            img.style.opacity = '1';
            console.log(`✅ ${id} injecté : ${src}`);
        } else {
            console.warn(`⚠️ Element ${id} introuvable`);
        }
    });
}

/* ============================================
   4. DÉMARRAGE INSTANTANÉ
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
   5. QUIZ PSYCHOLOGUE
   ============================================ */
class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        
        this.questions = [
            {
                title: "Question 1 sur 5",
                text: "Quand vous pensez à elle, quel sentiment domine ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Le désir de l'impressionner",
                        response: "Vouloir impressionner est naturel. Mais au-delà de l'effet 'wow' du premier instant, qu'est-ce qui reste ? Un cadeau qui l'accompagne quotidiennement crée une impression bien plus profonde et durable."
                    },
                    { 
                        letter: "B", 
                        text: "L'envie de la réconforter",
                        response: "C'est touchant. Le réconfort est ce dont nous avons tous besoin. Un objet qui apporte cette chaleur jour après jour, c'est exactement ce qui transforme un simple cadeau en compagnon de vie."
                    },
                    { 
                        letter: "C", 
                        text: "Le besoin d'être présent même absent",
                        response: "Vous avez saisi l'essentiel. La vraie présence ne se mesure pas en minutes, mais en permanence. Un objet qui vous représente 24h/24, c'est exactement ce qui comble la distance."
                    }
                ]
            },
            {
                title: "Question 2 sur 5",
                text: "Dans 6 mois, vous aimeriez qu'elle pense à votre cadeau comment ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Comme un beau souvenir du passé",
                        response: "Les souvenirs s'estompent. Les photos jaunissent. Mais un objet physique qu'elle voit, touche et serre chaque jour ? Ça, c'est un souvenir qui reste vivant."
                    },
                    { 
                        letter: "B", 
                        text: "Comme un compagnon quotidien",
                        response: "Exactement. Un cadeau ne devrait pas finir dans un tiroir. Il devrait faire partie de sa routine : le soir au coucher, le matin au réveil, dans les moments difficiles. C'est ça, la vraie valeur."
                    },
                    { 
                        letter: "C", 
                        text: "Elle l'aura probablement oublié",
                        response: "Soyons honnêtes : la plupart des cadeaux sont oubliés en quelques semaines. Fleurs fanées, restos effacés de la mémoire. Mais certains objets deviennent permanents. La question est : lequel choisissez-vous ?"
                    }
                ]
            },
            {
                title: "Question 3 sur 5",
                text: "Qu'est-ce qui vous fait le plus peur avec les cadeaux ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Gaspiller de l'argent pour rien",
                        response: "Cette peur est légitime. 40.000 FCFA pour un resto oublié en 24h ? 12.000 FCFA pour des fleurs mortes en 3 jours ? Le vrai gaspillage, c'est d'investir sans durée. 7.000 FCFA sur 5 ans = 3,8 FCFA/jour. Ça, ce n'est pas un gaspillage."
                    },
                    { 
                        letter: "B", 
                        text: "Qu'elle ne l'utilise jamais",
                        response: "Vous mettez le doigt sur le vrai problème : les bijoux qui dorment dans un tiroir, les parfums qui prennent la poussière. Un cadeau qui ne s'utilise pas est un échec. La question est simple : qu'utilise-t-elle VRAIMENT tous les jours ?"
                    },
                    { 
                        letter: "C", 
                        text: "Que ce soit banal, sans émotion",
                        response: "L'émotion ne vient pas du prix ou de la rareté. Elle vient de la connexion. Un objet qu'elle serre quand elle est triste, qu'elle emmène en voyage, qui porte votre odeur... Ça, c'est l'émotion pure."
                    }
                ]
            },
            {
                title: "Question 4 sur 5",
                text: "Si elle devait choisir entre ces moments, lequel serait le plus important ?",
                options: [
                    { 
                        letter: "A", 
                        text: "L'excitation de déballer le cadeau",
                        response: "L'excitation dure 30 secondes. Les photos Instagram, peut-être une journée. Mais ensuite ? La vraie magie d'un cadeau se révèle dans les mois qui suivent, pas dans l'instant."
                    },
                    { 
                        letter: "B", 
                        text: "Le réconfort quotidien qu'il apporte",
                        response: "Vous comprenez. Ce n'est pas le jour de la Saint-Valentin qui compte le plus. C'est le 15 février. Le 20 mars. Le 12 juillet. Tous ces jours où votre cadeau est encore là, utile, présent."
                    },
                    { 
                        letter: "C", 
                        text: "Le statut social qu'il lui donne",
                        response: "Le statut social s'achète avec un bijou à 150K. Mais il reste dans un tiroir par peur de le perdre. Et quand elle rentre chez elle le soir, fatiguée et seule, c'est quoi qui compte vraiment ?"
                    }
                ]
            },
            {
                title: "Question 5 sur 5",
                text: "Dans 10 ans, si elle garde UNE seule chose de votre relation, ce devrait être quoi ?",
                options: [
                    { 
                        letter: "A", 
                        text: "Des photos et souvenirs immatériels",
                        response: "Les photos sont belles. Mais elles restent dans un téléphone. On les regarde une fois par an. Un objet physique, tangible, qu'elle peut toucher, sentir, serrer... C'est une toute autre forme de mémoire."
                    },
                    { 
                        letter: "B", 
                        text: "Un objet qu'elle a utilisé toute sa vie",
                        response: "EXACTEMENT. Dans 10 ans, elle veut quelque chose qui a traversé le temps avec elle. Qui a absorbé vos histoires, vos moments, votre odeur. Pas un bijou de tiroir. Un compagnon de vie."
                    },
                    { 
                        letter: "C", 
                        text: "Un cadeau cher qui prouve votre amour",
                        response: "L'amour ne se prouve pas par le prix. Il se prouve par la présence. 150.000 FCFA utilisés 2 fois par an, ou 7.000 FCFA utilisés 365 jours par an ? Faites le calcul de l'amour quotidien."
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
            btnStartUnwrap: document.getElementById('btnStartUnwrap'),
            resultText: document.getElementById('resultText')
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
                this.transitionToUnwrap();
            });
        }

        console.log('✅ Quiz initialisé');
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
                btn.type = 'button';
                
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
            max-width: 600px;
            width: 100%;
            text-align: center;
            animation: scaleIn 0.4s ease;
        `;

        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1.5rem;">🧠</div>
            <p style="font-size: 1.15rem; line-height: 1.8; color: #333; margin-bottom: 2rem; text-align: left;">
                ${responseText}
            </p>
            <button id="btnContinue" type="button" style="
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
            
            if (this.elements.resultText) {
                this.elements.resultText.innerHTML = `
                    Vos réponses révèlent quelqu'un qui cherche l'authenticité. 
                    Vous comprenez que la vraie valeur ne se mesure pas en prix, 
                    mais en présence quotidienne. Découvrez maintenant le cadeau 
                    qui incarne parfaitement cette philosophie...
                `;
            }
        }
    }

    transitionToUnwrap() {
        const quizSection = document.getElementById('quizSection');
        const unwrapSection = document.getElementById('giftUnwrap');

        if (quizSection) quizSection.classList.add('hidden');
        if (unwrapSection) unwrapSection.classList.remove('hidden');
        
        console.log('✅ Transition vers déballage');
    }
}

/* ============================================
   6. EXPLOSION DE CŒURS
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
   7. DÉBALLAGE CADEAU
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

        this.btnUnwrap.addEventListener('click', () => {
            this.unwrap();
        });
        
        console.log('✅ Déballage initialisé');
    }

    unwrap() {
        if (this.unwrapped) return;
        this.unwrapped = true;

        console.log('🎁 Déballage...');

        const giftImg = document.getElementById('imgGiftBox');
        const btn = this.btnUnwrap;
        
        if (giftImg) giftImg.style.display = 'none';
        if (btn) btn.style.display = 'none';

        this.launchHeartsExplosion();

        setTimeout(() => this.showTransition(), 2000);
    }

    launchHeartsExplosion() {
        const heartExplosion = new HeartExplosion();
        heartExplosion.explode();
        
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

        if (unwrapSection) unwrapSection.classList.add('hidden');
        if (heroSection) heroSection.scrollIntoView({ behavior: 'smooth' });
        
        console.log('✅ Hero affiché');
    }
}

/* ============================================
   8. SLIDES CAROUSEL - Par Gandxo
   ============================================ */
class SlidesCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = [
            {
                image: IMAGES.comfort,
                title: 'Quand elle a besoin de réconfort',
                text: 'Journée difficile ? Patron stressant ? Elle rentre, serre la peluche 2 minutes. Sourire revenu. Stress disparu. Simple, efficace, quotidien.',
                stats: 'Cortisol ↓ 30% • Ocytocine ↑ 25%'
            },
            {
                image: IMAGES.sleep,
                title: 'Chaque soir au coucher',
                text: 'La peluche sur son lit. Rituel permanent. Endormissement 30% plus rapide. Sommeil profond. Elle ne dort plus jamais seule.',
                stats: '89% l\'emmènent au lit tous les soirs'
            },
            {
                image: IMAGES.perfume,
                title: 'Quand elle pense à vous',
                text: 'Elle sent la peluche. Votre parfum est là (4-8 semaines). Connexion instantanée. Vous êtes présent, même à 1000km.',
                stats: 'Mémoire olfactive : 4-8 semaines'
            },
            {
                image: IMAGES.travel,
                title: 'Quand elle voyage',
                text: 'Paris, Tokyo, New York... La peluche dans sa valise. TOUJOURS. Elle voyage avec un morceau de vous. Partout.',
                stats: '87% la prennent en voyage'
            }
        ];
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;
    }

    init() {
        const situationsSection = document.querySelector('.situations-timeline');
        if (!situationsSection) {
            console.warn('⚠️ Section situations introuvable');
            return;
        }

        this.injectCSS();
        this.createSlides(situationsSection);
        this.bindEvents();
        this.showSlide(0);
        this.startAutoPlay();
        
        // Force le chargement des images des slides
        this.preloadSlideImages();
        
        console.log('✅ Slides carousel initialisé par Gandxo');
    }

    preloadSlideImages() {
        this.slides.forEach((slide, index) => {
            const img = new Image();
            img.onload = () => console.log(`✅ Slide ${index + 1} image chargée`);
            img.onerror = () => console.error(`❌ Slide ${index + 1} image ERREUR : ${slide.image}`);
            img.src = slide.image;
        });
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
                background: #f0f0f0;
            }
            .slide {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.8s ease, visibility 0.8s ease;
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
                background: #e0e0e0;
            }
            .slide-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block !important;
                opacity: 1 !important;
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
                                <img src="${slide.image}" alt="${slide.title}" class="slide-image" loading="eager">
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
                <button class="slide-nav slide-prev" id="slidePrev" type="button">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slide-nav slide-next" id="slideNext" type="button">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="slide-dots">
                    ${this.slides.map((_, i) => `
                        <button class="slide-dot ${i === 0 ? 'active' : ''}" type="button"></button>
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
    }

    showSlide(index) {
        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.slide-dot').forEach(d => d.classList.remove('active'));
        
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-dot');
        
        if (slides[index]) {
            slides[index].classList.add('active');
            // Force l'affichage de l'image
            const img = slides[index].querySelector('.slide-image');
            if (img) {
                img.style.display = 'block';
                img.style.opacity = '1';
            }
        }
        if (dots[index]) dots[index].classList.add('active');
        
        this.currentSlide = index;
        console.log(`📸 Slide ${index + 1} affiché : ${this.slides[index].image}`);
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
   9. ORDER FORM AVEC VALIDATION FACILE
   ============================================ */
class OrderForm {
    constructor() {
        this.form = document.getElementById('orderForm');
    }

    init() {
        if (!this.form) return;
        
        // Validation simple en temps réel
        this.addRealTimeValidation();
        
        // Soumission du formulaire
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitOrder();
            }
        });
        
        console.log('✅ Formulaire initialisé avec validation');
    }

    addRealTimeValidation() {
        // Nom
        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.addEventListener('blur', () => {
                this.validateField('name', nameInput.value, 
                    v => v.length >= 3, 
                    'Le nom doit contenir au moins 3 caractères');
            });
        }

        // Téléphone
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('blur', () => {
                this.validateField('phone', phoneInput.value, 
                    v => v.length >= 8, 
                    'Le numéro doit contenir au moins 8 chiffres');
            });
        }

        // Email (optionnel mais si rempli doit être valide)
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                if (emailInput.value) {
                    this.validateField('email', emailInput.value, 
                        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 
                        'Email invalide');
                } else {
                    this.clearError('email');
                }
            });
        }

        // Ville
        const cityInput = document.getElementById('city');
        if (cityInput) {
            cityInput.addEventListener('change', () => {
                this.validateField('city', cityInput.value, 
                    v => v !== '', 
                    'Veuillez choisir une ville');
            });
        }

        // Adresse
        const addressInput = document.getElementById('address');
        if (addressInput) {
            addressInput.addEventListener('blur', () => {
                this.validateField('address', addressInput.value, 
                    v => v.length >= 10, 
                    'L\'adresse doit contenir au moins 10 caractères');
            });
        }

        // Paiement
        const paymentInput = document.getElementById('payment');
        if (paymentInput) {
            paymentInput.addEventListener('change', () => {
                this.validateField('payment', paymentInput.value, 
                    v => v !== '', 
                    'Veuillez choisir un mode de paiement');
            });
        }
    }

    validateField(fieldName, value, validationFn, errorMessage) {
        const errorSpan = document.getElementById(`${fieldName}-error`);
        const input = document.getElementById(fieldName);
        
        if (!validationFn(value)) {
            if (errorSpan) {
                errorSpan.textContent = errorMessage;
                errorSpan.style.color = '#DC143C';
                errorSpan.style.fontSize = '0.9rem';
                errorSpan.style.marginTop = '0.5rem';
                errorSpan.style.display = 'block';
            }
            if (input) {
                input.style.borderColor = '#DC143C';
            }
            return false;
        } else {
            this.clearError(fieldName);
            return true;
        }
    }

    clearError(fieldName) {
        const errorSpan = document.getElementById(`${fieldName}-error`);
        const input = document.getElementById(fieldName);
        
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
        if (input) {
            input.style.borderColor = '#E0E0E0';
        }
    }

    validateForm() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value.trim();
        const payment = document.getElementById('payment').value;

        let isValid = true;

        // Validation nom
        if (!this.validateField('name', name, v => v.length >= 3, 'Le nom doit contenir au moins 3 caractères')) {
            isValid = false;
        }

        // Validation téléphone
        if (!this.validateField('phone', phone, v => v.length >= 8, 'Le numéro doit contenir au moins 8 chiffres')) {
            isValid = false;
        }

        // Validation email (si rempli)
        if (email && !this.validateField('email', email, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Email invalide')) {
            isValid = false;
        }

        // Validation ville
        if (!this.validateField('city', city, v => v !== '', 'Veuillez choisir une ville')) {
            isValid = false;
        }

        // Validation adresse
        if (!this.validateField('address', address, v => v.length >= 10, 'L\'adresse doit contenir au moins 10 caractères')) {
            isValid = false;
        }

        // Validation paiement
        if (!this.validateField('payment', payment, v => v !== '', 'Veuillez choisir un mode de paiement')) {
            isValid = false;
        }

        if (!isValid) {
            // Scroll vers le premier champ en erreur
            const firstError = document.querySelector('.error-message:not(:empty)');
            if (firstError) {
                firstError.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        return isValid;
    }

    submitOrder() {
        console.log('📝 Commande validée, soumission...');
        
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.add('active');
            
            // Optionnel : Réinitialiser le formulaire
            this.form.reset();
            
            // Effacer les erreurs
            ['name', 'phone', 'email', 'city', 'address', 'payment'].forEach(field => {
                this.clearError(field);
            });
        }
    }
}

/* ============================================
   10. FONCTIONS GLOBALES
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
   11. INITIALISATION GLOBALE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SITE DÉMARRÉ !');
    
    // 1. Cacher loading + afficher quiz
    hideLoadingInstantly();
    
    // 2. Précharger images
    preloadImages();
    
    // 3. Injecter images (délai court pour DOM ready)
    setTimeout(() => injectImages(), 300);
    
    // 4. Quiz psychologue
    const quiz = new QuizManager();
    quiz.init();
    
    // 5. Déballage
    const giftUnwrap = new GiftUnwrap();
    giftUnwrap.init();
    
    // 6. Slides carousel
    const slidesCarousel = new SlidesCarousel();
    slidesCarousel.init();
    
    // 7. Formulaire commande
    const orderForm = new OrderForm();
    orderForm.init();
    
    console.log('✅ Toutes les classes initialisées');
});
// ========== COMPTE À REBOURS VERS LE 14 FÉVRIER 2026 ==========
function updateCountdown() {
    // Date cible : 14 février 2026 à 23h59:59
    const targetDate = new Date('February 14, 2026 23:59:59').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        // C'est fini !
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.querySelector('.countdown-wrapper').classList.add('expired');
        return;
    }

    // Calculer les jours, heures, minutes, secondes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Mettre à jour l'affichage (avec zéros devant si < 10)
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Lancer le countdown au chargement
updateCountdown();

// Mettre à jour chaque seconde
setInterval(updateCountdown, 1000);

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
        50% { transform: scale(1.1); }
    }
    .hidden {
        display: none !important;
    }
    .pulse {
        animation: heartPulse 2s ease infinite;
    }
    .error-message {
        display: none;
        color: #DC143C;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(style);

console.log('📄 Script chargé complètement');
