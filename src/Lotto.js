class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    numbers.forEach((number) => {
      if (!regExp.test(number)) {
        throw new Error('[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.');
      }
    });
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
