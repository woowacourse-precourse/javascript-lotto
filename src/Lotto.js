class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicateCheck(numbers)
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicateCheck(numbers) {
    const checkNumbers = new Set(numbers);
    if(checkNumbers.size !== numbers.length){
      throw new Error("[ERROR] 중복 된 번호가 있습니다.");
    }
  }
  
}

module.exports = Lotto;
