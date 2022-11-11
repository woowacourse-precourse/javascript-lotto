class Lotto {
  #numbers;

  constructor(numbers) {
    this.validationCheckList(numbers);
    this.#numbers = numbers;
  }
  constructor(lottoNumbers, bonusNumber) {
    this.bonusValidationCheckList(lottoNumbers, bonusNumber);
  }

  getNumbers(){
    return this.#numbers;
  }
  validationCheckList(numbers){
    this.validate(numbers);
    this.isDuplication(numbers);
    this.isInRange(numbers);
    this.isNumber(numbers);
  }
  bonusValidationCheckList(lottoNumbers, bonusNumber){
    this.isBonusLengthOne(bonusNumber);
    this.isNumber(bonusNumber);
    this.isInRange(bonusNumber);
    this.isBonusDuplicateWithLotto(lottoNumbers, bonusNumber);
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
  isBonusDuplicateWithLotto(lottoNumbers, bonusNumber){
    if(lottoNumbers.includes(bonusNumber)){
      throw new Error("[ERROR] 보너스 번호가 당첨번호와 중복됩니다.");
    }    
  }
  isBonusLengthOne(bonusNumber){
    if (bonusNumber.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
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
