class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const LENGTH = numbers.length;
    if (LENGTH !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다!");
    }
    for (let i = 0; i < LENGTH; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자가 아닙니다!");
      }
      if (numbers[i] <= 0 || numbers[i] > 45) {
        throw new Error("[ERROR] 1 ~ 45 숫자가 아닙니다!");
      }
    }
  }
  // TO DO -
  // 일치 개수 비교 및 통계.
}

module.exports = Lotto;
