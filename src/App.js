const { Console, Random } = require("@woowacourse/mission-utils");
const Budget = require('./input/Budget')
const Lotto = require('./input/Lotto')
const Bonus = require('./input/Bonus')
const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}
const randomNumberList = []
function getBudget() {
  Console.readLine('', (answer) => {
    const gameBudget = new Budget(Number(answer));
    inputObjects['budget'] = gameBudget.getBudget();
    getLottoNumbers()
  })
}
function inputValueToArray(inputValue) {
  const inputArray = inputValue.split(',')
  inputArray.forEach((element, index) => {
    inputArray[index] = Number(element.trim())
  })
  return inputArray;
}
function getLottoNumbers() {
  Console.readLine('', (answer) => {
    const inputArray = inputValueToArray(answer)
    const lotto = new Lotto(inputArray);
    lotto.getNumbers().forEach((element) => {
      inputObjects['numbers'].push(element);
    })
    getBonusNumber()
  })
}
function getBonusNumber() {
  Console.readLine('', (answer) => {
    const bonusNum = new Bonus(inputObjects['numbers'], Number(answer));
    inputObjects['bonus'] = bonusNum.getBonus();
    startLotto()
  })
}
function startLotto() {
  Console.print(`${inputObjects['budget']/1000}개를 구매했습니다.`)
  getRandomNumberList()
}

function getRandomNumber() {
  const randomNumber = Random.pickNumberInRange(1, 45)
  return randomNumber
}

function getRandomNumbers() {
  const randomNumbers = []
  while(randomNumbers.length < 6) {
    const randomNumber = getRandomNumber();
    if(randomNumbers.includes(randomNumber)) continue;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function getRandomNumberList() {
  for(let i=0; i<inputObjects['budget']/1000; i++){
    const randomNumbers = getRandomNumbers()
    randomNumberList.push(randomNumbers)
    Console.print(randomNumbers)
  }
}
class App {
  constructor() {
    this.play()
  }
  play() {
    getBudget()
  }
}
module.exports = App;
test = new App();