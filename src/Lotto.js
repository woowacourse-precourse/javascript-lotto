class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicateCheck(numbers)
    this.#numbers = numbers;
    return numbers[0].split(",").map(Number)
  }

  validate(numbers) {
    if (numbers.length !== 6 && numbers.length !== 1) {
      throw new Error("[ERROR] 로또 번호는 1개 또는 6개여야 합니다.");
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
