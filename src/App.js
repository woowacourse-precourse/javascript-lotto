const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, RANK_MESSAGE, RANK, ERROR_MESSAGE } = require('./constants/lotto');

const Lotto = require('./Lotto');
const LottoBuyer = require('./LottoBuyer');
const LottoComparer = require('./LottoComparer');

class App {
  #buyer;

  #lotto;

  #comparer;

  play() {
    this.#readMoney();
  }

  #readMoney() {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, this.#onMoneySubmit.bind(this));
  }

  #onMoneySubmit(money) {
    App.#validateNumberInput(money);

    this.#buyer = new LottoBuyer(+money);
    this.#buyer.buyLotto();

    App.#printEmptyLine();
    this.#printBuyerLotto();

    App.#printEmptyLine();
    this.#readLottoNumber();
  }

  #printBuyerLotto() {
    const buyerLotto = this.#buyer.lotto;

    Console.print(`${GAME_MESSAGE.BUY_COUNT(buyerLotto.length)}`);

    buyerLotto.forEach((lotto) => {
      const lottoNumbers = `[${lotto.join(', ')}]`;
      Console.print(lottoNumbers);
    });
  }

  #readLottoNumber() {
    Console.readLine(GAME_MESSAGE.LOTTO_NUMBER_INPUT, this.#onLottoNumberSubmit.bind(this));
  }

  #onLottoNumberSubmit(numbers) {
    const lottoNumbers = numbers.split(',').map((number) => {
      App.#validateNumberInput(number);
      return +number;
    });

    this.#lotto = new Lotto(lottoNumbers);

    App.#printEmptyLine();
    this.#readBonusNumber();
  }

  #readBonusNumber() {
    Console.readLine(GAME_MESSAGE.BONUS_NUMBER_INPUT, this.#onBonusNumberSubmit.bind(this));
  }

  #onBonusNumberSubmit(number) {
    App.#validateNumberInput(number);

    this.#lotto.setBonusNumber(+number);
    this.#setComparer();

    App.#printEmptyLine();
    this.#printResult();

    Console.close();
  }

  #setComparer() {
    this.#comparer = new LottoComparer(this.#buyer, this.#lotto);
    this.#comparer.setRanking();
    this.#comparer.setProfitRate();
  }

  #printResult() {
    Console.print(GAME_MESSAGE.RESULT_TITLE);

    Object.keys(RANK_MESSAGE).forEach((rankKey) => {
      const rank = RANK[rankKey];
      Console.print(`${RANK_MESSAGE[rankKey]} ${GAME_MESSAGE.COUNT(this.#comparer.ranking[rank])}`);
    });

    Console.print(GAME_MESSAGE.PROFIT_RATE(this.#comparer.profitRate));
  }

  static #printEmptyLine() {
    Console.print('');
  }

  static #validateNumberInput(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY);
    }

    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.SPACE);
    }

    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }
}

module.exports = App;
