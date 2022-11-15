const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  AMOUNT_ERROR_MESSAGE,
  LOTTO_NUM_ERROR_MESSAGE,
  WINNING_STATICS_MESSAGE,
} = require("../src/constant/message");
const { CONSTANTS } = require("./constant/constants");
const Lotto = require("./Lotto");

class LottoPlay {
  lottoes;
  randomLottoNumbers;
  winNumber;
  bonusNumber;
  whatPlace = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    fourthPlace: 0,
    fifthPlace: 0,
    fail: 0,
  };

  constructor() {
    this.play();
  }

  play() {
    Console.readLine(INPUT_MESSAGE.INPUT_MONEY_MESSAGE, (amount) => {
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
  printCountedLottoes(amount) {
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
    this.randomLottoNumbers = randomLottoNumbers;
    randomLottoNumbers.forEach((lottonumber) => {
      Console.print(lottonumber);
    });
  }

  getWinNumber() {
    Console.readLine(INPUT_MESSAGE.INPUT_WIN_NUMBER_MESSAGE, (winNum) => {
      this.winNumber = winNum.split(",").map(Number);
      new Lotto(this.winNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.INPUT_BOUNUS_NUMBER_MESSAGE, (bonusNum) => {
      this.validateBonusNumber(bonusNum);
      this.bonusNumber = [Number(bonusNum)];
      this.getResult();
      this.printResult();
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

  checkSameNumber(winBonusNumber) {
    return this.randomLottoNumbers.map((element) => {
      return element.filter((x) => winBonusNumber.includes(x));
    });
  }
  checkPlace(value) {
    if (value.length === 3) {
      return (this.whatPlace.fifthPlace += 1);
    }
    if (value.length === 4) {
      return (this.whatPlace.fourthPlace += 1);
    }
    if (value.length === 5 && value.includes(Number(this.bonusNumber))) {
      return (this.whatPlace.secondPlace += 1);
    }
    if (value.length === 5) {
      return (this.whatPlace.thirdPlace += 1);
    }
    if (value.length === 6) {
      return (this.whatPlace.firstPlace += 1);
    }
  }
  getPlace(checkedSameNumber) {
    checkedSameNumber.forEach((value, index, array) => {
      this.checkPlace(value);
    });
  }
  getResult() {
    const winBonusNumber = [...this.winNumber, ...this.bonusNumber];
    const checkedSameNumber = this.checkSameNumber(winBonusNumber);
    this.getPlace(checkedSameNumber);
  }

  printResult() {
    Console.print(WINNING_STATICS_MESSAGE.WINNING_STATICS_START_MESSAGE);
    Console.print(
      `${WINNING_STATICS_MESSAGE.FIFTH_PLACE_MESSAGE} ${this.whatPlace.fifthPlace}개`
    );
    Console.print(
      `${WINNING_STATICS_MESSAGE.FOURTH_PLACE_MESSAGE} ${this.whatPlace.fourthPlace}개`
    );
    Console.print(
      `${WINNING_STATICS_MESSAGE.THIRD_PLACE_MESSAGE} ${this.whatPlace.thirdPlace}개`
    );
    Console.print(
      `${WINNING_STATICS_MESSAGE.SECOND_PLACE_MESSAGE} ${this.whatPlace.secondPlace}개`
    );
    Console.print(
      `${WINNING_STATICS_MESSAGE.FIRST_PLACE_MESSAGE} ${this.whatPlace.firstPlace}개`
    );
  }
}

const lottoplay = new LottoPlay();
lottoplay;

module.exports = LottoPlay;
