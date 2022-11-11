class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkNumber(numbers);
    this.checkLength(numbers);
    this.checkRange(numbers);
    this.checkDuplicate(numbers);
  }

  checkNumber(numbers) {
    const invalidList = numbers.filter((number) => {
      return isNaN(number);
      // Error: 숫자+숫자아닌값 조합인 경우 예외 처리가 되지 않음.
    });
    if (invalidList.length > 0) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }

  checkLength(numbers) {
    const LOTTO_LENGTH = 6;
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkRange(numbers) {
    const MINIMUN_NUMBER = 1;
    const MAXIMUN_NUMBER = 45;

    numbers.forEach((number) => {
      if (number < MINIMUN_NUMBER || number > MAXIMUN_NUMBER) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다");
      }
    });
  }

  checkDuplicate(numbers) {
    if ([...new Set(numbers)].length < 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
