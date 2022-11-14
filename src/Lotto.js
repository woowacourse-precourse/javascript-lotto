class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const setNum = new Set(numbers);
    if (setNum.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }

    numbers.map((number) => {
      if (!(parseInt(number) >= 1 && parseInt(number) <= 45)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      this.inputNumbersValidate(number);
    });
  }

  inputNumbersValidate(number) {
    if (!/^[0-9]{1,2}$/.test(number))
      throw new Error("[ERROR] 숫자와 쉼표 이외의 문자가 있습니다.");
  }
}

module.exports = Lotto;
