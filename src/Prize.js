const { Console } = require("@woowacourse/mission-utils");

class Prize {
  statValue;
  prizeByMatchingNumbers = [
    { 3: 5000 },
    { 4: 50000 },
    { 5: 1500000 },
    { 5: 30000000 },
    { 6: 2000000000 },
  ];
  totalPrize = 0;

  constructor(generatedLottos, lottoNumbers, bonusNumber) {
    this.makeStats(generatedLottos, lottoNumbers, bonusNumber);
    this.totalPrize = this.totalPrize;
  }

  /**
   * 각 generatedLottos의 요소들과 lottoNumbers의 중복 값을 소거하여 통계 배열을 생성합니다.
   * @param {Array<Array<number>>} generatedLottos
   * @param {Array<number>} lottoNumbers
   * @param {number} bonusNumber
   */
  makeStats(generatedLottos, lottoNumbers, bonusNumber) {
    let stats = [];
    for (let i = 0; i < generatedLottos.length; i++) {
      const set = new Set(generatedLottos[i].concat(lottoNumbers));
      stats.push(set);
    }
    this.prize(stats, bonusNumber);
  }

  /**
   * stats의 요소들의 size에 따라 통계 값 배열을 생성합니다.
   * @param {Array<Set>} stats
   * @param {number} bonusNumber
   */
  prize(stats, bonusNumber) {
    let statValue = [0, 0, 0, 0, 0];
    for (let i = 0; i < stats.length; i++) {
      switch (stats[i].size) {
        case 9:
          statValue[0]++;
          break;
        case 8:
          statValue[1]++;
          break;
        case 7:
          stats[i].has(bonusNumber) ? statValue[3]++ : statValue[2]++;
          break;
        case 6:
          statValue[4]++;
      }
    }
    this.statValue = statValue;
    this.printWinStats();
  }

  /**
   * 당첨 통계를 출력합니다.
   */
  printWinStats() {
    for (let i = 0; i < 5; i++) {
      const key = Object.keys(this.prizeByMatchingNumbers[i])[0];
      const value = this.prizeByMatchingNumbers[i][key].toLocaleString();
      i === 3
        ? Console.print(
            `${key}개 일치, 보너스 볼 일치 (${value}원) - ${this.statValue[i]}개`
          )
        : Console.print(`${key}개 일치 (${value}원) - ${this.statValue[i]}개`);
    }
    this.getTotalPrize();
  }

  /**
   * 당첨금을 계산합니다.
   */
  getTotalPrize() {
    for (let i = 0; i < this.statValue.length; i++) {
      const value = Object.values(this.prizeByMatchingNumbers[i])[0];
      this.totalPrize += value * this.statValue[i];
    }
  }
}

module.exports = Prize;
