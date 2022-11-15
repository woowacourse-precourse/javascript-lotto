class Validation {
  checkPositiveInteger(input) {
    const regex = /^[0-9]+$/;
    if (!regex.test(input)) {
      throw '숫자를 입력해 주세요.';
    }
  }

  checkEmptyItem(array) {
    const hasEmptyItem = array.includes(undefined);
    if (hasEmptyItem) {
      throw '빈 번호가 없게 입력해 주세요.';
    }
  }

  /**
   * 원하는 금액 단위로 나누어떨어지는 지 체크하는 함수
   * dividend: 나누어지는 수
   * divider: 나누는 수
   */
  checkSplitIntoDivisor(dividend, divisor) {
    if (dividend % divisor !== 0) {
      throw `${divisor}원 단위로 입력해 주세요.`;
    }
  }

  checkDuplication(array) {
    if (array.length !== new Set(array).size) {
      throw '중복된 번호가 존재합니다.';
    }
  }

  checkNumberIncludeInRange(number, startRange, endRange) {
    if (!(number >= startRange && number <= endRange)) {
      throw `${startRange}부터 ${endRange} 사이의 숫자를 입력해 주세요.`;
    }
  }

  checkArrayLength(array, count) {
    if (array.length !== count) {
      throw `총 ${count}개를 입력해 주세요.`;
    }
  }
}

module.exports = Validation;
