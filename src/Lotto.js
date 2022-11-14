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
    if((new Set(numbers)).size != 6){
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
    if(numbers[0] < 1 || numbers[5] > 45){
      throw new Error("[ERROR] 로또 번호는 1과 45사이의 수여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  

}

module.exports = Lotto;
