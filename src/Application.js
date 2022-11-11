class Application {
  static validateNumber(target) {
    if (Number.isNaN(target)) {
      throw new TypeError('[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.');
    }
  }

  static validateArray(target) {
    if (!Array.isArray(target)) {
      throw new TypeError('[ERROR] 전달된 인수는 배열 타입만 가능 합니다.');
    }
  }

  static validateArrayLength(numbers, criterion) {
    if (numbers.length !== criterion) {
      throw new Error(`[ERROR] 배열의 길이는 ${criterion}개여야 합니다.`);
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

  static earningsRate(purchaseAmount, earnings) {
    const HUNDRED = 100;

    return (this.convertNumber(earnings) / this.convertNumber(purchaseAmount)) * HUNDRED;
  }

  static sortAscending(target) {
    this.validateArray(target);

    return target.sort((targetA, targetB) => targetA - targetB);
  }
}

module.exports = Application;
