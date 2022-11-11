//에러 전부 상수화 필요
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
    if (new Set(numbers).size !== numbers.length) throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    if (numbers.find((arrayElement) => parseInt(arrayElement) < 1 || parseInt(arrayElement) > 45))
      throw new Error("[ERROR] 숫자는 1-45 사이의 수여야 합니다.");
  }
}

module.exports = Lotto;
