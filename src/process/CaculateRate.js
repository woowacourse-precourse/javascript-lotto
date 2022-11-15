const Result = require("../result/Result");

class CaculateRate {
  constructor(computerNumbers, GRADE) {
    this.caculateNumbers(computerNumbers, GRADE);
  }
  caculateNumbers(computerNumbers, GRADE) {
    const RESULT =
      ((GRADE[4] * 5000 +
        GRADE[3] * 50000 +
        GRADE[2] * 1500000 +
        GRADE[1] * 30000000 +
        GRADE[0] * 2000000000) /
        (computerNumbers.length * 1000)) *
      100;
    new Result(GRADE, RESULT.toFixed(1));
  }
}

module.exports = CaculateRate;
