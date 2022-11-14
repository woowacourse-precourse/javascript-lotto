const CaculateRate = require("./CaculateRate");
const CORRECT = [];
const CORRECT_BONUS = [];
let GRADE = [0, 0, 0, 0, 0];
let count = 0;
let bonusCount = 0;

class CompareNumber {
  constructor(computerNumbers, correct, correctBonus) {
    this.computerNumbers = computerNumbers;
    this.correct = correct;
    this.correctBonus = correctBonus;
    this.caculateRate = new CaculateRate();
  }

  compareNumber(computerNumbers, inputLotto, inputBonus) {
    computerNumbers.forEach(function (firstnumber) {
      firstnumber.forEach(function (secondnumber) {
        const COMPARE = inputLotto.indexOf(secondnumber);
        if (COMPARE > -1) {
          count += 1;
        }
      });
      CORRECT.push(count);
      count = 0;
    });
    this.correct = CORRECT;
    this.computerNumbers = computerNumbers;
    this.compareBonus(inputBonus);
  }

  compareBonus(inputBonus) {
    this.computerNumbers.forEach(function (firstnumber) {
      firstnumber.forEach(function (secondnumber) {
        const COMPARE_BONUS = inputBonus.indexOf(secondnumber);
        if (COMPARE_BONUS > -1) {
          bonusCount = 1;
        }
      });
      CORRECT_BONUS.push(bonusCount);
      bonusCount = 0;
    });
    this.correctBonus = CORRECT_BONUS;
    this.correctNumbers();
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
