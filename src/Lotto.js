class Lotto {
  #numbers;

  constructor(numbers) {
    //인스턴스 생성 및 초기화
    this.validate(numbers);
    this.#numbers = numbers;
  }

  //프로토타입 메서드
  //당첨 번호
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  //중복되지 않는 숫자
  duplicatecheck(numbers){

  }

  //1~45까지의 숫자
  rangecheck(numbers){
    
  }

  
}

module.exports = Lotto;
