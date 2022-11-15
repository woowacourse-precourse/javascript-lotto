const { Console } = require("@woowacourse/mission-utils");
const Budget = require('./Budget')
const Lotto = require('./Lotto')
const Bonus = require('./Bonus')

const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}

async function getInputs() {
  getBudget()
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
  // console.log('budget을 받음')
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
    const bonusNum = new Bonus(answer);
    inputObjects['bonus'] = bonusNum;
  })
  return inputObjects;
}

class App {
  constructor() {
    this.play()
  }

  play() {
    const inputObjects = getInputs()
  }
}