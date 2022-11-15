const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require('../constants/constants');
const Budget = require('../input/Budget');
const Lotto = require('../input/Lotto');
const Bonus = require('../input/Bonus');
const GetResult = require('../Result/GetResult')

const randomNumbersArrays = [];
const inputObjects = {
  'budget': '',
  'numbers': [],
  'bonus': '',
}

class Play {

  constructor() {
    this.getBudget();
  }

  getBudget() {
    Console.readLine(INPUT_MESSAGE.BUDGET, (answer) => {
      const gameBudget = new Budget(Number(answer));
      inputObjects.budget = gameBudget.getBudget();
      Console.print('');
      this.startLotto();
    })
  }

  startLotto() {
    Console.print(`${inputObjects.budget/1000}개를 구매했습니다.`);
    this.getRandomNumberList();
  }

  getRandomNumberList() {
    for(let i=0; i<inputObjects.budget/1000; i++) {
      const randomNumbers = this.getRandomNumbers();
      randomNumbersArrays.push(randomNumbers);
    }
    this.printNumberList()
  }

  getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  printNumberList() {
    randomNumbersArrays.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    })
    Console.print('');
    this.getLottoNumbers();
  }

  getLottoNumbers() {
    Console.readLine(INPUT_MESSAGE.LOTTO, (answer) => {
      const inputArray = this.inputValueToArray(answer);
      const lotto = new Lotto(inputArray);
      lotto.getNumbers().forEach((element) => {
        inputObjects.numbers.push(element);
      })
      Console.print('');
      this.getBonusNumber();
    })
  }

  inputValueToArray(inputValue) {
    const inputArray = inputValue.split(',');
    inputArray.forEach((element, index) => {
      inputArray[index] = Number(element.trim());
    });
    return inputArray;
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS, (answer) => {
      const bonusNum = new Bonus(inputObjects.numbers, Number(answer));
      inputObjects.bonus = bonusNum.getBonus();
      Console.print('')
      new GetResult(randomNumbersArrays, inputObjects);
    })
  }
}

module.exports = Play;