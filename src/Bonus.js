class Bonus{
    #bonusNumber
  constructor(lottoNumber ,bonusNumber) {
    this.bonusValidationCheckList(lottoNumber,bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
  bonusValidationCheckList(lottoNumbers, bonusNumber){
    this.isBonusLengthOne(bonusNumber);
    this.isNumber(bonusNumber);
    this.isInRange(bonusNumber);
    this.isDuplication(lottoNumbers, bonusNumber);
  }
  isBonusLengthOne(bonusNumber){
    if (bonusNumber.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
  }
  isDuplication(lottoNumbers, bonusNumber){
    if(lottoNumbers.includes(...bonusNumber)){
      throw new Error("[ERROR] 보너스 번호가 당첨번호와 중복됩니다.");
    }    
  }
  getNumbers(){
    return this.#bonusNumber;
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

module.exports = Bonus;