class Lotto {
  #numbers;

  //여기에 내가 구입한 로또번호들을 구현하면 되는 듯?
  
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
