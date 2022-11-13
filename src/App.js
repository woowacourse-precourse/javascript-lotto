const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Message = require('./Message');
const Money = require('./Money');

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
    Console.readLine(Message.PURCHASE_MONEY_INPUT, (input) => {
      const money = Number(input);
      this.validatePurchaseMoney(money);
      this.purchaseMoney = money;
      this.purchaseCount = money / Money.UNIT;
      Message.printPurchase(this.purchaseCount);
      this.createLotto();
      Message.printLottos(this.myLottos);
      this.requestWinningNumbersInput();
    });
  }

  validatePurchaseMoney(money) {
    if (money < Money.UNIT) {
      throw new Error(Message.ERROR_MONEY_MINIMUM_INPUT);
    }
    if (Number.isNaN(money)) {
      throw new Error(Message.ERROR_MONEY_NUMBER_ONLY);
    }
    if (!Number.isInteger(money / Money.UNIT)) {
      throw new Error(Message.ERROR_MONEY_1000UNIT_ONLY);
    }
  }

  createLotto() {
    while (this.myLottos.length < this.purchaseCount) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getNumbers();
      this.myLottos.push(lottoNumbers);
    }
  }

  requestWinningNumbersInput() {
    Console.readLine(Message.WINNING_NUMBERS_INPUT, (input) => {
      const numbers = input.split(',').map((digit) => Number(digit));
      const winningLotto = new Lotto(numbers);
      this.winningNumbers = winningLotto.getNumbers();
      this.requestBonusNumberInput();
    });
  }

  requestBonusNumberInput() {
    Console.readLine(Message.BONUS_NUMBER_INPUT, (input) => {
      const number = Number(input)
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.getResult();
      Message.printResult(this.purchaseMoney, this.result);
      Console.close();
    });
  }

  validateBonusNumber(number) {
    if (
      Number.isNaN(number)
      || !Number.isInteger(number)
      || number < 1
      || number > 45
    ) {
      throw new Error(Message.ERROR_BONUS_NUMBER_RANGE);
    }
    if (this.winningNumbers.includes(number)) {
      throw new Error(Message.ERROR_BONUS_NUMBER_DUPLICATE);
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
}

module.exports = App;
