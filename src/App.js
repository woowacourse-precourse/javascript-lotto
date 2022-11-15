const { Console, Random } = require('@woowacourse/mission-utils');
const { PRIZE, INPUT_MESSAGE } = require('./constants/constants');
const Budget = require('./Budget');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const GetResult = require('./GetResult');

const randomNumbersArray = [];
const inputObject = {
  budget: '',
  numbers: [],
  bonus: '',
};

function getBonusNumber() {
  Console.readLine(INPUT_MESSAGE.BONUS, (answer) => {
    const bonusNum = new Bonus(inputObject.numbers, Number(answer));
    inputObject.bonus = bonusNum.getBonus();
    Console.print('');
    new GetResult(randomNumbersArray, inputObject);
  });
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
      inputObject.numbers.push(element);
    });
    Console.print('');
    getBonusNumber();
  });
}

function getRandomNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomNumbers;
}

function printNumberList() {
  randomNumbersArray.forEach((element) => {
    Console.print(`[${element.join(', ')}]`);
  });
  Console.print('');
  getLottoNumbers();
}

function getRandomNumberList() {
  for (let i = 0; i < inputObject.budget / 1000; i++) {
    const randomNumbers = getRandomNumbers();
    randomNumbersArray.push(randomNumbers);
  }
  printNumberList();
}

function startLotto() {
  Console.print(`${inputObject.budget / 1000}개를 구매했습니다.`);
  getRandomNumberList();
}
function getBudget() {
  Console.readLine(INPUT_MESSAGE.BUDGET, (answer) => {
    const gameBudget = new Budget(Number(answer));
    inputObject.budget = gameBudget.getBudget();
    Console.print('');
    startLotto();
  });
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
