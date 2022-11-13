class BonusNum {
  constructor(winNums, bonusNum) {
    this.isInRange(bonusNum);
    this.isInteger(bonusNum);
    this.isNum(bonusNum);
    this.isInWinNums(winNums, bonusNum);
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

  isNum(bonusNum) {
    const splitBonusNum = bonusNum.split('');
    splitBonusNum.map((el) => {
      if (isNaN(el) || el === ' ') throw new Error('[ERROR] 숫자만 입력해주세요.');
    });
  }

  isInWinNums(winNums, bonusNum) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map((winNum) => {
      if (winNum === bonusNum) throw new Error('[ERROR] 당첨번호와 중복되는 숫자입니다.')
    });
  }
}

module.exports = BonusNum;
