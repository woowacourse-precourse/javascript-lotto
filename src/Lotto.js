class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLottoLength(numbers);
    this.checkLottoNumber(numbers);
    this.checkDuplicateNumber(numbers);
  }

  checkLottoLength(numbers){
    if (numbers.length !== 6){
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkLottoNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 1 || numbers[i] < 45){
        throw new Error("[ERROR] 로또 번호는 1이상 45이하여야 합니다.")
      }
    }
  }

  checkDuplicateNumber(numbers){
    const set = new Set(numbers);
    if(set.size < numbers.length){
      throw new Error("[ERROR] 로또 번호안에 중복 숫자가 존재합니다.");
    }
  }
}

module.exports = Lotto;
