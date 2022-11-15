const Utils = require('./Utils');
const { FIXED_POINT } = require('./lottoOptions');

class WinnerSelector {
  #prizeResult;

  #winnerNumber;

  #lottos;

  #data;

  #prizeMoney = 0;

  #earningRate = 0;

  constructor(lottoPrice, winnerRule, fixedPoint = FIXED_POINT) {
    this.lottoPrice = Number(lottoPrice);
    this.winnerRule = winnerRule;
    this.fixedPoint = fixedPoint;
  }

  set winnerNumber(winnerNumber) {
    this.#winnerNumber = winnerNumber;
  }

  get winnerNumber() {
    return this.#winnerNumber;
  }

  set data(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
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

  set lottos(lottos) {
    this.#lottos = lottos;
  }

  get lottos() {
    return this.#lottos;
  }

  setWinnerNumber(winnerNumber) {
    this.winnerNumber = winnerNumber;
  }

  calcEarningRate() {
    const purchaseAmount = this.lottoPrice * this.lottos.length;
    const earningRate = (this.prizeMoney / purchaseAmount) * 100;

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

  setLottoResult() {
    const { numbers: winner, bonus: bonusNumber } = this.winnerNumber;
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

  getResult() {
    this.setLottoResult();
    this.calcPrizeMoney();
    this.calcEarningRate();
  }

  stringifyResult() {
    const resultList = Object.entries(this.prizeResult.winner);
    const { prize, bonus } = this.winnerRule;

    const prizes = resultList.map(([count, lottos]) => `${count}개 일치 (${Number(prize[count]).toLocaleString()}원) - ${lottos.length}개`);
    const bonusResult = `${bonus.count}개 일치, ${bonus.message} (${Number(bonus.prizeMoney).toLocaleString()}원) - ${this.prizeResult.bonus.length}개`;

    return [...prizes, bonusResult].sort().join('\n');
  }

  setResultData() {
    this.getResult();

    const message = '\n당첨 통계\n---';
    const result = `${this.stringifyResult()}\n총 수익률은 ${this.earningRate}%입니다.`;

    this.data = { message, result };
  }
}

module.exports = WinnerSelector;
