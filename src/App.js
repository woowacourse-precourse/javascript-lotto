const { Console, Random } = require("@woowacourse/mission-utils");

const User = require("../src/User");
const {
  NUMBER_COUNT,
  AMOUNT_UNIT,
  MIN_NUMBER,
  MAX_NUMBER,
  MESSAGE,
  ERROR,
  STATISTICS,
} = require("../src/utils/constants");
const {
  hasChar,
  hasCharExceptComma,
  makeSplit,
  makeNumberArray,
  isOutOfRange,
} = require("../src/utils/utils");
const Lotto = require("./Lotto");

class App {
  user;

  constructor() {
    this.user = new User();
  }

  play() {}

  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (amount) => {
      const trimmedAmount = amount.trim();
      if (this.validateInput(trimmedAmount)) {
        this.user.setPurchaseAmount = trimmedAmount;
      }
    });
  }

  validateInput(input) {
    if (hasChar(input)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }
    return true;
  }

  //구매 금액으로 로또 몇장 살 수 있는지 계산하기
  countAvailableQuantity(amount) {
    return Number(amount) / AMOUNT_UNIT;
  }

  //랜덤 번호 뽑아주기
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBER_COUNT
    );
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, (numbers) => {
      const trimmedNumbers = numbers.trim();
      this.validateWinningNumbers(trimmedNumbers);
      this.winningNumbers = new Lotto(this.parseNumbers(trimmedNumbers));
    });
  }

  validateBonusNumber(numbers) {
    if (hasCharExceptComma(numbers)) {
      throw new Error(ERROR.ONLY_NUMBER_AND_COMMA);
    }
  }

  parseNumbers(numbers) {
    const array = makeSplit(numbers);
    const numberArray = makeNumberArray(array);

    return numberArray;
  }

  //보너스 번호 입력 요청하기
  getBonusNumber() {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (number) => {
      console.log(number);
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
  }
}

module.exports = App;
