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
  }

  // TODO: 추가 기능 구현

  checkLottoNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 1 || numbers[i] < 45){
        throw new Error("[ERROR] 로또 번호는 1이상 45이하여야 합니다.");
      }
    }
  }
}


module.exports = Lotto;
