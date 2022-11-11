const Lotto = require("./Lotto.js");

class Bonus extends Lotto{
    #bonusNumber
    #lottoNumbers
  constructor(lottoNumber ,bonusNumber) {
    super(lottoNumber);
    this.#lottoNumbers = lottoNumber;
    this.bonusValidationCheckList(lottoNumber,bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
  bonusValidationCheckList(lottoNumbers, bonusNumber){
    this.isBonusLengthOne(bonusNumber);
    super.isNumber(bonusNumber);
    super.isInRange(bonusNumber);
    this.isDuplication(lottoNumbers, bonusNumber);
  }
  isBonusLengthOne(bonusNumber){
    if (bonusNumber.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
  }
  isDuplication(lottoNumbers, bonusNumber){
    if(lottoNumbers.indexOf(bonusNumber)){
      throw new Error("[ERROR] 보너스 번호가 당첨번호와 중복됩니다.");
    }    
  }
}

module.exports = Bonus;