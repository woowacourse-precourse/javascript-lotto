class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    };

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.');
    };

    if (numbers.find(number => number < 1 || number > 45) !== undefined) {
      throw new Error('[ERROR] 로또 번호에는 1 ~ 45 사이의 자연수만 사용할 수 있습니다.');
    };
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
