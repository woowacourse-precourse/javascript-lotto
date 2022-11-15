const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  WINNING_STATICS_MESSAGE,
} = require("../src/constant/message");
const { CONSTANTS } = require("./constant/constants");
const Lotto = require("./Lotto");
const Validate = require("./Validate");

class App {
  amount;
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
    this.lotto = new Lotto();
    this.validate = new Validate();
  }

  play() {
    Console.readLine(INPUT_MESSAGE.INPUT_MONEY_MESSAGE, (amount) => {
      this.amount = amount;
      this.validate.validateAmount(amount);
      this.lottoes = this.countLotto(amount);
      this.printCountedLottoes(this.lottoes);
      this.printRandomLottoes();
      this.getWinNumber();
    });
  }
  countLotto(amount) {
    return amount / CONSTANTS.LOTTO_PRICE;
  }
  printCountedLottoes(lottoes) {
    Console.print(`\n${lottoes}개를 구매했습니다.`);
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
      const lottonumbers = lottonumber.join(", ");
      Console.print(`[${lottonumbers}]`);
    });
  }

  getWinNumber() {
    Console.readLine(INPUT_MESSAGE.INPUT_WIN_NUMBER_MESSAGE, (winNum) => {
      this.winNumber = winNum.split(",").map(Number);
      this.lotto.validate(this.winNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.INPUT_BOUNUS_NUMBER_MESSAGE, (bonusNum) => {
      this.bonusNumber = [Number(bonusNum)];
      this.validate.validateBonusNumber(bonusNum, this.winNumber);
      this.getResult();
      this.printResult();
      this.printRateOfReturn();
    });
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
  calculateRevenue() {
    const revenue =
      this.whatPlace.fifthPlace * CONSTANTS.FIFTH_PLACE_REWARD +
      this.whatPlace.fourthPlace * CONSTANTS.FOURTH_PLACE_REWARD +
      this.whatPlace.thirdPlace * CONSTANTS.THIRD_PLACE_REWARD +
      this.whatPlace.secondPlace * CONSTANTS.SECOND_PLACE_REWARD +
      this.whatPlace.firstPlace * CONSTANTS.FIRST_PLACE_REWARD;
    return revenue;
  }
  calculateRateOfReturn() {
    const revenue = this.calculateRevenue();
    const rateOfReturn = (revenue / this.amount) * 100;
    return rateOfReturn;
  }
  printRateOfReturn() {
    const rateOfReturn = this.calculateRateOfReturn().toFixed(1);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    Console.close();
  }
}

module.exports = App;
