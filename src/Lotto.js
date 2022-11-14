
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
      this.filterNumber(number);
    });
  }

  filterNumber(number) {
    if (!(/^[0-9]{1,2}$/.test(number))) throw new Error("[ERROR] 숫자와 쉼표를 제외한 문자는 입력할 수 없습니다.");
  }
}

module.exports = Lotto;
