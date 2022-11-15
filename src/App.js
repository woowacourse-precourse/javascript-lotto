const { Console, Random } = require("@woowacourse/mission-utils");
const { REWARDS, INPUT_MESSAGE } = require('./constants/constants');
const Budget = require('./input/Budget');
const Lotto = require('./input/Lotto');
const Bonus = require('./input/Bonus');
const GetResult = require('./Result/GetResult')
const PrintResult = require('./Result/PrintResult')

const randomNumbersArrays = [];
const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}

function getBonusNumber() {
  Console.readLine(INPUT_MESSAGE.BONUS, (answer) => {
    const bonusNum = new Bonus(inputObjects.numbers, Number(answer));
    inputObjects.bonus = bonusNum.getBonus();
    Console.print('')
    console.log(randomNumbersArrays)
    new GetResult(randomNumbersArrays, inputObjects);
  })
}

function inputValueToArray(inputValue) {
  const inputArray = inputValue.split(',');
  inputArray.forEach((element, index) => {
    inputArray[index] = Number(element.trim());
  });
  return inputArray;
}

function getLottoNumbers() {
  Console.readLine(INPUT_MESSAGE.LOTTO, (answer) => {
    const inputArray = inputValueToArray(answer);
    const lotto = new Lotto(inputArray);
    lotto.getNumbers().forEach((element) => {
      inputObjects.numbers.push(element);
    })
    Console.print('');
    getBonusNumber();
  })
}

function printNumberList() {
  randomNumbersArrays.forEach((element) => {
    Console.print(`[${element.join(', ')}]`);
  })
  Console.print('');
  getLottoNumbers();
}

function getRandomNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomNumbers;
}

function getRandomNumberList() {
  for(let i=0; i<inputObjects.budget/1000; i++) {
    const randomNumbers = getRandomNumbers();
    randomNumbersArrays.push(randomNumbers);
  }
  printNumberList()
}

function startLotto() {
  Console.print(`${inputObjects.budget/1000}개를 구매했습니다.`);
  getRandomNumberList();
}

function getBudget() {
  Console.readLine(INPUT_MESSAGE.BUDGET, (answer) => {
    const gameBudget = new Budget(Number(answer));
    inputObjects.budget = gameBudget.getBudget();
    Console.print('');
    startLotto();
  })
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
a = new App();