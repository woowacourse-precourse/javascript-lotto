const ERROR_MESSAGE = {
  LOTTO_NUMBER_BETWEEN : '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
  LOTTO_DUPLICATE_NUMBER : '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  LOTTO_WRONG_VALUE : '[ERROR] 로또 번호는 숫자여야 합니다.',
  LOTTO_UNDEFINED_NUMBER : '[ERROR] 로또 번호를 입력해야 합니다.',
  LOTTO_LENGTH_NUMBER : '[ERROR] 로또 번호는 6개여야 합니다.'
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
  validate(numbers) {
    this.noInput(numbers);
    this.lengthNumber(numbers);
    this.duplicateNumber(numbers);
    this.specifiedNumber(numbers);
    this.notNumber(numbers);
  };

  lengthNumber(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_NUMBER);
  };

  duplicateNumber(numbers) {
    const set = new Set(numbers);
    if (set.size !== 6) throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE_NUMBER)
  };

  noInput(numbers) {
    if (numbers === undefined) throw new Error(ERROR_MESSAGE.LOTTO_UNDEFINED_NUMBER);
  };

  specifiedNumber(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_BETWEEN);
    });
  };
  
  notNumber(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number) === true) throw new Error(ERROR_MESSAGE.LOTTO_WRONG_VALUE);
    });
  };
}

module.exports = Lotto;
