const CONSTANT = require("../assets/constant");

class Prize {
  allWin;
  bonusWin;
  fiveWin;
  fourWin;
  threeWin;
  totalPrize;

  constructor() {
    this.allWin = 0;
    this.bonusWin = 0;
    this.fiveWin = 0;
    this.fourWin = 0;
    this.threeWin = 0;
    this.totalPrize = 0;
  }
  get totalPrize() {
    return this.totalPrize;
  }

  get allWin() {
    return +this.allWin;
  }
  set allWin(number) {
    this.allWin += number;
    this.totalPrize += CONSTANT.PRICE.FRIST;
  }

  get bonusWin() {
    return +this.bonusWin;
  }
  setBonusWin(number) {
    this.bonusWin += number;
    this.totalPrize += CONSTANT.PRICE.SECOND;
  }

  get fiveWin() {
    return +this.fiveWin;
  }

  setFiveWin(number) {
    this.fiveWin += number;
    this.totalPrize += CONSTANT.PRICE.THIRD;
  }

  get fourWin() {
    return +this.fourWin;
  }

  setFourWin(number) {
    this.fourWin += number;
    this.totalPrize += CONSTANT.PRICE.FOURTH;
  }

  get threeWin() {
    return this.threeWin;
  }

  setThreeWin(number) {
    this.threeWin += number;
    this.totalPrize += CONSTANT.PRICE.FIFTH;
  }

  applyResult(result) {
    result.forEach((number) => this.setResult(number));
  } //맞춘 배열을 받음.

  setResult(number) {
    if (number === CONSTANT.MATCH.THREE) this.setThreeWin(CONSTANT.INCREASE);

    if (number === CONSTANT.MATCH.FOUR) this.setFourWin(CONSTANT.INCREASE);

    if (number === CONSTANT.MATCH.FIVE) this.setFiveWin(CONSTANT.INCREASE);

    if (number === CONSTANT.MATCH.BONUS) this.setBonusWin(CONSTANT.INCREASE);

    if (number === CONSTANT.MATCH.ALL) this.setAllWin(CONSTANT.INCREASE);
  }
}

module.exports = Prize;
