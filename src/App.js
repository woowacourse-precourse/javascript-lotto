const { Console, Random } = require('@woowacourse/mission-utils');
const { PRIZE, INPUT_MESSAGE } = require('./constants/constants');
const Budget = require('./Budget');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const Print = require('./Print');

const randomNumbersArray = [];
const resultArray = [0, 0, 0, 0, 0, 0];
const inputObject = {
  budget: '',
  numbers: [],
  bonus: '',
};

function getResultStatics() {
  const reward = resultArray.reduce((acc, element, index) => {
    return acc + element * PRIZE[index];
  }, 0);
  new Print(reward, resultArray, inputObject.budget);
}
function getBonusResult(bonus) {
  return inputObject.numbers.includes(bonus);
}
function getNumbersResult(randomNumbers) {
  const sameNumbers = randomNumbers.filter((element) => {
    return inputObject.numbers.includes(element);
  });
  return sameNumbers;
}
function getResult(randomNumbers, bonus) {
  const sameNumbersCount = getNumbersResult(randomNumbers).length;
  const bonusResult = getBonusResult(bonus);
  if (sameNumbersCount === 6) return 5;
  if (sameNumbersCount === 5 && bonusResult === true) return 4;
  if (sameNumbersCount === 5 && bonusResult === false) return 3;
  if (sameNumbersCount === 4) return 2;
  if (sameNumbersCount === 3) return 1;
  return 0;
}
function countSameNumbers() {
  randomNumbersArray.forEach((element) => {
    const result = getResult(element, inputObject.bonus);
    resultArray[result] += 1;
  });
  getResultStatics();
}
function getBonusNumber() {
  Console.readLine(INPUT_MESSAGE.BONUS, (answer) => {
    const bonusNum = new Bonus(inputObject.numbers, Number(answer));
    inputObject.bonus = bonusNum.getBonus();
    Console.print('');
    countSameNumbers();
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
