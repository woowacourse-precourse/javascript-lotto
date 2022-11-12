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
    if (setNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호는 입력할 수 없습니다.");
    }
    if (numbers.filter((x) => +x < 1 || +x > 45).length > 0) {
      throw new Error("[ERROR] 1부터 45까지의 번호만 입력할 수 있습니다.");
    }
    return true;
  }
}

module.exports = Lotto;
