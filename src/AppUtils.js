class AppUtils {
  static checkMatchLottoNum(myLottoNumbers, winNumbers) {
    // 로또 발행 번호와 당첨 번호 일치 조회 
    return myLottoNumbers.filter(number => winNumbers.includes(number)).length;
  }

  static checkBonusNum(myLottoNumbers, bonus) {
    // 보너스 번호 일치 여부 조회
    return myLottoNumbers.includes(bonus);
  }

  static getHistories(myLottoes, winNumbers, bonus) {
    // 발행된 모든 로또의 당첨 내역 조회
    const histories = [0,0,0,0,0]
    myLottoes.forEach(myLottoNumbers => {
      switch(this.checkMatchLottoNum(myLottoNumbers, winNumbers)) {
        case 3: histories[0] += 1; break;
        case 4: histories[1] += 1; break;
        case 5: this.checkBonusNum(myLottoNumbers, bonus) ? histories[3] += 1 : histories[2] += 1; break;
        case 6: histories[4] += 1; break;
      }
    })
    return histories;
  }

  static calReward(histories) {
    //상금 계산
    const amount = [5000, 50000, 1500000, 30000000, 2000000000];
    return histories.reduce((prev, curr, idx) => prev + curr * amount[idx], 0);
  }

  static calRate(purchase, reward) {
    // 수익률 계산 
    return reward == 0 ? 0 : Math.round(reward / purchase * 1000) / 10;
  }

  static toStringCountLotto(countMyLotto) {
    // 구매한 로또 개수를 받아 문자열로 반환
    return countMyLotto + '개를 구매했습니다.';
  }

  static toStringMyLotto(myLottoes) {
    // 구매한 로또 내역 문자열 반환
    const result = new Array();
    myLottoes.forEach(numbers => {
      let numStr = '[' + numbers.toString().replace(/,/g, ', ') + ']';
      result.push(numStr);
    });
    return result;
  }

  static toStringHistories(histories) {
    // 로또 당첨 내역 문자열 반환
    const result = new Array();
    const labels = [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - '   
    ]
    histories.forEach((history, idx) => {
      result.push(labels[idx] + history + '개');
    })
    return result;
  }

  static toStringRate(rate) {
    // 수익률 문자열 반환
    return '총 수익률은 ' + rate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%입니다.';
  }

  static toStringStat(histories, rate) {
    // 당첨 통계 문자열 반환
    const result = [
      '당첨 통계',
      '---',
      ...this.toStringHistories(histories),
      this.toStringRate(rate)
    ];
    return result;
  }
}

module.exports = AppUtils;