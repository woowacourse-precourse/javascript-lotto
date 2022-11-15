class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!numbers.every((elem, idx) => numbers.indexOf(elem) === idx)) {
      throw new Error("[ERROR] 로또 번호는 모두 서로 달라야 합니다.");
    }
    if (
      !numbers.every((elem) => Number.isInteger(elem) && elem > 0 && elem < 46)
    ) {
      throw new Error("[ERROR] 로또 번호는 모두 1이상 45이하 정수여야 합니다.");
    }
  }
}

module.exports = Lotto;
