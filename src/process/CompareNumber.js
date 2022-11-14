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

  checkNumber(computerNumbers, inputLotto, inputBonus) {
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
    this.checkBonus(inputBonus);
  }

  checkBonus(inputBonus) {
    this.computerNumbers.forEach(function (firstnumber) {
      firstnumber.forEach(function (secondnumber) {
        const COMPARE_BONUS = inputBonus.indexOf(secondnumber);
        if (COMPARE_BONUS > -1) {
          bonusCount += 1;
        }
      });
      CORRECT_BONUS.push(bonusCount);
      bonusCount = 0;
    });
    this.correctBonus = CORRECT_BONUS;
    this.correctNumbers();
  }

  correctNumbers() {
    this.correct.forEach(function (number) {
      if (number === 3) {
        this.fiveGrade();
      }
      if (number === 4) {
        this.fourGrade();
      }
      if (number === 5) {
        this.threeGrade();
      }
      if (number === 6) {
        this.firstGrade();
      }
    });
    this.grade = GRADE;
    this.caculateRate.caculateNumbers(this.purchaseAmout, this.grade);
  }

  fiveGrade() {
    return (GRADE[4] += 1);
  }

  fourGrade() {
    return (GRADE[3] += 1);
  }

  threeGrade() {
    return (GRADE[2] += 1);
  }

  firstGrade() {
    return (GRADE[0] += 1);
  }
}

module.exports = CompareNumber;
