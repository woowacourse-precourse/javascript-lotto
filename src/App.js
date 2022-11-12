const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { Messages, winnings, getPurchaseMessage, getResultMessage } = require('./constants');

class App {
  constructor() {
    this.myMoney;
    this.winningNumbers;
    this.bonusNumber;
    this.myLottos = [];
    this.result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.requestMoneyInput();
  }

  requestMoneyInput() {
    Console.readLine(Messages.REQUEST_MONEY_INPUT, (input) => {
      const money = Number(input);
      this.validateMoney(money);
      this.myMoney = money;
      this.createLotto(this.myMoney);
      this.requestWinningNumbersInput();
    });
  }

  validateMoney(money) {
    if (money < 1000) {
      throw new Error(Messages.ERROR_MINIMUM_MONEY_INPUT);
    }
    if (Number.isNaN(money)) {
      throw new Error(Messages.ERROR_NUMBER_ONLY);
    }
    if (!Number.isInteger(money / 1000)) {
      throw new Error(Messages.ERROR_1000_UNITS_ONLY);
    }
  }

  createLotto(money) {
    const numberToCreate = money / 1000;
    const purchaseMessage = getPurchaseMessage(numberToCreate);
    Console.print(purchaseMessage);
    while (this.myLottos.length < numberToCreate) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getNumbers();
      this.myLottos.push(lottoNumbers);
      Console.print(`[${lottoNumbers.join(', ')}]`);
    }
  }

  requestWinningNumbersInput() {
    Console.readLine(Messages.REQUEST_WINNING_NUMBERS_INPUT, (input) => {
      const numbers = input.split(',').map((digit) => Number(digit));
      const winningLotto = new Lotto(numbers);
      this.winningNumbers = winningLotto.getNumbers();
      this.requestBonusNumberInput();
    });
  }

  requestBonusNumberInput() {
    Console.readLine(Messages.REQUEST_BONUS_NUMBER_INPUT, (input) => {
      const number = Number(input);
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.getResult();
      this.printResult();
      Console.close();
    });
  }

  validateBonusNumber(number) {
    if (Number.isNaN(number) || number < 1 || number > 45) {
      throw new Error(Messages.ERROR_BONUS_NUMBER_RANGE);
    }
    if (this.winningNumbers.includes(number)) {
      throw new Error(Messages.ERROR_BONUS_NUMBER_DUPLICATE);
    }
  }

  getResult() {
    this.myLottos.forEach((lotto) => {
      const matchNumbers = lotto.filter((number) => this.winningNumbers.includes(number));
      const hasBonusNumber = lotto.some((number) => number === this.bonusNumber);
      this.updateResult(matchNumbers, hasBonusNumber);
    });
  }

  updateResult(matchNumbers, hasBonusNumber) {
    const matchCount = matchNumbers.length;
    if (matchCount === 6) {
      this.result.first += 1;
    } else if (matchCount === 5 && hasBonusNumber) {
      this.result.second += 1;
    } else if (matchCount === 5 && !hasBonusNumber) {
      this.result.third += 1;
    } else if (matchCount === 4) {
      this.result.fourth += 1;
    } else if (matchCount === 3) {
      this.result.fifth += 1;
    }
  }

  printResult() {
    const { first, second, third, fourth, fifth } = this.result;
    const rateOfReturn = this.getRateOfReturn();
    const result = getResultMessage(first, second, third, fourth, fifth, rateOfReturn);
    Console.print(result);
  }

  getRateOfReturn() {
    const { first, second, third, fourth, fifth } = this.result;
    const totalWinnings = (
      (first * winnings.FIRST)
      + (second * winnings.SECOND)
      + (third * winnings.THIRD)
      + (fourth * winnings.FOURTH)
      + (fifth * winnings.FIFTH)
    );
    const rateOfReturn = (totalWinnings / this.myMoney * 100).toFixed(1);
    return rateOfReturn;
  }
}

module.exports = App;
