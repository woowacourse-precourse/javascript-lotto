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
    this.checkNumber(numbers)
  }

  // TODO: 추가 기능 구현

  setCheck(){
    const check = new Set(this.#numbers)
    if (check.size !== 6) {
      throw new Error("[ERROR] 중복이 확인 되었습니다.");
    }
  }
  checkNumber(numbers){
    const check = new Set(numbers)
    if (check.size !== 6) {
      throw new Error("[ERROR] 중복이 확인 되었습니다.");
    }
  }
  
}

module.exports = Lotto;
