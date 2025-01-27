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
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🛍️</div>
                    <div class="text-container">
                        <h1>Paid Promotion</h1>
                        <p>A product they probably don't use, but they're smiling!</p>
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
                    <div class="emoji">💸</div>
                    <div class="text-container">
                        <h1>Get Rich Quick</h1>
                        <p>Pretending success is just a click away.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🛑</div>
                    <div class="text-container">
                        <h1>Life Hack</h1>
                        <p>Dubious at best, harmful at worst.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">📖</div>
                    <div class="text-container">
                        <h1>Motivational Quote</h1>
                        <p>Misattributed, sounds deep, but says nothing.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">📸</div>
                    <div class="text-container">
                        <h1>Overfiltered Selfie</h1>
                        <p>Unrealistic beauty for unrealistic standards.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">♻️</div>
                    <div class="text-container">
                        <h1>Recycled Meme</h1>
                        <p>You've seen it a hundred times already.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🎵</div>
                    <div class="text-container">
                        <h1>Perfect Cover Song</h1>
                        <p>One performance to save your day.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🔮</div>
                    <div class="text-container">
                        <h1>Zodiac Prediction</h1>
                        <p>Google 'the Barnum effect'</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🧹</div>
                    <div class="text-container">
                        <h1>Cleaning TikTok</h1>
                        <p>The same sparkling sink 50 different ways.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge common">Common Post</div>
                    <div class="emoji">🛒</div>
                    <div class="text-container">
                        <h1>Expensive Basic Item</h1>
                        <p>Why does this lamp cost $25,000?</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Uncommon Card',
        weight: 400,
        className: 'uncommon',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">✨</div>
                    <div class="text-container">
                        <h1>Viral Trend</h1>
                        <p>Gone tomorrow, forgotten forever.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🎟️</div>
                    <div class="text-container">
                        <h1>Nostalgia Bait</h1>
                        <p>A post designed to make millennials cry about the '90s.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🔗</div>
                    <div class="text-container">
                        <h1>Link In Bio MLM</h1>
                        <p>The hustle culture you didn't ask for.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">💼</div>
                    <div class="text-container">
                        <h1>Career Flex</h1>
                        <p>Started from the bottom, now… probably still there.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">📷</div>
                    <div class="text-container">
                        <h1>Perfect Life Post</h1>
                        <p>Their vacation looks amazing, but they cried the whole time.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🐦</div>
                    <div class="text-container">
                        <h1>Main Character</h1>
                        <p>Today's protagonist of the internet. Will they survive the backlash?</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🎢</div>
                    <div class="text-container">
                        <h1>Story Time</h1>
                        <p>An elaborate story that turns out to be completely made up.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🤷</div>
                    <div class="text-container">
                        <h1>Fake Neutrality</h1>
                        <p>'Both sides have a point,' but one side is clearly wrong.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🌐</div>
                    <div class="text-container">
                        <h1>Meta-Ironic Post</h1>
                        <p>A post so layered in irony, it loops back to sincerity.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge uncommon">Uncommon Post</div>
                    <div class="emoji">🚀</div>
                    <div class="text-container">
                        <h1>Elon Musk Spam</h1>
                        <p>A 'genius' tweet that doesn't make sense but gets 100k likes.</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Rare Card',
        weight: 100,
        className: 'rare',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">💎</div>
                    <div class="text-container">
                        <h1>Cute Animal Video</h1>
                        <p>So wholesome, it's worth your time.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🎭</div>
                    <div class="text-container">
                        <h1>Emotional Manipulation PSA</h1>
                        <p>The ultimate 'If you don't share this, you're a monster' post.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🕵️</div>
                    <div class="text-container">
                        <h1>Political Gaslighting</h1>
                        <p>A jaw-dropping reveal of manipulation in plain sight.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🧊</div>
                    <div class="text-container">
                        <h1>Climate Change Evidence</h1>
                        <p>Clear and undeniable proof that change is happening.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🐦</div>
                    <div class="text-container">
                        <h1>Checkmark Drama</h1>
                        <p>The chaos of someone paying for blue ticks on Twitter.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🌟</div>
                    <div class="text-container">
                        <h1>NFT 'Art' Sale</h1>
                        <p>A JPEG sells for millions, but nobody can explain why.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🗳️</div>
                    <div class="text-container">
                        <h1>Political Meme Gone Wrong</h1>
                        <p>Intended as satire, taken as propaganda.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🎥</div>
                    <div class="text-container">
                        <h1>Out of Context Clip</h1>
                        <p>A viral moment that's misleading without all the facts.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🛐</div>
                    <div class="text-container">
                        <h1>Meme Religion</h1>
                        <p>What started as a joke is now a subreddit cult.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge rare">Rare Post</div>
                    <div class="emoji">🧠</div>
                    <div class="text-container">
                        <h1>Fake Expert Take</h1>
                        <p>Someone pretends to be an expert on a topic they Googled once.</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Epic Card',
        weight: 25, // Even rarer than Rare (100)
        className: 'epic',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">🔥</div>
                    <div class="text-container">
                        <h1>Fake Drama</h1>
                        <p>Inflating minor issues for clicks.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">😟</div>
                    <div class="text-container">
                        <h1>Your Favourite Person Is A Creep</h1>
                        <p>An exposé that ruins their perfect image forever.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">👫</div>
                    <div class="text-container">
                        <h1>Parasocial Bestie Post</h1>
                        <p>The influencer shares an intimate moment… with their millions of fans.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">📲</div>
                    <div class="text-container">
                        <h1>Screenshot War</h1>
                        <p>Private DMs made public for maximum drama.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">💅</div>
                    <div class="text-container">
                        <h1>Girlboss Manifesto</h1>
                        <p>Breaking glass ceilings or just MLM recruitment? You decide.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">🥵</div>
                    <div class="text-container">
                        <h1>Thirst Trap Disguised as Art</h1>
                        <p>A deep caption doesn't make it less about the abs.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">🐇</div>
                    <div class="text-container">
                        <h1>Rabbit Hole Thread</h1>
                        <p>One weird post leads you down a 20-tweet investigative journey.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">🐦</div>
                    <div class="text-container">
                        <h1>Main Character Syndrome</h1>
                        <p>Today's protagonist of the internet. Will they survive the backlash?</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge epic">Epic Post</div>
                    <div class="emoji">🔗</div>
                    <div class="text-container">
                        <h1>Hustle Culture Overload</h1>
                        <p>Rise at 4am, skip breakfast, and make 7 figures by 30!</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Legendary Card',
        weight: 10, // Much rarer than Epic
        className: 'legendary',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge legendary">Legendary Post</div>
                    <div class="emoji">💎</div>
                    <div class="text-container">
                        <h1>Cute Animal Video</h1>
                        <p>So wholesome, it's worth your time.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge legendary">Legendary Post</div>
                    <div class="emoji">🖼️</div>
                    <div class="text-container">
                        <h1>AI-Generated Influencer</h1>
                        <p>They don't even exist, but they're more famous than you.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge legendary">Legendary Post</div>
                    <div class="emoji">🕵️</div>
                    <div class="text-container">
                        <h1>Suspiciously Specific Denial</h1>
                        <p>'I swear I didn't do that,' when nobody accused them of it.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge legendary">Legendary Post</div>
                    <div class="emoji">🦄</div>
                    <div class="text-container">
                        <h1>Crypto Influencer "Philanthropy"</h1>
                        <p>They donate a fraction of their earnings and want endless praise.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge legendary">Legendary Post</div>
                    <div class="emoji">🧪</div>
                    <div class="text-container">
                        <h1>Conspiracy Theory Soup</h1>
                        <p>Vaccines, 5G, and lizard people—now in one convenient thread!</p>
                    </div>
                </div>
            `
        ]
    },
    {
        type: 'Mythic Card',
        weight: 1, // Extremely rare
        className: 'mythic',
        templates: [
            () => `
                <div class="card-wrapper">
                    <div class="badge mythic">Mythic Post</div>
                    <div class="emoji">🛠️</div>
                    <div class="text-container">
                        <h1>Fix-It-Thread That Doesn't Work</h1>
                        <p>A guide that's clearly written by someone who's never done it.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge mythic">Mythic Post</div>
                    <div class="emoji">👑</div>
                    <div class="text-container">
                        <h1>Unproblematic Queen Revelation</h1>
                        <p>Turns out, they weren't so unproblematic after all.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge mythic">Mythic Post</div>
                    <div class="emoji">🐉</div>
                    <div class="text-container">
                        <h1>Rare Creative Art</h1>
                        <p>Impressive and inspiring.</p>
                    </div>
                </div>
            `,
            () => `
                <div class="card-wrapper">
                    <div class="badge mythic">Mythic Post</div>
                    <div class="emoji">🎯</div>
                    <div class="text-container">
                        <h1>The Ultimate Ragebait Post</h1>
                        <p>It's so inflammatory, you just have to reply.</p>
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
const reelProbabilityIncrement = 0.005; // Increment (0.5%) per card generated
const reelMaxProbability = 1; // Maximum probability cap (100%)
const reduceOtherCardWeights = true; // Set to true to reduce other card weights as Reel Cards dominate
const weightReductionFactor = 0.95; // Reduce other weights by 5% every cycle (adjustable)

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
