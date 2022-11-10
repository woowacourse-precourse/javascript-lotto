class AppUtils {
  static checkMatchLottoNum(myLottoNumbers, winNumbers) {
    // 로또 발행 번호와 당첨 번호 일치 조회 
    return myLottoNumbers.filter(number => winNumbers.includes(number)).length;
  }

  static checkBonusNum(myLottoNumbers, bonus) {
    // 보너스 번호 일치 여부 조회
    return myLottoNumbers.includes(bonus);
  }

  static getHistory(myLottoes, winNumbers, bonus) {
    // 발행된 모든 로또의 당첨 내역 조회
    const history = [0,0,0,0,0]
    myLottoes.forEach(myLottoNumbers => {
      switch(this.checkMatchLottoNum(myLottoNumbers, winNumbers)) {
        case 3:
          history[0] += 1;
          break;
        case 4:
          history[1] += 1;
          break;
        case 5:
          this.checkBonusNum(myLottoNumbers, bonus) ? history[3] += 1 : history[2] += 1;
          break;
        case 6:
          history[4] += 1;
          break;
      }
    })
    return history;
  }

  static calRate() {
    // 수익률 계산 
  }

  static printMyLotto() {
    // 구매한 로또 내역 출력
  }

  static printWinHistory() {
    // 로또 당첨 내역 출력
  }

  static printRate() {
    // 수익률 출력
  }
}

module.exports = AppUtils;