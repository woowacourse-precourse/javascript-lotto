const Lotto = require('./Lotto');
const { Console, Random } = require('@woowacourse/mission-utils');
const { UNIT, Messages, winnings, getPurchaseMessage, getResultMessage } = require('./constants');
const { isOutOfRange } = require('./isOutOfRange');

class App {
  constructor() {
    this.purchaseMoney;
    this.purchaseCount;
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
      this.purchaseMoney = money;
      this.purchaseCount = money / UNIT;
      this.validatePurchaseMoney();
      this.printPurchaseMessage();
      this.createLotto();
      this.printLottos();
      this.requestWinningNumbersInput();
    });
  }

  validatePurchaseMoney() {
    if (this.purchaseMoney < UNIT) {
      throw new Error(Messages.ERROR_MINIMUM_MONEY_INPUT);
    }
    if (Number.isNaN(this.purchaseMoney)) {
      throw new Error(Messages.ERROR_NUMBER_ONLY);
    }
    if (!Number.isInteger(this.purchaseCount)) {
      throw new Error(Messages.ERROR_1000_UNITS_ONLY);
    }
  }

  printPurchaseMessage() {
    const purchaseMessage = getPurchaseMessage(this.purchaseCount);
    Console.print(purchaseMessage);
}

  createLotto() {
    while (this.myLottos.length < this.purchaseCount) {
      const uniqueRandomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(uniqueRandomNumbers);
      const lottoNumbers = lotto.getNumbers();
      this.myLottos.push(lottoNumbers);
    }
  }

  printLottos() {
    this.myLottos.forEach((lotto) => {
      const lottoNumbers = lotto.join(', ');
      const lottoNumbersWithBrackets = `[${lottoNumbers}]`;
      Console.print(lottoNumbersWithBrackets);
    });
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
    if (isOutOfRange(number)) {
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
    const totalWinnings = (
      (first * winnings.FIRST)
      + (second * winnings.SECOND)
      + (third * winnings.THIRD)
      + (fourth * winnings.FOURTH)
      + (fifth * winnings.FIFTH)
    );
    const rateOfReturn = (totalWinnings / this.purchaseMoney * 100).toFixed(1);
    const result = getResultMessage(first, second, third, fourth, fifth, rateOfReturn);
    Console.print(result);
  }
}

module.exports = App;
