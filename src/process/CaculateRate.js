const Result = require("../result/Result");

class CaculateRate {
  constructor(rate) {
    this.rate = rate;
    this.result = new Result();
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
    this.rate = RESULT.toFixed(1);
    this.result.showResult(GRADE, this.rate);
  }
}

module.exports = CaculateRate;
