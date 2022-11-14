const { Console, Random } = require("@woowacourse/mission-utils");
const {
  CONSOLE_MESSAGE,
  AMOUNT_ERROR_MESSAGE,
  LOTTO_NUM_ERROR_MESSAGE,
} = require("../src/constant/message");
const { CONSTANTS } = require("./constant/constants");
const Lotto = require("./Lotto");

class LottoPlay {
  lottoes;
  winNumber;
  bonusNumber;

  constructor() {
    this.play();
  }

  play() {
    Console.readLine(CONSOLE_MESSAGE.INPUT_MONEY_MESSAGE, (amount) => {
      this.validateAmount(amount);
      this.lottoes = this.countLotto(amount);
      this.printCountedLottoes();
      this.printRandomLottoes();
      this.getWinNumber();
    });
  }

  countLotto(amount) {
    return amount / CONSTANTS.LOTTO_PRICE;
  }
  printCountedLottoes() {
    Console.print(`\n${this.lottoes}개를 구매했습니다.`);
  }
  validateAmount(amount) {
    if (amount <= 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_PLUS_INPUT);
    }
    if (amount % 1000 !== 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_RIGHT_UNIT);
    }
    if (amount === "") {
      throw new Error(AMOUNT_ERROR_MESSAGE.REQUIRE_INPUT);
    }
    if (amount.includes(" ")) {
      throw new Error(AMOUNT_ERROR_MESSAGE.INCLUDED_SPACE);
    }
  }

  getRandomLottoArray() {
    return Random.pickUniqueNumbersInRange(
      CONSTANTS.LOTTO_MINIMUM_NUMBER,
      CONSTANTS.LOTTO_MAXIMUM_NUMBER,
      CONSTANTS.LOTTO_DIGIT_LENGTH
    );
  }
  createRandomLottoes() {
    const randomLottoNumbers = Array.from({ length: this.lottoes }, () => {
      const randomLottoArray = this.getRandomLottoArray();
      return randomLottoArray.sort((a, b) => a - b);
    });
    return randomLottoNumbers;
  }
  printRandomLottoes() {
    const randomLottoNumbers = this.createRandomLottoes();
    randomLottoNumbers.forEach((lottonumber) => {
      Console.print(lottonumber);
    });
  }

  getWinNumber() {
    Console.readLine(CONSOLE_MESSAGE.INPUT_WIN_NUMBER_MESSAGE, (winNum) => {
      this.winNumber = winNum.split(",").map(Number);
      new Lotto(this.winNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.validateBonusNumber(bonusNum);
      this.bonusNumber = [Number(bonusNum)];
    });
  }

  lottoNumberRange(element) {
    return (
      CONSTANTS.LOTTO_MINIMUM_NUMBER <= element &&
      CONSTANTS.LOTTO_MAXIMUM_NUMBER >= element
    );
  }
  isValidRange(bonusNum) {
    return this.lottoNumberRange(bonusNum);
  }
  isDuplicatedWinNumber(bonusNum) {
    return this.winNumber.includes(Number(bonusNum));
  }
  validateBonusNumber(bonusNum) {
    if (!this.isValidRange(bonusNum)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (this.isDuplicatedWinNumber(bonusNum)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.DUPLICATED_WITH_WIN_NUMBER);
    }
  }
}

const lottoplay = new LottoPlay();
lottoplay;

module.exports = LottoPlay;
