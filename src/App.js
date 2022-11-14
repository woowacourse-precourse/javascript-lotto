const { Console } = require("@woowacourse/mission-utils");
const Budget = require('./input/Budget')
const Lotto = require('./input/Lotto')
const Bonus = require('./input/Bonus')

const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}

async function getInputs() {
  getBudget(inputObjects)
    .then(console.log('here'))
    .then(getLottoNumbers())
    .then(getBonusNumber())
}

async function getBudget(inputObjects) {
  Console.readLine('', (answer) => {
    const gameBudget = new Budget(Number(answer));
    inputObjects['budget'] = gameBudget;
  })
  return inputObjects;
}

async function getLottoNumbers(inputObjects) {
  Console.readLine('', (answer) => {
    const numbers = new Lotto(answer);
    numbers.forEach((element) => {
      inputObjects['numbers'].push(element);
    })
  })
  return inputObjects;
}

async function getBonusNumber(inputObjects) {
  Console.readLine('', (answer) => {
    const bonusNum = new Bonus(inputObjects['numbers'], answer);
    inputObjects['bonus'] = bonusNum;
  })
  return inputObjects;
}

class App {
  constructor() {
    this.play()
  }

  play() {
    getInputs().
      then()
  }
}

module.exports = App;
test = new App();