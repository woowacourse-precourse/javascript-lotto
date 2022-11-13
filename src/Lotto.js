class Lotto {
  #numbers;

  constructor(numbers) {
    this.isSix(numbers);
    this.#numbers = numbers;
  }

  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isNumber(numbers) {
    const regex = /^[0-9]+$/;
    if (!regex.test(numbers)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  }

  isUnique(numbers) {
    const numbersArr = numbers.split(',');
    if ([...new Set(numbersArr)].length !== 6) {
      throw new Error('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
    }
  }

  isUnitOfThousnds(amount) {
    if (+amount % 1000 !== 0) {
      throw new Error('[ERROR] 천원 단위로 입력해 주세요.');
    }
  }

  isValidAmount(amount) {
    if (
      this.isNumber(amount) !== Error &&
      this.isUnitOfThousnds(amount) !== Error
    ) {
      return true;
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
