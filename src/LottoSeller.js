const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoValidator = require('./LottoValidator');

class LottoSeller {
  #lottos;

  // TODO: constructor로 초기화
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

  isValidMoney(money) {
    new LottoValidator(this.lottoPrice).isValidMoney(money);
  }

  countLottoTicket(money) {
    this.isValidMoney(money);
    return money / this.lottoPrice;
  }

  issueLotto(count) {
    const lottos = [];

    while (lottos.length < count) {
      lottos.push(Lotto.purchase());
    }

    this.lottos = lottos;
  }

  informPurchaseResult() {
    const lottoCount = this.lottos.length;
    const purchaseMessage = `\n${lottoCount}개를 구매했습니다.`;
    const result = this.lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(purchaseMessage);
    Console.print(result);
  }

  purchase = (money) => {
    this.issueLotto(this.countLottoTicket(money));
    this.informPurchaseResult();

    return this.lottos;
  };
}

module.exports = LottoSeller;
