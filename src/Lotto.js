class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isUniqueNumberValidate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  get getLottos() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
  isUniqueNumberValidate(numbers) {
    numbers.forEach((element) => {
      if (numbers.indexOf(element) !== numbers.lastIndexOf(element))
        throw new Error("[ERROR] 생성된 로또 번호 중 동일한 번호가 있습니다.");
    });
  }
}

module.exports = Lotto;
