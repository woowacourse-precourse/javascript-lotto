class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numbersinrange = numbers.filter((a) => Number(a) >= 1 && Number(a) <= 45);
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (numbers.length !== new Set(numbers).size) throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다");
    if (numbers.length !== numbersinrange.length) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
