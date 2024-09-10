// Total 78 cards
const tarotCards = [
  { image: '', description: '', song: '' },
  { image: '', description: '', song: '' },
  ];

// Draw random Card
function getRandomCard () {
  return tarotCards[Math.floor(Math.random()* tarotCards.length)];
};

// Draw cards based on the spread selection
function drawCards() {
  const spread = document.getElementById('flex').value;
  let cards = [];

  if (spread === 'daily-spread') {
      cards.push(getRandomCard());
  } else if (spread === 'pastPresentFuture-spread') {
      cards.push(getRandomCard(), getRandomCard(), getRandomCard());
  } else if (spread === 'specificIssue-spread') {
      cards.push(getRandomCard(), getRandomCard(), getRandomCard());
  }

  saveCardHistory(cards);
  displayCards(spread, cards);
};

// Display the drawn cards based on the selected spread
function displayCards(spread, cards) {
  // Hide all sections
  document.getElementById('daily-spread').style.display = 'none';
  document.getElementById('pastPresentFuture-spread').style.display = 'none';
  document.getElementById('specificIssue-spread').style.display = 'none';

  if (spread === 'daily-spread') {
      updateCard(document.getElementById('daily-card'), cards[0]);
      document.getElementById('daily-spread').style.display = 'flex';
  } else if (spread === 'pastPresentFuture-spread') {
      updateCard(document.getElementById('past-card'), cards[0]);
      updateCard(document.getElementById('present-card'), cards[1]);
      updateCard(document.getElementById('future-card'), cards[2]);
      document.getElementById('pastPresentFuture-spread').style.display = 'flex';
  } else if (spread === 'specificIssue-spread') {
      updateCard(document.getElementById('clarity-card1'), cards[0]);
      updateCard(document.getElementById('clarity-card2'), cards[1]);
      updateCard(document.getElementById('clarity-card3'), cards[2]);
      document.getElementById('specificIssue-spread').style.display = 'flex';
  }
};

// Update a card's image, description, and song
// cardElement represents the <div> with the image, description and songs.
function updateCard(cardElement, card) {
  cardElement.querySelector('img').src = card.image;
  cardElement.querySelector('p').textContent = card.description;
  cardElement.querySelector('audio').src = card.song;
};

// Add an event listener for the "Draw Again" button
document.querySelector('button').addEventListener('click', function() {
  drawCards();
});

// Store card selection history in localStorage
function saveCardHistory(cards) {
  let history = JSON.parse(localStorage.getItem('cardHistory')) || [];
  history.push({ date: new Date(), cards });
  localStorage.setItem('cardHistory', JSON.stringify(history));
};