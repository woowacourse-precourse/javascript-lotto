class ValidateBonusNumber {

  constructor(inputBonusNumber, winningNumber) {
    this.validate(inputBonusNumber, winningNumber);
  };

  validate(inputBonusNumber, winningNumber) {

    if (Number(inputBonusNumber) < 1 || Number(inputBonusNumber) > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자를 입력해야 합니다.');
    };

    if (Number(inputBonusNumber) % 1 !== 0) {
      throw new Error('[ERROR] 보너스 번호는 자연수를 입력해야 합니다.');
    };

    if (winningNumber.includes(Number(inputBonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호에 있는 숫자와 중복되어서는 안됩니다.');
    };
  }
}

module.exports = ValidateBonusNumber;