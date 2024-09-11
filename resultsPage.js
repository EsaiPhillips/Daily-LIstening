// Total 78 cards
const tarotCards = [
  { image: 'assets/0-theFool.jpg', title: 'The Fool', description: 'The fool symbolizes the embrace of new beginnings, the expansion of ones horizons, and the willingness to take risks guided by intuition. In simpler terms, it encourages you to listen to your inner feelings and take a leap of faith', song: '' },
  { image: 'assets/12-death.jpg', title: 'Death', description: 'Death represents transitions and new beginnings, urging us to accept change. In Love & Relationships, the Death card symbolizes the power of transformation for growth and transcendence. Career & Finances readings warn against resistance to change in order to succeed', song: '' },
  { image: 'assets/11-justice.jpg', title: 'Justice', description: 'Justice represents fairness, balance, and truth, and can encourage people to act with integrity and accept responsibility for their choices. It can also symbolize the need for difficult transitions and inner strength when seeking balance and fairness', song: '' },
  { image: 'assets/21-theWorld.jpg', title: 'The World', description: 'The World is a reminder that you have control over the direction of your life, which is why you should use the knowledge you have gained to help you evolve. The caveat is that you have to let go in order to experience the fresh start you are longing for and doing that can be hard', song: '' },
  { image: 'assets/theMagician.jfif', title: 'The Magicain', description: 'The Magician tarot card represents manifestation, skill, and the power to turn visions into reality; it’s the symbol of creative potential and resourcefulness', song: '' },
  { image: 'assets/Temperance.webp', title: 'Temperance', description: 'Temperance represents balance, harmony, and moderation, emphasizing the need for patience and compromise. It signifies finding a middle ground and integrating opposites', song: '' },
  { image: 'assets/theHangedMan.webp', title: 'The Hanged Man', description: 'The Hanged Man represents self-reflection, gaining new perspectives, letting go of control, sacrifice for greater understanding, and a period of necessary stillness. It symbolizes pause and surrender', song: '' },
  { image: 'assets/2-theHighPriestess.webp', title: 'The High Priestess', description: 'The High Priestess symbolizes intuition, hidden knowledge, and the subconscious; it can also represent the need for reflection', song: '' },
  { image: 'assets/15-theDevil.webp', title: 'The Devil', description: 'The Devil does not symbolize a specific religious or mythical demonic entity, but the darkness we hold within ourselves. Everyone is flawed in some way, and it is important we each address our own weaknesses', song: '' },
  { image: 'assets/16-theTower.jpg', title: 'The Tower', description: 'The Tower tells us that change is coming whether we are ready for it or not. This could be a personal tragedy, or some other shift that carries serious consequences. The higher you are, the further you have to fall', song: '' },
  { image: 'assets/3-theEmpress.jpg', title: 'The Empress', description: 'The Empress represents fertility, creativity and nurturing. Interpreting the card upright indicates successful prospects in love, career and finances', song: '' },
  { image: 'assets/7-theChariot.jpg', title: 'The Chariot', description: 'The Chariot encourages us to take charge of our lives and conquer challenges through willpower & determination. It symbolizes the need for balance between conflicting forces, confidence & ambition in order to achieve success', song: '' },
  { image: 'assets/17-theStar.jpg', title: 'The Star', description: 'The Star brings you the healing, steadying message that you are still you. Whatever has changed, whatever you have been through, that essence of you remains, strong and bright, burning within', song: '' },
  { image: 'assets/4-the emperor.webp', title: 'The Emperor', description: 'The Emperor represents leadership, discipline, and stability. This card embodies the power of a ruler who creates order and enforces rules, but it can also warn of tyranny, inflexibility, and potential abuse of power', song: '' },
  { image: 'assets/8-strength.webp', title: 'Strength', description: 'The Strength represents inner courage, emotional and mental resilience, and the power of compassion and patience. It symbolizes confidence in the face of major challenges and proclaims the value of mental over physical strength', song: '' },
  { image: 'assets/18-TheMoon.jpg', title: 'The Moon', description: 'The Moon represents the subconscious, mystery, and intuition. It symbolizes a journey through uncertainty, illusion, and emotional depth', song: '' },
  { image: 'assets/theHierophant.jpg', title: 'The Hierophant', description: 'he Hierophant represents traditional values, conformity, and adherence to established societal or spiritual norms. It symbolizes guidance, institutional beliefs, and the transmission of knowledge', song: '' },
  { image: 'assets/theHermit.jpg', title: 'The Hermit', description: 'The Hermit tarot card stands for introspection, solitude, and seeking inner wisdom. It represents a journey of self-discovery and contemplation', song: '' },
  { image: 'assets/theSun.jpg', title: 'The Sun', description: 'The Sun is a very positive tarot card that represents joy, success, vitality, enlightenment, and clarity. It embodies optimism and positivity', song: '' },
  { image: 'assets/6-theLovers.jpg', title: 'The Lovers', description: 'The Lovers represents love, harmony, and choices in relationships; it symbolizes strong connections and partnerships (usually romantic ones). It is also the symbol of mutual attraction. However', song: '' },
  { image: 'assets/10-wheelOfFortune.jpg', title: 'Wheel of Fortune', description: 'The Wheel of Fortune symbolizes the cyclical nature of life; it highlights luck, change, and destiny. This card represents life’s inevitable ups and downs, opportunities, and turning points', song: '' },
  { image: 'assets/20-judgement.jpg', title: 'Judgment', description: 'The Judgment tarot card is a symbol of awakening. It represents a pivotal moment of realization and redemption and calls for self-reflection, rebirth, and transformation. Take it as a recommendation to reassess your past decisions', song: '' },
  { image: 'assets/cups-ace.jpg', title: 'Ace of Cups', description: 'Ace of Cups represents issues of love, intimacy, deeper feelings, and compassion. It announces the new beginning of great possibility in this area of life. It can mark the start of a new relationship, or a deeper connection to an existing one', song: '' },
  { image: 'assets/cups-2.avif', title: 'Two of Cups', description: 'The Two of Cups symbolizes deep connections and partnerships, embodying unity, love, and mutual respect. It represents harmonious relationships and emotional balance', song: '' },
  { image: 'assets/Cups-3.jpg', title: 'Three of Cups', description: 'The Three of Cups can signify parties, collaboration, and friendship. When this card appears in your Tarot reading you can look forward to a happy event in your life. It signifies a group of people coming together with open hearts and minds to celebrate important events. It is a very positive card that indicates happy times, uplifting and positive energy and good feelings', song: '' },
  { image: 'assets/Cups-4.jpg', title: 'Four of Cups', description: 'The Four of Cups signifies a need to reevaluate your current state of mind and perspective.You may be experiencing discontentment or restlessness. This card encourages you to open yourself up to new possibilities and opportunities. Reflect on your past, but don’t dwell on it', song: '' },
  { image: 'assets/cups-5.jpg', title: 'Five of Cups', description: 'The Five of Cups symbolizes loss, regret, and focusing on what is gone. It reflects grief and disappointment but also points towards unacknowledged opportunities', song: '' },
  { image: 'assets/Cups-6.webp', title: 'Six of Cups', description: 'The Six of Cups symbolizes nostalgia, fond memories, and connections to the past, often reflecting a return to a more innocent time or a reunion', song: '' },
  { image: 'assets/Cups-7.jpg', title: 'Seven of Cups', description: 'The Seven of Cups symbolizes a multitude of choices and illusions, often leading to confusion and indecision. It represents daydreaming and wishful thinking', song: '' },
  { image: 'assets/Cups-8.jpg', title: 'Eight of Cups', description: 'Eight of Cups suggests you sense that something is missing, particularly on an emotional or spiritual level, and instead of waiting around for things to get better, you know you need to leave that unfulfilling situation', song: '' },
  { image: 'assets/cups-9.avif', title: 'Nine of Cups', description: 'The Nine of Cups represents satisfaction, emotional fulfillment, and wishes coming true. It symbolizes contentment and enjoyment of lifes pleasures', song: '' },
  { image: 'assets/Cups-10.webp', title: 'Ten of Cups', description: 'The Ten of Cups can represent the joys of a fulfilling life. It can also serve as a reminder that you are safe, secure, and loved', song: '' },
  { image: 'assets/Cups-11-page.jpg', title: 'Page of Cups', description: 'The Page of Cups is asking you to explore your creative, emotional self. This card often appears when you are being called to trust your intuition and be open to the multitude of intuitive messages coming your way. Look for synchronicities and signs from nature that will guide you on your path. Be open to possibilities and ready to discover new aspects of yourself', song: '' },
  { image: 'assets/cups-12-Knight.jpg', title: 'Knight of Cups', description: 'The Knight of Cups represents romance, charm, and idealism, often embarking on emotional or creative quests. It symbolizes a graceful, artistic spirit', song: '' },
  { image: 'assets/Cups-13-Queen.webp', title: 'Queen of Cups', description: 'The Queen of Cups symbolizes deep compassion, emotional security, and strong intuition. She represents nurturing, sensitivity, and psychic abilities', song: '' },
  { image: 'assets/cups-14-king.jpg', title: 'King of Cups', description: 'The King of Cups represents emotional balance, wisdom, and compassion. He embodies a calm, diplomatic, and supportive nature', song: '' },
  { image: 'assets/pentacles-ace.jpg', title: 'Ace of Pentacles', description: 'Ace of Pentacles represents new beginnings, opportunities, and the manifestation of abundance and prosperity. In its upright position, it signifies new financial or career opportunities, stability in relationships, and the potential to build wealth and success', song: '' },
  { image: 'assets/pentacles-2.jpg', title: 'Two of Pentacles', description: 'The Two of Pentacles represents balancing multiple responsibilities, adaptability, and effective financial management. It symbolizes juggling different aspects of life with flexibility', song: '' },
  { image: 'assets/pentacles-3.jpg', title: 'Three of Pentacles', description: 'he Three of Pentacles is traditionally the card of genius. This card symbolizes enterprise, success, and teamwork. See this card as an encouragement that you are on the right track. You are competent at what you do, and you are making progress', song: '' },
  { image: 'assets/pentacles-4.jpg', title: 'Four of Pentacles', description: 'You have everything you need to feel secure. Drawing the Four of Pentacles means you have built a solid foundation. Be careful not to become miserly and possessive over the things in your life', song: '' },
  { image: 'assets/pentacles-5.jpg', title: 'Five of Pentacles', description: 'The Five of Pentacles symbolizes financial hardship, insecurity, and struggle, often indicating feelings of isolation and neglect', song: '' },
  { image: 'assets/pentacles-6.jpg', title: 'Six of Pentacles', description: 'The Six of Pentacles represents generosity, charity, and a fair distribution of resources. It symbolizes giving and receiving support with balance and fairness', song: '' },
  { image: 'assets/pentacles-7.jpg', title: 'Seven of Pentacles', description: 'The Seven of Pentacles symbolizes patience, long-term planning, and the fruits of hard work and investment. It represents perseverance and the anticipation of future rewards', song: '' },
  { image: 'assets/pentacles-8.jpg', title: 'Eight of Pentacles', description: 'Eight of Pentacles symbolizes a period of labor, commitment, determination, and effort. Encouraging you to keep doing what you are doing as it will eventually lead to success', song: '' },
  { image: 'assets/pentacles-9.webp', title: 'Nine of Pentacles', description: 'The Nine of Pentacles represents financial independence, luxury, and self-sufficiency. It symbolizes achievement, comfort, and prosperity', song: '' },
  { image: 'assets/pentacles-10.jpg', title: 'Ten of Pentacles', description: 'The Ten of Pentacles is a card that generally denotes stable foundations, security, and contentment in all facets of your life. Since it relates to matters of money or possessions, like all Pentacle cards, you may anticipate very prosperous times in those aspects of your life. This card deals with family and denotes obligations, values, and support. When it occurs in your Tarot reading, life should be calm and collected', song: '' },
  { image: 'assets/pentacles-11-page.jpg', title: 'Page of Pentacles', description: 'The Page of Pentacles symbolizes opportunity, studiousness, and practical ambition. It represents diligence, focus, and the pursuit of new beginnings', song: '' },
  { image: 'assets/pentacles-12-Knight.jpg', title:'Knight of Pentacles', description: 'The Knight of Pentacles represents reliability, steadiness, and a methodical approach. It symbolizes hard work, practicality, and perseverance', song: ''},
  { image: 'assets/pentacles-queen.avif', title: 'Queen of Pentacles', description: 'The Queen of Pentacles symbolizes nurturing, practicality, and comfort. She represents financial stability, resourcefulness, and a down-to-earth nature', song: '' },
  { image: 'assets/pentacles-14-king.jpg', title: 'King of Pentacles', description: 'The King of Pentacles represents wealth, business acumen, and stability. He symbolizes leadership, practicality, and success. ', song: '' },
  { image: 'assets/wands-ace.jpg', title: 'Ace of Wands', description: 'Ace of wands represents the beginning of a journey, the birth of new ideas, and the initiation of creative projects. The hand emerging from the clouds in the card symbolizes the offer of new opportunities and the potential for growth', song: '' },
  { image: 'assets/wands-2.webp', title: 'Two of Wands', description: 'The Two of Wands represents planning, decision-making, and future vision, often indicating discovery, direction, and exploration of potential choices', song: '' },
  { image: 'assets/wands-3.jpg', title: 'Three of Wands', description: 'The Three of Wands coming upright means that you have planned your future, or are thinking of planning your future with more belief and conviction. This card indicates that you are happy with how things are going right now or that your plans are turning out to be fruitful. It also means that you are ready to take action and move forward with your plans. You are working to create a stable ground for your future', song: '' },
  { image: 'assets/wands-4.jpg', title: 'Four of Wands', description: 'The Four of Wands represents celebration, harmony, and stability, often indicating community, happiness, and successful milestones', song: '' },
  { image: 'assets/wands-5.webp', title: 'Five of Wands', description: 'The Five of Wands represents conflict, competition, and struggle, often indicating tension, disagreements, and rivalry', song: '' },
  { image: 'assets/wands-6.webp', title: 'Six of Wands', description: 'The Six of Wands represents victory, success, and recognition, often indicating achievement, confidence, and acclaim', song: '' },
  { image: 'assets/wands-7.jpg', title: 'Seven of Wands', description: 'The Seven of Wands represents defense, resilience, and determination, often indicating standing your ground, facing challenges, and perseverance', song: '' },
  { image: 'assets/wands-8.jpg', title: 'Eight of Wands', description: 'Eight of Wands holds a powerful message of swift action, rapid progression, and forward momentum. It urges us to seize opportunities and anticipate swift outcomes. Like rockets soaring through the sky, our desires are quickly moving from the realm of imagination to the realm of tangible existence', song: '' },
  { image: 'assets/wands-9.avif', title: 'Nine of Wands', description: 'The Nine of Wands represents persistence, resilience, and endurance, often indicating caution, a last stand, and setting boundaries', song: '' },
  { image: 'assets/wands-10.jpg', title: 'Ten of Wands', description: 'The Ten of Wands in the upright position indicates that you have been already struggling because of responsibilities, but now you have taken on more responsibilities, and a heavier workload which will be a lot of burdens for you to handle. This hard work is not permanent and you are almost at the finish line. You are gathering all your strength and resources and putting in all the hard work that is required so that soon you will get to enjoy the fruit of your success. With this card, you have to do whatever it takes to get to completion -- nothing can be allowed to interfere', song: '' },
  { image: 'assets/wands-11-page.jpg', title: 'Page of Wands', description: 'The Page of Wands represents enthusiasm, adventure, and exploration, often indicating a free spirit, creativity, and confidence', song: '' },
  { image: 'assets/wands-12-Knight.webp', title: 'Knight of Wands', description: 'The Knight of Wands represents energy, passion, and adventurousness, often indicating confidence, action-orientation, and charisma', song: '' },
  { image: 'assets/wands-13-queen.jpg', title: 'Queen of Wands', description: 'The Queen of Wands represents charisma, confidence, and independence, often indicating passion, determination, warmth, and vibrancy', song: '' },
  { image: 'assets/wands-14-king.jpg', title: 'King of Wands', description: 'The King of Wands represents leadership, vision, and entrepreneurship; it is often interpreted as a symbol of courage, ambition, and charisma', song: '' },
  { image: 'assets/swords-ace.jpg', title: 'Ace of Swords', description: 'Ace of Swords represents breakthroughs, new ideas, mental clarity, and success. It is a symbol of triumph and victory, but also reminds us that the path to success may be challenging', song: '' },
  { image: 'assets/swords-2.webp', title: 'Two of Swords', description: 'The Two of Swords symbolizes indecision, balance, and stalemate. It represents a need for resolution in the face of conflict and uncertainty', song: '' },
  { image: 'assets/swords-3.jpg', title: 'Three of Swords', description: 'One message this card brings is to cut some things loose. In spite of sentimental memories and emotional attachments, we need to let go of relationships that either cannot live up to their promise or have outlived the pleasure and support we once found in them. It might be healthier to disentangle yourself and start fresh', song: '' },
  { image: 'assets/swords-4.jpg', title: 'Four of Swords', description: 'A Four in this suit sends a message to take some time out, surrendering worldly concerns and retreating to a sheltered place of serenity away from the hustle and bustle. The oldest Tarot card images suggest a visit to the tombs of our ancestors, a place to contemplate your mortality and breathe in the dust of those who brought you here', song: '' },
  { image: 'assets/swords-5.jpg', title: 'Five of Swords', description: 'The Five of Swords represents conflict, defeat, and unethical victory, often signifying tension, aggression, and hostility', song: '' },
  { image: 'assets/swords-6.jpg', title: 'Six of Swords', description: 'The Six of Swords represents a period of transition, moving on, and embarking on a healing journey. It symbolizes change, recovery, and release', song: '' },
  { image: 'assets/swords-7.jpg', title: 'Seven of Swords', description: 'The Seven of Swords symbolizes deception, strategy, and sneakiness, often indicating caution, tactics, and secrecy', song: '' },
  { image: 'assets/swords-8.jpg', title: 'Eight of Swords', description: 'Eight of Swords signifies a feeling of being trapped, restricted, and backed into a corner. It represents negative thoughts, self-imposed limitations, and a victim mentality. You may find yourself imprisoned by your own beliefs and unable to see the possibilities for change', song: '' },
  { image: 'assets/swords-9.jpg', title: 'Nine of Swords', description: 'The Nine of Swords symbolizes anxiety, worry, fear, and mental torment, often indicating overwhelming thoughts and guilt', song: '' },
  { image: 'assets/swords-10.jpg', title: 'Ten of Swords', description: 'The Ten of this suit represents finality, the end of something. As is easy to grasp from the picture in many decks, there is no hope for revival here. A limit has been reached, a line has been crossed and there is no turning back. The waiting and wondering are over. There is no more ambiguity. You can rightly let go and move on, as there is no more progress to be made here', song: '' },
  { image: 'assets/swords-11-page.jpg', title: 'Page of Swords', description: 'The Page of Swords represents curiosity, mental agility, and vigilance, often indicating tactfulness, communication, and explorative thinking', song: '' },
  { image: 'assets/swords-12-knight.jpg', title: 'Knight of Swords', description: 'The Knight of Swords represents action, ambition, and assertiveness, often indicating speed, directness, and determination', song: '' },
  { image: 'assets/swords-13-queen.jpg', title: 'Queen of Swords', description: 'Queen of Swords represents intellect, wisdom, and clear judgment. Whether appearing upright or reversed, this card prompts us to embrace our intellectual prowess, set boundaries, and communicate effectively', song: '' },
  { image: 'assets/swords-14-king.jpg', title: 'King of Swords', description: 'The King of Swords symbolizes authority, rationality, and fairness, often indicating intellectual power, analytical thinking, and ethical judgment', song: '' },
  ];
const dailySpread = getElementById('daily-spread');
const dailyCard = getElementById('daily-card');

const pastPresentFutureSpread = getElementById('pastPresentFuture-spread');
const pastCard = getElementById('past-card');
const presentCard = getElementById('present-card');
const futureCard = getElementById('future-card');

const issueSpread = getElementById('specificIssue-spread');
const clarityCard1 = getElementById('clarity-card1');
const clarityCard2 = getElementById('clarity-card2');
const clarityCard3 = getElementById('clarity-card3');



// Draw cards based on the spread selection
function drawCards() {
  const spread = localStorage.getItem('readingType');

  if (spread === '1') {
      cards.push(getRandomCard());

  } else if (spread === '2') {
      cards.push(getRandomCard(), getRandomCard(), getRandomCard());
  } else if (spread === '3') {
      cards.push(getRandomCard(), getRandomCard(), getRandomCard());
  }

  saveCardHistory(cards);
  displayCards(spread, cards);
};
















// Draw random Card
function getRandomCard () {
  let index = Math.floor(Math.random()* tarotCards.length);
  tarotCards[index];
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
function updateCard() {
  cardElement.querySelector('img').src = card.image;
  cardElement.querySelector('p').textContent = card.description;
  cardElement.querySelector('audio').src = card.song;
}

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