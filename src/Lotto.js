class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (
      this.checkIsNum(numbers) &&
      this.checkLength(numbers) &&
      this.checkNumOverlap(numbers) &&
      this.checkHasSpace(numbers) &&
      this.checkNumRange(numbers)
    )
      return;
    throw new Error('[ERROR] 입력한 당첨 번호가 올바르지 않습니다.');
  }

  checkIsNum(numbers) {
    return /[1-9]$/.test(numbers);
  }

  checkNumRange(numbers) {
    function checkRange(number) {
      return 0 < number && number <= 45;
    }

    return numbers.every(checkRange);
  }

  checkLength(numbers) {
    return numbers.length === 6;
  }

  checkNumOverlap(numbers) {
    const SET = new Set(numbers);
    const UNIQUE_ELEMENTS = [...SET];

    return UNIQUE_ELEMENTS.length === 6;
  }

  checkHasSpace(numbers) {
    return !/\s/g.test(numbers);
  }
}

module.exports = Lotto;
