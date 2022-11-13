class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const [IS_NUM, SIX_LENGTH, IS_OVERLAP, HAS_SPACE] = [
      this.checkIsNum(numbers),
      this.checkLength(numbers),
      this.checkNumOverlap(numbers),
      this.checkHasSpace(numbers),
    ];

    if ((IS_NUM && SIX_LENGTH && IS_OVERLAP && HAS_SPACE) === false) {
      throw new Error('[ERROR] 입력한 당첨 번호가 올바르지 않습니다.');
    }
  }

  checkIsNum(numbers) {
    let numRange;
    numbers.forEach((nums) => {
      numRange = nums <= 45;
    });

    if (/[1-9]$/.test(numbers) && numRange) {
      return true;
    }
    return false;
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
