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
    inputObjects['budget'] = gameBudget;
    getLottoNumbers()
  })
}

function getLottoNumbers(inputObjects) {
  Console.readLine('', (answer) => {
    const numbers = new Lotto(answer);
    numbers.forEach((element) => {
      inputObjects['numbers'].push(element);
    })
    getBonusNumber()
  })
}

function getBonusNumber(inputObjects) {
  Console.readLine('', (answer) => {
    const bonusNum = new Bonus(inputObjects['numbers'], answer);
    inputObjects['bonus'] = bonusNum;
    startLotto()
  })
}

function startLotto() {
  Console.print(`${inputObjects['budget']/1000}개를 구매했습니다.`)
  getRandomNumberList()
}

function getRandomNumber() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45)
  return randomNumber
}

function getRandomNumbers() {
  const randomNumbers = []
  while(randomNumbers.length < 6) {
    const randomNumber = makeRandomNumber();
    if(randomNumbers.includes(randomNumber)) continue;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function getRandomNumberList() {
  for(let i=0; i<budget/10; i++){
    const randomNumbers = getRandomNumbers()
    randomNumberList.push(randomNumbers)
    Console.print(randomNumbers)
  }
}

class App {
  play() {
    getBudget()
  }
}