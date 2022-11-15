class BonusValidate {
  constructor(bonusNumber) {
    BonusValidate.validate(bonusNumber);
  }

  static validate(bonusNumber) {
    if (/[^0-9]/g.test(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    if (bonusNumber > 45 || bonusNumber < 1)
      throw new Error('[ERROR] 보너스 번호는 1~45 범위여야 합니다.');
  }
}

module.exports = BonusValidate;
