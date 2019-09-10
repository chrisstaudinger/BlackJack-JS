export default class Deck {
	static allCards = []

	constructor(suit, value, type) {
		this.suit = suit
		this.value = value
		this.type = type || ''
		this.constructor.addInstance(this)
	}

	static addInstance(obj) {
		this.allCards.push(obj)
	}

	static shuffle(shuffleCount) {
		let cards = this.allCards
		for (let i = 0; i < shuffleCount; i++) {
			let rndNo = getRandomInt(0, 52);
			let card = cards[i];
			cards[i] = cards[rndNo];
			cards[rndNo] = card;
		}
		return cards
	}
	
	static dealPlayer() {
		let card = this.allCards.pop()
		console.log(`You are dealt a ${card.type}\n`)
		return card
	}

	static dealHouse() {
		let card = this.allCards.pop()
		console.log(`House is dealt a ${card.type}\n`)
		return card
	}
}

const aceHearts = new Deck('Hearts', 11, 'Ace of Hearts')
const aceDiamonds = new Deck('Diamonds', 11, 'Ace of Diamonds')
const aceClubs = new Deck('Clubs', 11, 'Ace of Clubs')
const aceSpades = new Deck('Spades', 11, 'Ace of Spades')

const twoHearts = new Deck('Hearts', 2, 'Two of Hearts')
const twoDiamonds = new Deck('Diamonds', 2, 'Two of Diamonds')
const twoClubs = new Deck('Clubs', 2, 'Two of Clubs')
const twoSpades = new Deck('Spades', 2, 'Two of Spades')

const threeHearts = new Deck('Hearts', 3, 'Three of Hearts')
const threeDiamonds = new Deck('Diamonds', 3, 'Three of Diamonds')
const threeClubs = new Deck('Clubs', 3, 'Three of Clubs')
const threeSpades = new Deck('Spades', 3, 'Three of Spades')

const fourHearts = new Deck('Hearts', 4, 'Four of Hearts')
const fourDiamonds = new Deck('Diamonds', 4, 'Four of Diamonds')
const fourClubs = new Deck('Clubs', 4, 'Four of Clubs')
const fourSpades = new Deck('Spades', 4, 'Four of Spades')

const fiveHearts = new Deck('Hearts', 5, 'Five of Hearts')
const fiveDiamonds = new Deck('Diamonds', 5, 'Five of Diamonds')
const fiveClubs = new Deck('Clubs', 5, 'Five of Clubs')
const fiveSpades = new Deck('Spades', 5, 'Five of Spades')

const sixHearts = new Deck('Hearts', 6, 'Six of Hearts')
const sixDiamonds = new Deck('Diamonds', 6, 'Six of Diamonds')
const sixClubs = new Deck('Clubs', 6, 'Six of Clubs')
const sixSpades = new Deck('Spades', 6, 'Six of Spades')

const sevenHearts = new Deck('Hearts', 7, 'Seven of Hearts')
const sevenDiamonds = new Deck('Diamonds', 7, 'Seven of Diamonds')
const sevenClubs = new Deck('Clubs', 7, 'Seven of Clubs')
const sevenSpades = new Deck('Spades', 7, 'Seven of Spades')

const eightHearts = new Deck('Hearts', 8, 'Eight of Hearts')
const eightDiamonds = new Deck('Diamonds', 8, 'Eight of Diamonds')
const eightClubs = new Deck('Clubs', 8, 'Eight of Clubs')
const eightSpades = new Deck('Spades', 8, 'Eight of Spades')

const nineHearts = new Deck('Hearts', 9, 'Nine of Hearts')
const nineDiamonds = new Deck('Diamonds', 9, 'Nine of Diamonds')
const nineClubs = new Deck('Clubs', 9, 'Nine of Clubs')
const nineSpades = new Deck('Spades', 9, 'Nine of Spades')

const tenHearts = new Deck('Hearts', 10, 'Ten of Hearts')
const tenDiamonds = new Deck('Diamonds', 10, 'Ten of Diamonds')
const tenClubs = new Deck('Clubs', 10, 'Ten of Clubs')
const tenSpades = new Deck('Spades', 10, 'Ten of Spades')

const jackHearts = new Deck('Hearts', 10, 'Jack of Hearts')
const jackDiamonds = new Deck('Diamonds', 10, 'Jack of Diamonds')
const jackClubs = new Deck('Clubs', 10, 'Jack of Clubs')
const jackSpades = new Deck('Spades', 10, 'Jack of Spades')

const queenHearts = new Deck('Hearts', 10, 'Queen of Hearts')
const queenDiamonds = new Deck('Diamonds', 10, 'Queen of Diamonds')
const queenClubs = new Deck('Clubs', 10, 'Queen of Clubs')
const queenSpades = new Deck('Spades', 10, 'Queen of Spades')

const kingHearts = new Deck('Hearts', 10, 'King of Hearts')
const kingDiamonds = new Deck('Diamonds', 10, 'King of Diamonds')
const kingClubs = new Deck('Clubs', 10, 'King of Clubs')
const kingSpades = new Deck('Spades', 10, 'King of Spades')

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export {getRandomInt}