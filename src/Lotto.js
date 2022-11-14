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
    this.checkSix(numbers)
  }

  // TODO: 추가 기능 구현
  checkNum(){
    const check = new Set(this.#numbers);
    if(check.size !== 6){
      throw "[ERROR] 중복이 확인되었습니다."
    }
  }

  checkSix(numbers){
    const check = new Set(numbers);
    if(check.size !== 6){
      throw "[ERROR] 중복이 확인되었습니다."
    }
  }

  checkOther(number){
    const check = number.toString().split("").map(str => Number(str));
    if(check.includes("NaN")) throw "[ERROR] 숫자를 입력해주세요."
  }
}

module.exports = Lotto;
