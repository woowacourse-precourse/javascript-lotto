class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.isNumbers();
    this.isValidRange();
    this.isOverlapped();
    this.isNaturalNumber();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isNumbers() {
    const numbers = this.#numbers;
    if (numbers.includes(NaN))
      throw new Error(
        "[ERROR] 당첨 번호는 쉼표(,)를 기준으로 구분된 숫자여야 합니다."
      );
  }

  isNaturalNumber() {
    const numbers = this.#numbers;
    if (numbers.filter((el) => Math.round(el) !== el).length > 0)
      throw new Error("[ERROR] 당첨 번호는 자연수여야 합니다.");
  }

  isValidRange() {
    const numbers = this.#numbers;
    if (numbers.filter((el) => el < 1).length > 0)
      throw new Error("[ERROR] 당첨 번호는 0보다 커야 합니다.");
    else if (numbers.filter((el) => el > 45).length > 0)
      throw new Error("[ERROR] 당첨 번호는 46보다 작아야 합니다.");
  }

  isOverlapped() {
    const numbers = this.#numbers;
    if (numbers.length !== new Set(numbers).size)
      throw new Error("[ERROR] 각 당첨 번호는 중복될 수 없습니다.");
  }
}

module.exports = Lotto;
