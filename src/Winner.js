const { Console } = require('@woowacourse/mission-utils');

class Winner {
  #prizeResult;

  #prizeMoney;

  #earningRate;

  // NOTE: purchaseAmount를 상수로 뺼 수 있음
  // 뺀다면 LottoSeller와 함께 빼야함
  constructor(purchaseAmount, lottos, winnerRule, fixedPoint = 2) {
    this.purchaseAmount = purchaseAmount;
    this.lottos = lottos;
    this.winnerRule = winnerRule;
    this.fixedPoint = fixedPoint;
    this.getResult();
  }

  set prizeResult(result) {
    this.#prizeMoney = result;
  }

  get prizeResult() {
    return this.#prizeMoney;
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

  getMatchingNumberCount(current, target) {
    // 당첨 번호에 현재 로또 번호가 얼마나 포함되어있는지 확인
  }

  calcPrizeMoney() {
    const { prize, bonus } = this.winnerRule;

    Object.entries(prize).map(([key, value]) => `${key}개 일치(${Number(value).toLocaleString()}) - ${/* this.getMatchingNumberCount()이 key개인 개수 */ || "0"}개`);
    // bonus의 경우에 표시방법도 작성


    // TODO:
    // 구한 후에, sort로 정렬
    // 정렬해야 3, 4, 5, 5+보너스, 6개일치 순으로 출력

    // prizeResult에 결과저장
    // prizeMoney에 결과 저장
  }

  getResult() {
    this.calcPrizeMoney();
    this.calcEarningRate();
  }

  announce() {
    Console.print('당첨 통계\n---\n');
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
  }
}

module.exports = Winner;
