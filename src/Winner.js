const { Console } = require('@woowacourse/mission-utils');
const Utils = require('./Utils');

class Winner {
  #prizeResult;

  #prizeMoney = 0;

  #earningRate = 0;

  // NOTE: purchaseAmount를 상수로 뺼 수 있음
  // 뺀다면 LottoSeller와 함께 빼야함
  constructor(purchaseAmount, lottos, winnerRule, fixedPoint = 2) {
    this.purchaseAmount = purchaseAmount;
    this.lottos = lottos;
    this.winnerRule = winnerRule;
    this.fixedPoint = fixedPoint;
  }

  set prizeResult(result) {
    this.#prizeResult = result;
  }

  get prizeResult() {
    return this.#prizeResult;
  }

  set prizeMoney(money) {
    this.#prizeMoney = money;
  }

  get prizeMoney() {
    return this.#prizeMoney;
  }

  set earningRate(earningRate) {
    this.#earningRate = earningRate;
  }

  get earningRate() {
    return this.#earningRate;
  }

  calcEarningRate() {
    const earningRate = (this.prizeMoney / this.purchaseAmount) * 100;

    this.earningRate = Math.round(earningRate.toFixed(this.fixedPoint));
  }

  getMatchingLottoResult(winnerNumber) {
    // 당첨 번호에 현재 로또 번호가 얼마나 포함되어있는지 확인
    const { numbers: winner, bonus: bonusNumber } = winnerNumber;
    const { prize, bonus } = this.winnerRule;
    const result = {};

    // 당첨번호와 내 로또 번호 비교하여 저장
    // {3: [번호들], [번호들]} 과 같은 형태로 저장

    // 이렇게하면 없는 번호도 생기는데.. winnerRule기준으로 변경해야함
    const prizeCount = Object.keys(prize).map(Number);

    prizeCount.forEach((count) => { result[count] = []; });

    this.lottos.forEach((lotto) => {
      const matchedCount = lotto.filter((lottoNumber) => winner.includes(lottoNumber)).length;

      if (prizeCount.includes(matchedCount)) {
        result[matchedCount] = [...result[matchedCount], lotto];
      }
    });

    // 보너스 정보
    const bonusMatchedLottos = result[bonus.count]?.filter((lotto) => lotto.includes(bonusNumber))
    || [];

    // 보너스에 해당하는 수 만큼 result에서 제외
    result[bonus.count] = result[bonus.count]
      .filter((lotto) => !Utils.includesArray(bonusMatchedLottos, lotto));

    // 결과 저장
    this.prizeResult = { winner: result, bonus: bonusMatchedLottos };
  }

  calcPrizeMoney() {
    const { prize, bonus } = this.winnerRule;
    const prizeInfo = Object.entries(prize);

    prizeInfo.forEach(([rank, money]) => {
      this.prizeMoney += this.prizeResult.winner[rank].length * money;
    });

    this.prizeMoney += this.prizeResult.bonus * bonus.prizeMoney;
  }

  getResult(winnerNumber) {
    this.getMatchingLottoResult(winnerNumber);
    this.calcPrizeMoney();
    this.calcEarningRate();
  }

  announce(winnerNumber) {
    this.getResult(winnerNumber);

    Console.print(`당첨 통계\n---\n${[...Object.entries(this.prizeResult.winner)
      .map(([count, list]) => `${count}개 일치 (${Number(this.winnerRule.prize[count]).toLocaleString()}원) - ${list.length}개`),
    `${this.winnerRule.bonus.count}개 일치, ${this.winnerRule.bonus.message} (${Number(this.winnerRule.bonus.prizeMoney).toLocaleString()}원) - ${this.prizeResult.bonus.length}개`].sort().join('\n')}`);
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
  }
}

module.exports = Winner;
