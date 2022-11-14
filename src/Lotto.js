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

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
    numbers.map((number) => {
      if (!(parseInt(number) >= 1 && parseInt(number) <= 45)) throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    });
  }

  // TODO: 추가 기능 구현
}

let lotto = new Lotto([1, 2, 3, 4, 5, '49']);
lotto.validate;

module.exports = Lotto;
