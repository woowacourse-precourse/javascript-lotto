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

    if (
      numbers.some(function (number) {
        return number < 1 || number > 45;
      })
    )
      throw new Error("[ERROR] 1부터 45까지의 로또 번호를 입력해 주세요.");
  }
}

module.exports = Lotto;
