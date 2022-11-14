class LottoValidate {
  //  총 당첨 번호 확인
  constructor(winningNumber, bonusNumber) {
    this.countValidate(winningNumber);
    this.repeatValidate(winningNumber);
    this.limitNumberValidate(winningNumber);
  }

  // 로또 번호 개수 확인
  countValidate(winningNumber) {
    if (winningNumber.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return;
  }

  // 중복 번호 확인
  repeatValidate(winningNumber) {
    let removeRepeatArr = [];
    removeRepeatArr = [...new Set(winningNumber)];
    if (removeRepeatArr.length < 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    return;
  }

  // 로또 번호는 1~45 사이 숫자
  limitNumberValidate(winningNumber) {
    winningNumber.map(x => {
      if (x < 1 || x > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
    return;
  }
}

module.exports = LottoValidate;
