const container = document.getElementById('scroll-container');

// Card types with weights, classes, and content templates
const cardTypes = [
    {
        type: 'Common Card',
        weight: 1000,
        className: 'common',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">🍋</div>
                <div class="text-container">
                    <h1>Common Card</h1>
                    <p>This is a common card with simple content.</p>
                </div>
            </div>
        `,
    },
    {
        type: 'Uncommon Card',
        weight: 200,
        className: 'uncommon',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">🍀</div>
                <div class="text-container">
                    <h1>Uncommon Card</h1>
                    <p>This is an uncommon card with interesting content.</p>
                </div>
            </div>
        `,
    },
    // Add other card types as before...
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
    card.innerHTML = cardType.template(); // Use the specific template
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
