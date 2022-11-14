const CaculateRate = require("../process/CaculateRate");
const CORRECT = [];
const GRADE = [];
let count = 0;

class CompareNumber {
  constructor(correct, grade, purchaseAmout) {
    this.correct = correct;
    this.grade = grade;
    this.purchaseAmout = purchaseAmout;
    this.caculateRate = new CaculateRate();
  }

  checkNumber(purchaseAmout, computerNumbers, inputLottoNumbers) {
    computerNumbers.forEach(function (firstnumber) {
      firstnumber.forEach(function (secondnumber) {
        const COMPARE = inputLottoNumbers.indexOf(secondnumber);
        if (COMPARE > -1) {
          count += 1;
        }
      });
      CORRECT.push(count);
      count = 0;
    });
    this.correct = CORRECT;
    this.purchaseAmout = purchaseAmout;
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
