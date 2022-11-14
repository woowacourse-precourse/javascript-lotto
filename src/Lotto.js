class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // eslint-disable-next-line class-methods-use-this
  validate(numbers) {
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

  getNumbers() {
    return [...this.#numbers];
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
