const { Console } = require("@woowacourse/mission-utils");

const User = require("../src/User");
const Lotto = require("./Lotto");
const LottoGame = require("./LottoGame");
const { MESSAGE, ERROR } = require("../src/utils/constants");
const {
  hasChar,
  hasCharExceptComma,
  makeSplit,
  makeNumberArray,
  isOutOfRange,
} = require("../src/utils/utils");

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (amount) => {
      const trimmedAmount = amount.trim();
      this.validateInput(trimmedAmount);
      this.user = new User(trimmedAmount);
      this.printBoughtLottos();
      this.getWinningNumbers();
    });
  }

  validateInput(input) {
    if (hasChar(input)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }
  }

  printBoughtLottos() {
    Console.print(MESSAGE.QUANTITY_OF_PURCHASE(this.user.quantity));
    this.user.lottos.forEach((lotto) => Console.print(lotto.toString()));
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, (numbers) => {
      const trimmedNumbers = numbers.trim();
      this.validateWinningNumbers(trimmedNumbers);
      this.winningNumbers = new Lotto(this.parseNumbers(trimmedNumbers));
      this.getBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (hasCharExceptComma(numbers)) {
      throw new Error(ERROR.ONLY_NUMBER_AND_COMMA);
    }
  }

  parseNumbers(numbers) {
    const array = makeSplit(numbers);
    const numberArray = makeNumberArray(array);

    return numberArray;
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (number) => {
      const trimmedNumber = number.trim();
      this.validateBonusNumber(trimmedNumber);
      this.bonusNumber = Number(trimmedNumber);
      this.lottoGame = new LottoGame(
        this.user,
        this.winningNumbers,
        this.bonusNumber
      );
      this.lottoGame.start();
    });
  }

  validateBonusNumber(number) {
    const trimmedNumber = number.trim();

    if (hasChar(trimmedNumber)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (isOutOfRange([number])) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }

    if (this.winningNumbers.numbers.includes(Number(number))) {
      throw new Error(ERROR.DUPLICATED_BONUS);
    }
  }
}

module.exports = App;
