class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicateCheck(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  duplicateCheck(numbers) {
    let tempNumbers = new Set(numbers);
    tempNumbers = [...tempNumbers];

    if(tempNumbers.length < 6){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }
}

module.exports = Lotto;
