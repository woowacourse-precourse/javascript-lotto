const { Console } = require('@woowacourse/mission-utils');
const Utils = require('./Utils');

class Winner {
  #prizeResult;

  #prizeMoney = 0;

  #earningRate = 0;

  // NOTE: purchaseAmount를 상수로 뺼 수 있음
  // 뺀다면 LottoSeller와 함께 빼야함
  constructor(purchaseAmount, lottos, winnerRule, fixedPoint = 1) {
    this.purchaseAmount = Number(purchaseAmount);
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

    this.earningRate = earningRate.toFixed(this.fixedPoint);
  }

  getBonusMatchedLottos(result, bonusNumber) {
    const bonusMatchedLottos = result[this.winnerRule.bonus.count]
      ?.filter((lotto) => lotto.includes(bonusNumber))
    || [];

    return bonusMatchedLottos;
  }

  getMatchedLottos(winner) {
    const prizeCount = Object.keys(this.winnerRule.prize).map(Number);
    const result = prizeCount.reduce((prev, cur) => ({ ...prev, [cur]: [] }), {});

    this.lottos.forEach((lotto) => {
      const matchedCount = lotto.filter((lottoNumber) => winner.includes(lottoNumber)).length;

      if (prizeCount.includes(matchedCount)) {
        result[matchedCount] = [...result[matchedCount], lotto];
      }
    });

    return result;
  }

  setLottoResult(winnerNumber) {
    const { numbers: winner, bonus: bonusNumber } = winnerNumber;
    const { bonus } = this.winnerRule;
    const result = this.getMatchedLottos(winner);
    const bonusMatchedLottos = this.getBonusMatchedLottos(result, bonusNumber);

    result[bonus.count] = result[bonus.count]
      .filter((lotto) => !Utils.includesArray(bonusMatchedLottos, lotto));
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
    this.setLottoResult(winnerNumber);
    this.calcPrizeMoney();
    this.calcEarningRate();
  }

  announce(winnerNumber) {
    this.getResult(winnerNumber);

    Console.print('\n당첨 통계\n---');
    Console.print(`${[...Object.entries(this.prizeResult.winner)
      .map(([count, list]) => `${count}개 일치 (${Number(this.winnerRule.prize[count]).toLocaleString()}원) - ${list.length}개`),
    `${this.winnerRule.bonus.count}개 일치, ${this.winnerRule.bonus.message} (${Number(this.winnerRule.bonus.prizeMoney).toLocaleString()}원) - ${this.prizeResult.bonus.length}개`].sort().join('\n')}`);
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    Console.close();
  }
}

module.exports = Winner;
