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
    {
        type: 'Rare Card',
        weight: 50,
        className: 'rare',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">💎</div>
                <div class="text-container">
                    <h1>Rare Card</h1>
                    <p>This is a rare card with special content.</p>
                </div>
            </div>
        `,
    },
    {
        type: 'Epic Card',
        weight: 10,
        className: 'epic',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">👑</div>
                <div class="text-container">
                    <h1>Epic Card</h1>
                    <p>This is an epic card with extraordinary content.</p>
                </div>
            </div>
        `,
    },
    {
        type: 'Legendary Card',
        weight: 1,
        className: 'legendary',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">🏆</div>
                <div class="text-container">
                    <h1>Legendary Card</h1>
                    <p>This is a legendary card with unique content.</p>
                </div>
            </div>
        `,
    },
    {
        type: 'Mythic Card',
        weight: 0.01,
        className: 'mythic',
        template: () => `
            <div class="card-wrapper">
                <div class="emoji">🐉</div>
                <div class="text-container">
                    <h1>Mythic Card</h1>
                    <p>This is a mythic card with legendary content.</p>
                </div>
            </div>
        `,
    },
];

// Function to pick a card type based on weights
function getWeightedRandomCard() {
  const totalWeight = cardTypes.reduce((sum, card) => sum + card.weight, 0);
  let random = Math.random() * totalWeight;

  for (const card of cardTypes) {
    if (random < card.weight) return card;
    random -= card.weight;
  }
}

// Function to create a card element
function createCard(cardType) {
  const card = document.createElement('div');
  card.className = `card ${cardType.className}`;
  card.innerHTML = cardType.template(); // Use the specific template
  return card;
}

// Function to add new cards
function addCards(count = 10) {
  for (let i = 0; i < count; i++) {
    const cardType = getWeightedRandomCard();
    const card = createCard(cardType);
    container.appendChild(card);
  }
}

// Infinite scroll logic
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // If scrolled near the bottom, add more cards
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    addCards(10); // Add 10 more cards
  }
});

// Initial load of cards
addCards(20);
