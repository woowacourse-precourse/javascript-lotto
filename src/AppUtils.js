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