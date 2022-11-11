const { Console } = require('@woowacourse/mission-utils');
const { validateLottoRange } = require('../utils/method');

const LottoAdjustment = require('./LottoAdjustment');
const Lotto = require('./Lotto');
const LottoStore = require('./LottoStore');
const LottoDrawFactory = require('./LottoDrawFactory');
const Bonus = require('./Bonus');

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
    Console.readLine('구입금액을 입력해주세요.\n', input => {
      this.#lottoStore = new LottoStore(input);

      this.#drawLotto();
    });
  }

  #drawLotto() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', input => {
      const inputNumArr = input
        .split(',')
        .map(value => validateLottoRange(value));

      this.#lotto = new Lotto(inputNumArr);

      this.#drawBonus();
    });
  }

  #drawBonus() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', input => {
      this.#bonus = new Bonus(input);

      const lottoPayment = new LottoAdjustment({
        draw: new LottoDrawFactory({ lotto: this.#lotto, bonus: this.#bonus }),
        payment: this.#lottoStore,
      });

      lottoPayment.print();
    });
  }

  play() {
    this.#buyLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
