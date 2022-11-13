class BonusNum {
  constructor(bonusNum) {
    this.isInRange(bonusNum);
    this.isInteger(bonusNum);
  }

  isInRange(bonusNum) {
    if (bonusNum < 1 || bonusNum > 45) {
      throw new Error('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    }
  }

  isInteger(bonusNum) {
    if (+bonusNum % 1 !== 0) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
  }
}

module.exports = BonusNum;
