const drawCardsButton = document.getElementById('drawCardsButton');
const cardsContainer = document.getElementById('cardsContainer');
const cardsSlider = document.getElementById('cardsSlider');
const sliderValue = document.getElementById('sliderValue');
// Add references to the modal elements
const cardModal = document.getElementById('cardModal');
const closeBtn = document.getElementsByClassName('close')[0];
const cardName = document.getElementById('cardName');

const tarotCards = [
    {
        name: 'The Fool',
        description: 'A card that represents new beginnings, taking risks, and having a sense of adventure.',
        img: 'cards/the-fool.png'
      },
      {
        name: 'The Magician',
        description: 'A card that symbolizes power, skill, and mastery over the material world.',
        img: 'cards/the-magician.png'
      },
      {
        name: 'The High Priestess',
        description: 'A card that represents intuition, mystery, and inner wisdom.',
        img: 'cards/the-high-priestess.png'
      },
      {
        name: 'The Empress',
        description: 'A card that symbolizes abundance, nurturing, and creativity.',
        img: 'cards/the-empress.png'
      },
      {
        name: 'The Emperor',
        description: 'A card that represents authority, structure, and stability.',
        img: 'cards/the-emperor.png'
      },
      {
        name: 'The Hierophant',
        description: 'A card that represents tradition, spiritual guidance, and conformity.',
        img: 'cards/the-hierophant.png'
      },
      {
        name: 'The Lovers',
        description: 'A card that symbolizes love, passion, and choice.',
        img: 'cards/the-lovers.png'
      },
      {
        name: 'The Chariot',
        description: 'A card that represents ambition, determination, and control.',
        img: 'cards/the-chariot.png'
      },
      {
        name: 'Strength',
        description: 'A card that represents inner strength, courage, and self-control.',
        img: 'cards/strength.png'
      },
      {
        name: 'The Hermit',
        description: 'A card that symbolizes solitude, introspection, and wisdom.',
        img: 'cards/the-hermit.png'
      },
      {
        name: 'Wheel of Fortune',
        description: 'A card that represents change, cycles, and destiny.',
        img: 'cards/wheel-of-fortune.png'
      },
      {
        name: 'Justice',
        description: 'A card that symbolizes balance, fairness, and truth.',
        img: 'cards/justice.png'
      },
      {
        name: 'The Hanged Man',
        description: 'A card that represents sacrifice, letting go, and surrender.',
        img: 'cards/the-hanged-man.png'
      },
      {
        name: 'Death',
        description: 'A card that symbolizes transformation, letting go of the old, and rebirth.',
        img: 'cards/death.png'
      },
      {
        name: 'Temperance',
        description: 'A card that represents balance, harmony, and moderation.',
        img: 'cards/temperance.png'
      },
      {
        name: 'The Devil',
        description: 'A card that symbolizes temptation, materialism, and self-indulgence.',
        img: 'cards/the-devil.png'
      },
      {
        name: 'The Tower',
        description: 'A card that represents sudden change, upheaval, and chaos.',
        img: 'cards/the-tower.png'
      },
      {
        name: 'The Star',
        description: 'A card that symbolizes hope, inspiration, and faith.',
        img: 'cards/the-star.png'
      },
      {
        name: 'The Moon',
        description: 'A card that represents intuition, dreams, and the unconscious.',
        img: 'cards/the-moon.png'
      },
      {
        name: 'The Sun',
        description: 'A card that symbolizes success, vitality, and joy.',
        img: 'cards/the-sun.png'
      },
      {
        name: 'Judgment',
        description: 'A card that represents evaluation, redemption, and awakening.',
        img: 'cards/judgment.png'
      },
      {
        name: 'The World',
        description: 'A card that symbolizes completion, wholeness, and fulfillment.',
        img: 'cards/the-world.png'
      },
      {
        name: 'Ace of Wands',
        description: 'A card that represents new beginnings, creative energy, and enthusiasm.',
        img: 'cards/ace-of-wands.png'
      },
      {
        name: 'Two of Wands',
        description: 'A card that represents planning, decision-making, and partnership.',
        img: 'cards/two-of-wands.png'
      },
      {
        name: 'Three of Wands',
        description: 'A card that symbolizes expansion, growth, and exploration.',
        img: 'cards/three-of-wands.png'
      },
      {
        name: 'Four of Wands',
        description: 'A card that represents celebration, stability, and community.',
        img: 'cards/four-of-wands.png'
      },
      {
        name: 'Five of Wands',
        description: 'A card that symbolizes competition, conflict, and challenge.',
        img: 'cards/five-of-wands.png'
      },
      {
        name: 'Six of Wands',
        description: 'A card that represents victory, recognition, and progress.',
        img: 'cards/six-of-wands.png'
      },
      {
        name: 'Seven of Wands',
        description: 'A card that symbolizes perseverance, defense, and opposition.',
        img: 'cards/seven-of-wands.png'
        },
        {
        name: 'Eight of Wands',
        description: 'A card that represents movement, speed, and action.',
        img: 'cards/eight-of-wands.png'
        },
        {
        name: 'Nine of Wands',
        description: 'A card that represents resilience, courage, and determination.',
        img: 'cards/nine-of-wands.png'
        },
        {
        name: 'Ten of Wands',
        description: 'A card that symbolizes burden, responsibility, and overload.',
        img: 'cards/ten-of-wands.png'
        },
        {
        name: 'Page of Wands',
        description: 'A card that represents exploration, discovery, and learning.',
        img: 'cards/page-of-wands.png'
        },
        {
        name: 'Knight of Wands',
        description: 'A card that symbolizes adventure, passion, and action.',
        img: 'cards/knight-of-wands.png'
        },
        {
        name: 'Queen of Wands',
        description: 'A card that represents confidence, warmth, and independence.',
        img: 'cards/queen-of-wands.png'
        },
        {
        name: 'King of Wands',
        description: 'A card that symbolizes leadership, vision, and inspiration.',
        img: 'cards/king-of-wands.png'
        },
        {
        name: 'Ace of Cups',
        description: 'A card that represents new emotions, love, and creativity.',
        img: 'cards/ace-of-wands.png'
        },
        {
        name: 'Two of Cups',
        description: 'A card that represents partnership, harmony, and mutual understanding.',
        img: 'cards/two-of-cups.png'
        },
        {
        name: 'Three of Cups',
        description: 'A card that symbolizes celebration, friendship, and joy.',
        img: 'cards/three-of-cups.png'
        },
        {
        name: 'Four of Cups',
        description: 'A card that represents discontent, apathy, and introspection.',
        img: 'cards/four-of-cups.png'
        },
        {
        name: 'Five of Cups',
        description: 'A card that symbolizes loss, grief, and disappointment.',
        img: 'cards/five-of-cups.png'
        },
        {
        name: 'Six of Cups',
        description: 'A card that represents nostalgia, memories, and childhood.',
        img: 'cards/six-of-cups.png'
        },
        {
        name: 'Seven of Cups',
        description: 'A card that symbolizes fantasy, imagination, and choices.',
        img: 'cards/seven-of-cups.png'
        },
        {
        name: 'Eight of Cups',
        description: 'A card that represents moving on, letting go, and emotional transition.',
        img: 'cards/eight-of-cups.png'
        },
        {
        name: 'Nine of Cups',
        description: 'A card that represents happiness, satisfaction, and emotional fulfillment.',
        img: 'cards/nine-of-cups.png'
        },
        {
        name: 'Ten of Cups',
        description: 'A card that symbolizes harmony, family, and emotional well-being.',
        img: 'cards/ten-of-cups.png'
        },
        {
        name: 'Page of Cups',
        description: 'A card that represents creativity, imagination, and emotional sensitivity.',
        img: 'cards/page-of-cups.png'
        },
        {
        name: 'Knight of Cups',
        description: 'A card that symbolizes romance, charm, and emotional pursuit.',
        img: 'cards/knight-of-cups.png'
        },
        {
        name: 'Queen of Cups',
        description: 'A card that represents emotional intelligence, empathy, and intuition.',
        img: 'cards/queen-of-cups.png'
        },
        {
        name: 'King of Cups',
        description: 'A card that symbolizes emotional maturity, stability, and balance.',
        img: 'cards/king-of-cups.png'
        },
        {
        name: 'Ace of Swords',
        description: 'A card that represents new ideas, mental clarity, and decisiveness.',
        img: 'cards/ace-of-cups.png'
        },
        {
        name: 'Two of Swords',
        description: 'A card that represents indecision, stalemate, and balancing opposing forces.',
        img: 'cards/two-of-swords.png'
        },
        {
        name: 'Three of Swords',
        description: 'A card that symbolizes heartbreak, separation, and emotional pain.',
        img: 'cards/three-of-swords.png'
        },
        {
        name: 'Four of Swords',
        description: 'A card that represents rest, recuperation, and retreat.',
        img: 'cards/four-of-swords.png'
        },
        {
        name: 'Five of Swords',
        description: 'A card that symbolizes defeat, conflict, and betrayal.',
        img: 'cards/five-of-swords.png'
        },
        {
        name: 'Six of Swords',
        description: 'A card that represents transition, moving on, and progress.',
        img: 'cards/six-of-swords.png'
        },
        {
        name: 'Seven of Swords',
        description: 'A card that symbolizes deception, trickery, and secrecy'

        },
        {
            name: 'Eight of Swords',
            description: 'A card that represents limitation, fear, and being stuck.',
            img: 'cards/eight-of-swords.png'
            },
            {
            name: 'Nine of Swords',
            description: 'A card that symbolizes anxiety, fear, and nightmares.',
            img: 'cards/nine-of-swords.png'
            },
            {
            name: 'Ten of Swords',
            description: 'A card that represents betrayal, defeat, and crisis.',
            img: 'cards/ten-of-swords.png'
            },
            {
            name: 'Page of Swords',
            description: 'A card that represents curiosity, intellect, and critical thinking.',
            img: 'cards/page-of-swords.png'
            },
            {
            name: 'Knight of Swords',
            description: 'A card that symbolizes action, ambition, and assertiveness.',
            img: 'cards/knight-of-swords.png'
            },
            {
            name: 'Queen of Swords',
            description: 'A card that represents intelligence, independence, and strength.',
            img: 'cards/queen-of-swords.png'
            },
            {
            name: 'King of Swords',
            description: 'A card that symbolizes authority, power, and clear thinking.',
            img: 'cards/king-of-swords.png'
            },
            {
            name: 'Ace of Pentacles',
            description: 'A card that represents new opportunities, prosperity, and material wealth.',
            img: 'cards/ace-of-pentacles.png'
            },
            {
            name: 'Two of Pentacles',
            description: 'A card that represents balance, adaptability, and change.',
            img: 'cards/two-of-pentacles.png'
            },
            {
            name: 'Three of Pentacles',
            description: 'A card that symbolizes teamwork, collaboration, and skill.',
            img: 'cards/three-of-pentacles.png'
            },
            {
            name: 'Four of Pentacles',
            description: 'A card that represents material security, possessiveness, and conservatism.',
            img: 'cards/four-of-pentacles.png'
            },
            {
            name: 'Five of Pentacles',
            description: 'A card that symbolizes poverty, illness, and hardship.',
            img: 'cards/five-of-pentacles.png'
            },
            {
            name: 'Six of Pentacles',
            description: 'A card that represents generosity, giving, and receiving.',
            img: 'cards/six-of-pentacles.png'
            },
            {
            name: 'Seven of Pentacles',
            description: 'A card that symbolizes patience, perseverance, and waiting.',
            img: 'cards/seven-of-pentacles.png'
            },
            {
            name: 'Eight of Pentacles',
            description: 'A card that represents skill, diligence, and craftsmanship.',
            img: 'cards/eight-of-pentacles.png'
            },
            {
            name: 'Nine of Pentacles',
            description: 'A card that symbolizes luxury, self-sufficiency, and financial independence.',
            img: 'cards/nine-of-pentacles.png'
            },
            {
            name: 'Ten of Pentacles',
            description: 'A card that represents wealth, abundance, and family legacy.',
            img: 'cards/ten-of-pentacles.png'
            },
            {
            name: 'Page of Pentacles',
            description: 'A card that represents ambition, practicality, and earthy matters.',
            img: 'cards/page-of-pentacles.png'
            },
            {
            name: 'Knight of Pentacles',
            description: 'A card that symbolizes diligence, responsibility, and reliability.',
            img: 'cards/knight-of-pentacles.png'
            },
            {
            name: 'Queen of Pentacles',
            description: 'A card that represents practicality, nurturing, and financial security.',
            img: 'cards/queen-of-pentacles.png'
            },
            {
            name: 'King of Pentacles',
            description: 'A card that symbolizes wealth, success, and material prosperity.',
            img: 'cards/king-of-pentacles.png'
            },
];
  


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function drawCards() {
    cardsContainer.innerHTML = ''; // Clear the container
  
    const numberOfCardsToDraw = cardsSlider.value;
    const drawnCards = new Set();
    while (drawnCards.size < numberOfCardsToDraw) {
      const cardIndex = getRandomInt(tarotCards.length);
      drawnCards.add(tarotCards[cardIndex]);
    }
  
    drawnCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
  
      // Determine if the card should appear upside down
      const isUpsideDown = Math.random() >= 0.5;
  
      // Add the card image
      const cardImage = document.createElement('img');
      cardImage.src = card.img;
      cardImage.classList.add('card-image');
      if (isUpsideDown) {
        cardImage.classList.add('upside-down');
      }
      cardElement.appendChild(cardImage);
  
      // Add the card name
      const cardNameElement = document.createElement('p');
      cardNameElement.textContent = card.name;
      cardNameElement.classList.add('card-name');
      cardElement.appendChild(cardNameElement);
  
      // Add an event listener to open the modal when the card is clicked
      cardElement.addEventListener('click', () => {
        cardName.textContent = card.name + (isUpsideDown ? ' (Reversed)' : '');
        cardDescription.textContent = card.description;
        cardModalImage.src = card.img;
        cardModal.style.display = 'block';
      });
  
      cardsContainer.appendChild(cardElement);
    });
  }
  
  
  
  

  
  
  
  // Add event listeners to close the modal
  closeBtn.addEventListener('click', () => {
    cardModal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === cardModal) {
        cardModal.style.display = 'none';
    }
  });
  
  // Add event listener for the slider
  cardsSlider.addEventListener('input', () => {
    sliderValue.textContent = cardsSlider.value;
  });
  
  drawCardsButton.addEventListener('click', drawCards);