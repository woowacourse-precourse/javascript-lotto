class Application {
  static validateNumber(target) {
    if (Number.isNaN(target)) {
      throw new TypeError('[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.');
    }
  }

  static convertNumber(target) {
    const result = parseInt(target, 10);

    this.validateNumber(result);

    return result;
  }

  static purchaseCount(purchaseAmount, criterion) {
    return this.convertNumber(purchaseAmount) / this.convertNumber(criterion);
  }

  static dividendRate(purchaseAmount, earnings) {
    const HUNDRED = 100;

    return (this.convertNumber(earnings) / this.convertNumber(purchaseAmount)) * HUNDRED;
  }
}

module.exports = Application;
