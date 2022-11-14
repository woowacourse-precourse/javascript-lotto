class CaculateRate {
  constructor(result) {
    this.result = result;
  }
  caculateNumbers(purchaseAmout, GRADE) {
    const RESULT =
      ((GRADE[4] * 5000 +
        GRADE[3] * 50000 +
        GRADE[2] * 1500000 +
        GRADE[1] * 30000000 +
        GRADE[0] * 2000000000) /
        purchaseAmout) *
      0.1;
    this.result = RESULT;
  }
}

module.exports = CaculateRate;
