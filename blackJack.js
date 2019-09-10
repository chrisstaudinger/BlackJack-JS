import Deck, {getRandomInt} from './cards.js';
const readLineSync = require('readline-sync')

const playerName = () => readLineSync.question("Please enter your Player name: ")


const startGameOptions = [
    "Deal"
]

const aceOptions = [""]

const player = {
  name: playerName(),
  cards: []
}
const house = {
  name: "House",
  cards: []
}

const playerMoveOptions = ['Hit', 'Stand']

const cardTotalValue = (obj) => {
  let totalCardValue = 0
  obj.cards.forEach(card => {
    totalCardValue += card.value
  })
  return totalCardValue
}

const calcAce = (obj) => {
  if (cardTotalValue(obj) > 21) {
    obj.cards.forEach(card => {
      if (card.type.includes('Ace')) {
        card.value = 1
      }
    })
    return cardTotalValue(obj)
  }
}

const houseMove = (obj, opponent) => {
  let cardTotal = cardTotalValue(obj)
  while (cardTotal < 17) {
  obj.cards.push(Deck.dealHouse())
  calcAce(obj)
  cardTotal = cardTotalValue(obj)
  console.log(inRoundSummary(obj))
  console.log(inRoundResultHouse(obj, opponent))
  }
}

const bust = (opponent) => {
  console.log(`Bust!\n${opponent.name} wins!`)
  return process.exit("Thanks for playing :)")
}

const blackjack = (obj) => {
  console.log(`BlackJack! ${obj.name} wins!`)
  return process.exit("Thanks for playing :)")
}

const calculateResult = (obj, opponent) => {
  if (cardTotalValue(obj) > cardTotalValue(opponent)) {
    return `${obj.name} wins!`
  } else if (cardTotalValue(obj) < cardTotalValue(opponent)) {
    return `${opponent.name} wins!`
  } else {
    return `Push!\n${obj.name} and ${opponent.name} have tied!`
  }
}

const playerMoveMenu = (options) => {
  let userChoice = readLineSync.keyInSelect(options)
  switch (userChoice) {
    case 0:
      player.cards.push(Deck.dealPlayer())
      calcAce(player)
      console.log(inRoundSummary(player))
      console.log(inRoundResult(player, house))
      playerMoveMenu(options)
      break;
    case 1:
      console.log("You have chosen to sit\n")
      console.log(houseMove(house, player))
  }
}

const startGameMenu = (options) => {
  let userChoice = readLineSync.keyInSelect(options)
  switch (userChoice) {
    case 0:
      player.cards.push(Deck.dealPlayer())
      house.cards.push(Deck.dealHouse())
      player.cards.push(Deck.dealPlayer())
      console.log(inRoundSummary(player))
      console.log(inRoundResult(player, house))
      playerMoveMenu(playerMoveOptions)
      break;
  } 
}

const inRoundSummary = (obj) => {
  obj.cards.forEach(card => {
    console.log(`${obj.name} has a ${card.type}`)
  })
  let cardTotal = cardTotalValue(obj)
  return `${obj.name}'s total card value is ${cardTotal}\n`
}

const inRoundResult = (player, opponent) => {
  if (cardTotalValue(player) === 21) {
    return blackjack(player)
  } else if (cardTotalValue(player) > 21) {
    return bust(opponent)
  } else {
    return "It's your move. What would you like to do?"
  }
}

const inRoundResultHouse = (obj, opponent) => {
  if (cardTotalValue(obj) === 21) {
    return blackjack(obj)
  } else if (cardTotalValue(obj) > 21) {
    return bust(opponent)
  } else {
    console.log(calculateResult(obj, opponent))
  }
}


Deck.shuffle(30)
console.log(startGameMenu(startGameOptions))
