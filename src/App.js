const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const Bonus = require('./domain/Bonus');
const LottoStore = require('./domain/LottoStore');

const { LOTTO_QUESTION } = require('../utils/constants');
const { validateLottoRange, print } = require('../utils/method');

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

      print.lottoPaymentUI({
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

  #drawBonus() {
    Console.readLine(LOTTO_QUESTION.bonus, input => {
      this.#bonus = new Bonus(input);

      print.lottoAdjustmentUI({
        lotto: this.#lotto,
        bonus: this.#bonus,
        lottoStore: this.#lottoStore,
      });

      Console.close();
    });
  }

  play() {
    this.#buyLotto();
  }
}

module.exports = App;
