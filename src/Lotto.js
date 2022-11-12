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
  }

  getNumbers() {
    return this.sort(this.#numbers);
  }

  sort(numbers) {
    return numbers.sort((prev, next) => {
      return prev - next;
    });
  }
  // TODO: 추가 기능 구현 여기에 정답과 자신을 비교하는 메서드 .
}

module.exports = Lotto;
