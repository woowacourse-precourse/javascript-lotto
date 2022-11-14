const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoValidator = require('./LottoValidator');
// 사용자가 방문해서 사는 곳
class LottoSeller {
  #lottos;

  #LOTTO_PRICE = 1000;

  set lottos(lottoList) {
    this.#lottos = lottoList;
  }

  get lottos() {
    return this.#lottos;
  }

  get lottoPrice() {
    return this.#LOTTO_PRICE;
  }

  isPurchasableMoney(money) {
    if (Number(money) < this.lottoPrice) {
      throw new Error(`[ERROR] 구입 금액은 ${this.lottoPrice}원 이상이여야 합니다.`);
    }
  }

  isValidMoney(input) {
    new LottoValidator(this.lottoPrice).isValidMoney(input);
  }

  countLottoTicket(money) {
    this.isValidMoney(money);
    return money / this.lottoPrice;
  }

  // count 개수만큼 로또 발행
  issueLotto(count) {
    const lottos = [];

    while (lottos.length < count) {
      lottos.push(Lotto.purchase());
    }

    // 로또 발행하는 부분
    // 다 발행되면
    // 다 제대로 발행됐는지확인도 해야하나? count비교?
    this.lottos = lottos;
  }

  informPurchaseResult() {
    const lottoCount = this.lottos.length;
    const purchaseMessage = `${lottoCount}개를 구매했습니다.`;
    const result = this.lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(purchaseMessage);
    Console.print(result);
  }

  purchase = (money) => {
    //  검증()
    // 하나씩 배열에 추가
    this.issueLotto(this.countLottoTicket(money));
    this.informPurchaseResult();

    return this.lottos;
  };
}

module.exports = LottoSeller;
