class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
  validate (numbers) {
    numbers.map((item) => {
      if (item < 1 || item > 45) {
        InputOutput.close();
        throw new Error(Message.LOTTO_NUMBER_BIGGER_THAN_ONE_SMALLER_THAN_FOURTY_FIVE);
      }

      if (parseInt(item) !== item) {
        InputOutput.close();
        throw new Error(Message.NOT_NUMBER);
      }
    })

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
