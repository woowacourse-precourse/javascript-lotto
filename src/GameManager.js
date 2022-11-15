const { Console, Random } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./constants/constants');
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

class GameManager {
  constructor() {
    this.getBudget();
  }

  startLotto() {
    Console.print(`${inputObject.budget / 1000}개를 구매했습니다.`);
    this.getRandomNumberList();
  }

  getBudget() {
    Console.readLine(INPUT_MESSAGE.BUDGET, (answer) => {
      const gameBudget = new Budget(Number(answer));
      inputObject.budget = gameBudget.getBudget();
      Console.print('');
      this.startLotto();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS, (answer) => {
      const bonusNum = new Bonus(inputObject.numbers, Number(answer));
      inputObject.bonus = bonusNum.getBonus();
      Console.print('');
      new GetResult(randomNumbersArray, inputObject);
    });
  }
  inputValueToArray(inputValue) {
    const inputArray = inputValue.split(',');
    inputArray.forEach((element, index) => {
      inputArray[index] = Number(element.trim());
    });
    return inputArray;
  }
  getLottoNumbers() {
    Console.readLine(INPUT_MESSAGE.LOTTO, (answer) => {
      const inputArray = this.inputValueToArray(answer);
      const lotto = new Lotto(inputArray);
      lotto.getNumbers().forEach((element) => {
        inputObject.numbers.push(element);
      });
      Console.print('');
      this.getBonusNumber();
    });
  }

  getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  printNumberList() {
    randomNumbersArray.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });
    Console.print('');
    this.getLottoNumbers();
  }

  getRandomNumberList() {
    for (let i = 0; i < inputObject.budget / 1000; i++) {
      const randomNumbers = this.getRandomNumbers();
      randomNumbersArray.push(randomNumbers);
    }
    this.printNumberList();
  }
}

module.exports = GameManager;
