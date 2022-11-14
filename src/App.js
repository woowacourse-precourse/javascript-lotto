const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

const Bonus = require('./domain/Bonus');
const LottoStore = require('./domain/LottoStore');
const LottoAdjustment = require('./domain/LottoAdjustment');
const LottoDrawFactory = require('./domain/LottoDrawFactory');

const LottoPaymentComponent = require('./ui/component/LottoPaymentComponent');
const LottoWinCountComponet = require('./ui/component/LottoWinCountComponent');
const LottoIncomComponent = require('./ui/component/LottoIncomComponent');

const { LOTTO_QUESTION } = require('../utils/constants');
const { validateLottoRange } = require('../utils/method');

class App {
  #lottoStore;

  #lotto;

  #bonus;

  constructor() {
    this.#lottoStore = null;
    this.#lotto = null;
    this.#bonus = null;
  }

  #buyLotto() {
    Console.readLine(LOTTO_QUESTION.money, input => {
      this.#lottoStore = new LottoStore(input);

      new LottoPaymentComponent({
        count: this.#lottoStore.getCount(),
        lottos: this.#lottoStore.getLottos(),
      });

      this.#drawLotto();
    });
  }

  #drawLotto() {
    Console.readLine(LOTTO_QUESTION.lotto, input => {
      const inputNumArr = input
        .split(',')
        .map(value => validateLottoRange(value));

      this.#lotto = new Lotto(inputNumArr);

      this.#drawBonus();
    });
  }

  #printResult() {
    const lottoPayment = new LottoAdjustment(
      new LottoDrawFactory({
        lotto: this.#lotto,
        bonus: this.#bonus,
        lottoStore: this.#lottoStore,
      }),
    );

    new LottoWinCountComponet({ winScore: lottoPayment.getLottoCountScore() });

    new LottoIncomComponent({ income: lottoPayment.getIncome() });
  }

  #drawBonus() {
    Console.readLine(LOTTO_QUESTION.bonus, input => {
      this.#bonus = new Bonus(input);

      this.#printResult();

      Console.close();
    });
  }

  play() {
    this.#buyLotto();
  }
}

module.exports = App;
