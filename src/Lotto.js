class Lotto {
  #numbers;

  constructor(numbers) {
    this.lottoValidationCheckList(numbers);
    this.#numbers = numbers;
  }
  getNumbers(){
    return this.#numbers;
  }
  lottoValidationCheckList(numbers){
    this.validate(numbers);
    this.isNumber(numbers);
    this.isInRange(numbers);
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
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다.");
    }
  }
  isInRange(numbers){
    numbers.forEach((number)=>{
      if(number<1 || number>45){
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
  }
  isNumber(numbers){
    const IS_NOT_NUMBER = /\D/g;
    const numbersArrayToString = numbers.join("");
    if(IS_NOT_NUMBER.test(numbersArrayToString)){
      throw new Error("[ERROR] 로또 번호는 문자가 아닌 숫자여야 합니다.");
    }
  }
}

module.exports = Lotto;
