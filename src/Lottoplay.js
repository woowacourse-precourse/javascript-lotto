const { Console, Random } = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE, ERROR_MESSAGE } = require("../src/constant/message");
const { CONSTANTS } = require("./constant/constants");

class LottoPlay {
  lottoes;

  constructor() {
    this.play();
  }

  play() {
    Console.readLine(CONSOLE_MESSAGE.INPUT_MONEY_MESSAGE, (amount) => {
      this.validateAmountUnit(amount);
      this.lottoes = this.countLotto(amount);
      this.printCountedLottoes();
      this.printRandomLottoes();
    });
  }

  countLotto(amount) {
    return amount / CONSTANTS.LOTTO_PRICE;
  }
  printCountedLottoes() {
    Console.print(`\n${this.lottoes}개를 구매했습니다.`);
  }
  validateAmountUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_UNIT);
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
}

const lottoplay = new LottoPlay();
lottoplay;

module.exports = LottoPlay;
