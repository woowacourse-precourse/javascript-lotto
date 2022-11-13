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
    Console.readLine(Message.REQUEST_PURCHASE_MONEY_INPUT, (input) => {
      const money = Number(input);
      this.purchaseMoney = money;
      this.purchaseCount = money / Money.UNIT;
      this.validatePurchaseMoney();
      Message.printPurchase(this.purchaseCount);
      this.createLotto();
      Message.printLottos(this.myLottos);
      this.requestWinningNumbersInput();
    });
  }

  validatePurchaseMoney() {
    if (this.purchaseMoney < Money.UNIT) {
      throw new Error(Message.ERROR_MINIMUM_MONEY_INPUT);
    }
    if (Number.isNaN(this.purchaseMoney)) {
      throw new Error(Message.ERROR_NUMBER_ONLY);
    }
    if (!Number.isInteger(this.purchaseCount)) {
      throw new Error(Message.ERROR_1000_UNIT_ONLY);
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
    Console.readLine(Message.REQUEST_WINNING_NUMBERS_INPUT, (input) => {
      const numbers = input.split(',').map((digit) => Number(digit));
      const winningLotto = new Lotto(numbers);
      this.winningNumbers = winningLotto.getNumbers();
      this.requestBonusNumberInput();
    });
  }

  requestBonusNumberInput() {
    Console.readLine(Message.REQUEST_BONUS_NUMBER_INPUT, (input) => {
      this.bonusNumber = Number(input);
      this.validateBonusNumber();
      this.getResult();
      Message.printResult(this.purchaseMoney, this.result);
      Console.close();
    });
  }

  validateBonusNumber() {
    if (
      Number.isNaN(this.bonusNumber)
      || !Number.isInteger(this.bonusNumber)
      || this.bonusNumber < 1
      || this.bonusNumber > 45
    ) {
      throw new Error(Message.ERROR_BONUS_NUMBER_RANGE);
    }
    if (this.winningNumbers.includes(this.bonusNumber)) {
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
