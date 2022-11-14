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
      if (!(Number(number) >= 1 && Number(number) <= 45)) throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
      if (!(this.filterNumber(number) >= 1 && this.filterNumber(number) <= 45)) throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 하고 다른 문자를 포함할 수 없습니다.");
    });
  }

  filterNumber(number) {
    if (/[1-45]/.test(number)) return Number(number);
    else return NaN;
  }
}

module.exports = Lotto;
