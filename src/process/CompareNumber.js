const CaculateRate = require("./CaculateRate");
const CORRECT = [];
const CORRECT_BONUS = [];
let GRADE = [0, 0, 0, 0, 0];
let count = 0;
let bonusCount = 0;

class CompareNumber {
  constructor(computerNumbers, correct, correctBonus, inputLotto, inputBonus) {
    this.computerNumbers = computerNumbers;
    this.correct = correct;
    this.correctBonus = correctBonus;
    this.inputLotto = inputLotto;
    this.inputBonus = inputBonus;
    this.caculateRate = new CaculateRate();
  }

  comparefirstCipher(computerNumbers, inputLotto, inputBonus) {
    this.computerNumbers = computerNumbers;
    this.inputLotto = inputLotto;
    this.inputBonus = inputBonus;
    for (
      let firstCipher = 0;
      firstCipher < this.computerNumbers.length;
      firstCipher++
    ) {
      this.compareSecondCipher(firstCipher);
      CORRECT.push(count);
      count = 0;
    }
    this.correct = CORRECT;
    this.compareBonusfirstCipher();
  }

  compareSecondCipher(firstCipher) {
    for (
      let secondCipher = 0;
      secondCipher < this.computerNumbers[firstCipher].length;
      secondCipher++
    ) {
      this.checklotto(firstCipher, secondCipher);
    }
  }

  checklotto(firstCipher, secondCipher) {
    const COMPARE = this.inputLotto.indexOf(
      this.computerNumbers[firstCipher][secondCipher]
    );
    if (COMPARE > -1) {
      count += 1;
    }
  }

  compareBonusfirstCipher() {
    for (
      let firstCipher = 0;
      firstCipher < this.computerNumbers.length;
      firstCipher++
    ) {
      this.compareBonusSecondCipher(firstCipher);
      CORRECT_BONUS.push(bonusCount);
      bonusCount = 0;
    }
    this.correctBonus = CORRECT_BONUS;
    this.correctNumbers();
  }

  compareBonusSecondCipher(firstCipher) {
    for (
      let secondCipher = 0;
      secondCipher < this.computerNumbers[firstCipher].length;
      secondCipher++
    ) {
      this.checkbonus(firstCipher, secondCipher);
    }
  }

  checkbonus(firstCipher, secondCipher) {
    const COMPARE_BONUS = this.inputBonus.indexOf(
      this.computerNumbers[firstCipher][secondCipher]
    );
    if (COMPARE_BONUS > -1) {
      bonusCount = 1;
    }
  }

  correctNumbers() {
    for (
      let lottoCipher = 0;
      lottoCipher < this.correct.length;
      lottoCipher++
    ) {
      this.fifthPlace(lottoCipher);
      this.fourthPlace(lottoCipher);
      this.thirthdPlace(lottoCipher);
      this.secondPlace(lottoCipher);
      this.firstPlace(lottoCipher);
    }
    this.caculateRate.caculateNumbers(this.computerNumbers, GRADE);
  }

  fifthPlace(lottoCipher) {
    if (this.correct[lottoCipher] === 3) {
      GRADE[4] += 1;
    }
  }

  fourthPlace(lottoCipher) {
    if (this.correct[lottoCipher] === 4) {
      GRADE[3] += 1;
    }
  }

  thirthdPlace(lottoCipher) {
    if (
      this.correct[lottoCipher] === 5 &&
      this.correctBonus[lottoCipher] !== 1
    ) {
      GRADE[2] += 1;
    }
  }

  secondPlace(lottoCipher) {
    if (
      this.correct[lottoCipher] === 5 &&
      this.correctBonus[lottoCipher] === 1
    ) {
      GRADE[1] += 1;
    }
  }

  firstPlace(lottoCipher) {
    if (this.correct[lottoCipher] === 6) {
      GRADE[0] += 1;
    }
  }
}

module.exports = CompareNumber;
