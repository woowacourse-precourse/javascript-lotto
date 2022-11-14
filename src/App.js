const { Console, Random } = require("@woowacourse/mission-utils");
const Budget = require('./input/Budget')
const Lotto = require('./input/Lotto')
const Bonus = require('./input/Bonus')

const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}

const results = [0, 0, 0, 0, 0, 0]
const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000]
const RANK_MESSAGE = ['', 
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ', 
  '5개 일치 (1,500,000원) - ', 
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ', 
  '6개 일치 (2,000,000,000원) - ',
]

function getBudget() {
  Console.readLine('', (answer) => {
    const gameBudget = new Budget(Number(answer));
    inputObjects['budget'] = gameBudget.getBudget();
    getLottoNumbers();
  })
}

function inputValueToArray(inputValue) {
  const inputArray = inputValue.split(',')
  inputArray.forEach((element, index) => {
    inputArray[index] = Number(element.trim());
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
    getBonusNumber();
  })
}

function getBonusNumber() {
  Console.readLine('', (answer) => {
    const bonusNum = new Bonus(inputObjects['numbers'], Number(answer));
    inputObjects['bonus'] = bonusNum.getBonus();
    startLotto();
  })
}

function startLotto() {
  Console.print(`${inputObjects['budget']/1000}개를 구매했습니다.`);
  getRandomNumberList();
}

function getRandomNumber() {
  const randomNumber = Random.pickNumberInRange(1, 45);
  return randomNumber;
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

function getBonusResult(bonus) {
  return inputObjects['numbers'].includes(bonus);
}

function getNumbersResult(randomNumbers) {
  const sameNumbers = randomNumbers.filter((element) => {
    return inputObjects['numbers'].includes(element);
  })
  return sameNumbers;
}

function getResult(randomNumbers, bonus) {
  const sameNumbersCount = getNumbersResult(randomNumbers).length;
  const bonusResult = getBonusResult(bonus);

  if(sameNumbersCount===6) return 5;
  if(sameNumbersCount===5 && bonusResult===true) return 4;
  if(sameNumbersCount===5 && bonusResult===false) return 3;
  if(sameNumbersCount===4) return 2;
  if(sameNumbersCount===3) return 1;
  return 0;
}

function getRandomNumberList() {
  for(let i=0; i<inputObjects['budget']/1000; i++){
    const randomNumbers = getRandomNumbers();
    const result = getResult(randomNumbers, inputObjects['bonus']);
    Console.print(randomNumbers);
    results[result] += 1;
  }
  getResultStatics();
}

function getResultStatics() {
  const reward = results.reduce((acc, element, index) => {
    return acc + element * REWARDS[index];
  }, 0)
  printLottoResult(reward);
}

function printLottoResult(reward) {
  results.forEach((element, index) => {
    if(index === 0) return;
    Console.print(RANK_MESSAGE[index]+element+'개');
  })
  console.log(reward)
  const yield = (reward/inputObjects['budget']*100).toFixed(1);
  Console.print(`총 수익률은 ${yield}%입니다.`);
  finishLotto()
}

function finishLotto() {
  Console.close();
}

class App {
  constructor() {
    this.play();
  }

  play() {
    getBudget();
  }
}

module.exports = App;
test = new App();