class Bonus {
  #bonusNumber;

  constructor(lottoNumbers, bonusNumber) {
    this.validationCheckList(lottoNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
  validationCheckList(lottoNumbers, bonusNumber){
    this.isDuplication(lottoNumbers, bonusNumber);
  }
  isDuplication(lottoNumbers, bonusNumber){
    if(lottoNumbers.includes(bonusNumber)){
        throw new Error("[ERROR] 보너스 번호가 당첨번호와 중복됩니다.");
    }
  }
}

module.exports = Bonus;
