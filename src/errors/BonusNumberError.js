class BonusNumberError {
  #inputLottoNumbers;
  #inputBonusNumber;

  constructor(inputLottoNumbers, inputBonusNumber) {
    this.bonusNumbersError(inputLottoNumbers, inputBonusNumber);
    this.#inputLottoNumbers = inputLottoNumbers;
    this.#inputBonusNumber = inputBonusNumber;
  }

  bonusNumbersError(inputLottoNumbers, inputBonusNumber) {
    for (let i = 0; i < inputLottoNumbers.length; i++) {
      if (inputLottoNumbers[i] === inputBonusNumber) {
        throw new Error("[ERROR] 당첨번호와 보너스번호는 달라야합니다.");
      }
    }
    this.rangeBonusNumber(inputBonusNumber);
  }

  rangeBonusNumber(inputBonusNumber) {
    if (!(inputBonusNumber >= 1 && inputBonusNumber <= 45)) {
      throw new Error("[ERROR] 1~45 숫자만 입력해야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = BonusNumberError;
