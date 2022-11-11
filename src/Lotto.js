class Lotto {
  #numbers;

  constructor(numbers) {
    this.validationCheckList(numbers);
    this.#numbers = numbers;
  }
  validationCheckList(numbers){
    this.validate(numbers);
    this.isDuplication(numbers);
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  isDuplication(numbers){
    const deDuplicationNumbers = new Set(numbers);
    if(deDuplicationNumbers.size !== 6){
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다.")
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
