// Updated Script.js with Slot Machine Reel Card Adjustments

const container = document.getElementById('scroll-container');

// Card types with weights, classes, and content templates
const cardTypes = [
    {
        type: 'Common Card',
        weight: 1000, // This card has a weight of 1000. If the total weight of all cards is 2000, this card has a 50% chance of being selected.
        className: 'common',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">📢</div>
                    <div class="text-container">
                        <h1>Advert</h1>
                        <p>What this product is actually built to serve you.</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Uncommon Card',
        weight: 400, // This card has a weight of 400. If the total weight of all cards is 2000, this card has a 20% chance of being selected.
        className: 'uncommon',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🍳</div>
                    <div class="text-container">
                        <h1>Recipe Video</h1>
                        <p>Looks good, but you’ll never make it.</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Rare Card',
        weight: 100, // This card has a weight of 100. If the total weight of all cards is 2000, this card has a 5% chance of being selected.
        className: 'rare',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">💎</div>
                    <div class="text-container">
                        <h1>Cute Animal Video</h1>
                        <p>So wholesome, it’s worth your time.</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Reel Card',
        weight: 0, // Starts at 0 but dynamically increases based on reelProbability.
        className: 'reel',
        templates: [
            () => {
                const randomImage = getRandomReelImage(); // Get a random image
                return `
                    <div class="card-wrapper">
                        <div class="reel-image-container">
                            <img src="${randomImage}" alt="Reel Symbol" />
                        </div>
                        <div class="text-container">
                            <h1>Slot Machine Reel</h1>
                            <p>Better Luck Next Time!</p>
                        </div>
                    </div>
                `;
            }
        ]
    }
];


const reelImages = [
    './Images/Bell.png',
    './Images/Bar.png',
    './Images/Cherries.png',
    './Images/Lemon.png',
    './Images/Watermelon.png',
    './Images/Banana.png',
    './Images/Seven.png',
    './Images/Grapes.png'
];

// Function to get a random image
function getRandomReelImage() {
    const randomIndex = Math.floor(Math.random() * reelImages.length);
    return reelImages[randomIndex];
}


// Adjustable Variables for Probability Management
let reelProbability = 0; // Starting probability for Reel Cards
const reelProbabilityIncrement = 0.01; // Increment (2%) per card generated
const reelMaxProbability = 1; // Maximum probability cap (100%)
const reduceOtherCardWeights = true; // Set to true to reduce other card weights as Reel Cards dominate
const weightReductionFactor = 0.95; // Reduce other weights by 10% every cycle (adjustable)

function getWeightedRandomCard() {
    const totalWeight = cardTypes.reduce((sum, card) => sum + card.weight, 0);
    let random = Math.random() * totalWeight;

    for (const card of cardTypes) {
        if (random < card.weight) return card;
        random -= card.weight;
    }
}

function createCard(cardType) {
    const card = document.createElement('div');
    card.className = `card ${cardType.className}`;
    // Pick a random template from the available options
    const randomTemplate = cardType.templates[Math.floor(Math.random() * cardType.templates.length)];
    card.innerHTML = randomTemplate();
    return card;
}

function createStartingCard() {
    const card = document.createElement('div');
    card.className = 'card starting';
    card.innerHTML = `
        <div class="card-wrapper">
            <div class="badge">Welcome</div>
            <div class="emoji">📜</div>
            <div class="text-container">
                <h1>Doomscroll Simulator</h1>
                <p>Welcome to the Doomscroll Simulator. Explore different types of posts, each with its own rarity. How much time will you spend chasing the rarest content?</p>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function adjustCardWeights() {
    if (reduceOtherCardWeights) {
        cardTypes.forEach(card => {
            if (card.type !== 'Reel Card' && card.weight > 1) {
                card.weight *= weightReductionFactor;
            }
        });
    }
}

function addCards(count = 10) {
    for (let i = 0; i < count; i++) {
        // Dynamically adjust Reel Card probability
        const reelCard = cardTypes.find(card => card.type === 'Reel Card');
        if (reelCard) {
            reelCard.weight = Math.min(reelProbability * 1000, 1000); // Adjust weight dynamically
        }

        // Generate a random card
        const cardType = getWeightedRandomCard();
        const card = createCard(cardType);
        container.appendChild(card);

        // Increment Reel Card probability
        reelProbability = Math.min(reelProbability + reelProbabilityIncrement, reelMaxProbability);

        // Reduce other card weights if enabled
        adjustCardWeights();
    }
}

function observeLastCard() {
    const cards = document.querySelectorAll('.card');
    const lastCard = cards[cards.length - 1];

    if (lastCard) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                addCards(10); // Add more cards when the last one is visible
                observer.unobserve(lastCard); // Stop observing the old last card
                observeLastCard(); // Observe the new last card
            }
        });
        observer.observe(lastCard);
    }
}

// Initial load of cards
createStartingCard(); // Add the starting card
addCards(50); // Start with more cards
observeLastCard(); // Start observing the last card
