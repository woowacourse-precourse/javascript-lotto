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
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 중복되지 않는 번호를 입력해 주세요.");
    }
    const regExp = new RegExp("^[0-9]+$");
    if (numbers.filter((element) => !regExp.test(element)).length !== 0) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
    if (numbers.filter((element) => element < 1 || element > 45).length !== 0) {
      throw new Error("[ERROR] 1부터 45까지의 숫자만 입력해 주세요.");
    }
  }
}

module.exports = Lotto;
