class BonusNumberError {
  #inputLottoNumbers;
  #inputBonusNumber;

  constructor(inputLottoNumbers, inputBonusNumber) {
    this.duplicateBonus(inputLottoNumbers, inputBonusNumber);
    this.#inputLottoNumbers = inputLottoNumbers;
    this.#inputBonusNumber = inputBonusNumber;
  }

  duplicateBonus(inputLottoNumbers, inputBonusNumber) {
    for (let place = 0; place < inputLottoNumbers.length; place++) {
      this.compareBonusLotto(place, inputLottoNumbers, inputBonusNumber);
    }
    this.rangeBonusNumber(inputBonusNumber);
  }

  compareBonusLotto(place, inputLottoNumbers, inputBonusNumber) {
    if (inputLottoNumbers[place] === inputBonusNumber) {
      throw new Error("[ERROR] 당첨번호와 보너스번호는 달라야합니다.");
    }
  }

  rangeBonusNumber(inputBonusNumber) {
    if (!(inputBonusNumber >= 1 && inputBonusNumber <= 45)) {
      throw new Error("[ERROR] 1~45 숫자만 입력해야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = BonusNumberError;
