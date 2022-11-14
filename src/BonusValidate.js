class BonusValidate {
  constructor(winningNumber, bonusNumber) {
    this.typeNumberValidate(bonusNumber);
    this.repeatBonusValidate(winningNumber, bonusNumber);
    this.limitBonusValidate(bonusNumber);
  }

  typeNumberValidate(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  // 보너스 번호 중복 확인
  repeatBonusValidate(winningNumber, bonusNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    return;
  }

  // 보너스 번호 범위 확인
  limitBonusValidate(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    return;
  }
}

module.exports = BonusValidate;
