const container = document.getElementById('scroll-container');

// Card types with weights, classes, and content templates
const cardTypes = [
    {
        type: 'Common Card',
        weight: 1000,
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
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">🛍️</div>
                    <div class="text-container">
                        <h1>Paid Promotion</h1>
                        <p>A product they probably don’t use, but they’re smiling!</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">😡</div>
                    <div class="text-container">
                        <h1>Ragebait</h1>
                        <p>Designed to make you angry and fuel division.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">🖱️</div>
                    <div class="text-container">
                        <h1>Clickbait</h1>
                        <p>You won’t believe what happens next… but it’s not worth it.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">🤖</div>
                    <div class="text-container">
                        <h1>AI-Generated</h1>
                        <p>Low-effort words or images from a robot.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">💰</div>
                    <div class="text-container">
                        <h1>Disguised Advert</h1>
                        <p>Looks like content, but it’s selling something.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge common">Common Post</div>
                    <div class="emoji">♻️</div>
                    <div class="text-container">
                        <h1>Recycled Meme</h1>
                        <p>You’ve seen it a hundred times already.</p>
                    </div>
                </div>
            `,
        ],
    },
    {
        type: 'Uncommon Card',
        weight: 200,
        className: 'uncommon',
        templates: [
            () => `
                <div class="card-wrapper">
                <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🤔</div>
                    <div class="text-container">
                        <h1>Mildly Interesting</h1>
                        <p>Oh, neat. But now it’s gone from your mind.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🍳</div>
                    <div class="text-container">
                        <h1>Recipe Video</h1>
                        <p>Looks good, but you’ll never make it.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🛑</div>
                    <div class="text-container">
                        <h1>Life Hack</h1>
                        <p>Dubious at best, harmful at worst.</p>
                    </div>
                </div>
            ` 
        ],
    },
    {
        type: 'Rare Card',
        weight: 50,
        className: 'rare',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="emoji">💎</div>
                    <div class="text-container">
                        <h1>Cute Animal Video</h1>
                        <p>So wholesome, it’s worth your time.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="emoji">💎</div>
                    <div class="text-container">
                        <h1>Trending Dance</h1>
                        <p>You might even try it yourself.</p>
                    </div>
                </div>
            `
        ],
    },
    {
        type: 'Epic Card',
        weight: 10,
        className: 'epic',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="emoji">👑</div>
                    <div class="text-container">
                        <h1>A Moving Story</h1>
                        <p>Tugs at the heartstrings and lingers.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="emoji">👑</div>
                    <div class="text-container">
                        <h1>Rare Creative Art</h1>
                        <p>Impressive and inspiring.</p>
                    </div>
                </div>
            `
        ],
    },
    {
        type: 'Legendary Card',
        weight: 1,
        className: 'legendary',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="emoji">🏆</div>
                    <div class="text-container">
                        <h1>Life-Changing Advice</h1>
                        <p>Resonates deeply with the viewer.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="emoji">🏆</div>
                    <div class="text-container">
                        <h1>Incredible Success Story</h1>
                        <p>Leaves you inspired for days.</p>
                    </div>
                </div>
            `
        ],
    },
    {
        type: 'Mythic Card',
        weight: 0.01,
        className: 'mythic',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="emoji">🐉</div>
                    <div class="text-container">
                        <h1>The Illusion</h1>
                        <p>The ultimate prize, or so it seems. Was it worth the chase?</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="emoji">🐉</div>
                    <div class="text-container">
                        <h1>Perfect Ideal</h1>
                        <p>An unreachable standard, always just out of reach.</p>
                    </div>
                </div>
            `
        ],
    }
];


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


function addCards(count = 10) {
    for (let i = 0; i < count; i++) {
        const cardType = getWeightedRandomCard();
        const card = createCard(cardType);
        container.appendChild(card);
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
addCards(50); // Start with more cards
observeLastCard(); // Start observing the last card

