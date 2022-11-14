class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (
      !(
        this.checkIsNum(numbers) &&
        this.checkLength(numbers) &&
        this.checkNumOverlap(numbers) &&
        this.checkHasSpace(numbers) &&
        this.checkNumRange(numbers)
      )
    ) {
      throw new Error('[ERROR] 입력한 당첨 번호가 올바르지 않습니다.');
    }
  }

  checkIsNum(numbers) {
    if (/[1-9]$/.test(numbers)) {
      return true;
    }
    return false;
  }

  checkNumRange(numbers) {
    function checkRange(number) {
      return 0 < number && number <= 45;
    }

    return numbers.every(checkRange);
  }

  checkLength(numbers) {
    if (numbers.length === 6) {
      return true;
    }
    return false;
  }

  checkNumOverlap(numbers) {
    const SET = new Set(numbers);
    const UNIQUE_ELEMENTS = [...SET];

    if (UNIQUE_ELEMENTS.length === 6) {
      return true;
    }
    return false;
  }

  checkHasSpace(numbers) {
    if (!/\s/g.test(numbers)) {
      return true;
    }
    return false;
  }
}

module.exports = Lotto;
