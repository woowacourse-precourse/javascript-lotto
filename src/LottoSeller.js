const Lotto = require('./Lotto');
const LottoValidator = require('./LottoValidator');
const View = require('./View');

class LottoSeller {
  #lottos;

  #data;

  constructor(lottoPrice) {
    this.lottoPrice = lottoPrice;
  }

  set lottos(lottoList) {
    this.#lottos = lottoList;
  }

  get lottos() {
    return this.#lottos;
  }

  set data(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
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

  setResultData() {
    const lottoCount = this.lottos.length;
    const purchaseMessage = `\n${lottoCount}개를 구매했습니다.`;
    const result = this.lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    this.data = {
      message: purchaseMessage,
      result,
    };
  }

  run(money) {
    this.issueLotto(this.countLottoTicket(money));
    this.setResultData();
    View.print(this);
  }
}

module.exports = LottoSeller;
