const { Console } = require('@woowacourse/mission-utils');

const User = require('./User');
const Lotto = require('./Lotto');
const Drawing = require('./Drawing');
const { MESSAGE, AMOUNT_UNIT } = require('../src/utils/constants');
const { hasChar, hasCharExceptComma, isDivisible, hasDuplicate, isOutOfRange, parseNumbers } = require('./utils/utils');
const {
  InvalidAmountInputError,
  IndivisibleError,
  InvalidWinningNumberInputError,
  InvalidBonusNumberInputError,
  InvalidLottoNumberRangeError,
} = require('./lib/errors');

class App {
  constructor() {
    this.drawing = new Drawing();
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, amount => {
      const trimmedAmount = amount.trim();
      this.validateAmount(trimmedAmount);
      this.drawing.user = new User(trimmedAmount);

      this.printBoughtLottos(this.drawing.user.buyLotto());
      this.getWinningNumbers();
    });
  }

  validateAmount(amount) {
    if (hasChar(amount)) {
      throw new InvalidAmountInputError();
    }

    if (!isDivisible(amount, AMOUNT_UNIT)) {
      throw new IndivisibleError();
    }
  }

  printBoughtLottos({ quantity, lottos }) {
    Console.print('');
    Console.print(MESSAGE.QUANTITY_OF_PURCHASE(quantity));
    lottos.forEach(lotto => Console.print(lotto.toString()));
  }

  getWinningNumbers() {
    Console.print('');
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, numbers => {
      const trimmedNumbers = numbers.trim();
      this.validateWinningNumbers(trimmedNumbers);
      this.drawing.winningNumbers = new Lotto(parseNumbers(trimmedNumbers)).numbers;
      this.getBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (hasCharExceptComma(numbers)) {
      throw new InvalidWinningNumberInputError();
    }
  }

  getBonusNumber() {
    Console.print('');
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, number => {
      const trimmedNumber = number.trim();
      this.validateBonusNumber(trimmedNumber);
      this.drawing.bonusNumber = Number(trimmedNumber);
      this.printStatistics();
    });
  }

  validateBonusNumber(number) {
    if (hasChar(number)) {
      throw new InvalidBonusNumberInputError();
    }

    if (isOutOfRange(number)) {
      throw new InvalidLottoNumberRangeError();
    }

    if (hasDuplicate([...this.drawing.winningNumbers, Number(number)])) {
      throw new InvalidBonusNumberInputError();
    }
  }

  printStatistics() {
    const statistics = this.drawing.draw();

    Console.print(statistics);
    Console.close();
  }
}

// new App().play();
module.exports = App;
