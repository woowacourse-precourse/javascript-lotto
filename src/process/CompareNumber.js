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
        GRADE[4] += 1;
      }
      if (number === 4) {
        GRADE[3] += 1;
      }
      if (number === 5) {
        this.correctBonus.forEach(function (bonus) {
          if (bonus === 1) {
            GRADE[1] += 1;
          }
        });
        GRADE[2] += 1;
      }
      if (number === 6) {
        GRADE[0] += 1;
      }
    });
    this.caculateRate.caculateNumbers(this.computerNumbers, GRADE);
  }
}

module.exports = CompareNumber;
