const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, RANK_MESSAGE, RANK } = require('./constants/lotto');

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
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, (money) => {
      App.#validateNumberInput(money);

      this.#buyer = new LottoBuyer(+money);
      this.#buyer.buyLotto();

      const buyerLotto = this.#buyer.lotto;

      Console.print(`\n${buyerLotto.length}${GAME_MESSAGE.BUY_COUNT}`);

      buyerLotto.forEach((lotto) => {
        Console.print(lotto);
      });

      this.#readLottoNumber();
    });
  }

  #readLottoNumber() {
    Console.readLine(GAME_MESSAGE.LOTTO_NUMBER_INPUT, (numbers) => {
      const lottoNumbers = numbers.split(',').map((number) => {
        App.#validateNumberInput(number);
        return +number;
      });

      this.#lotto = new Lotto(lottoNumbers);

      this.#readBonusNumber();
    });
  }

  #readBonusNumber() {
    Console.readLine(GAME_MESSAGE.BONUS_NUMBER_INPUT, (number) => {
      App.#validateNumberInput(number);

      this.#lotto.setBonusNumber(+number);
      this.#comparer = new LottoComparer(this.#buyer, this.#lotto);

      this.#comparer.setBuyerLottoRanking();
      this.#printLottoRank();

      this.#comparer.setYield();
      Console.print(`총 수익률은 ${this.#comparer.yield}%입니다.`);

      Console.close();
    });
  }

  #printLottoRank() {
    Console.print(GAME_MESSAGE.RESULT_TITLE);

    Object.keys(RANK_MESSAGE).forEach((rankKey) => {
      const rank = RANK[rankKey];
      Console.print(`${RANK_MESSAGE[rankKey]} ${this.#comparer.ranking[rank]}`);
    });
  }

  static #validateNumberInput(input) {
    if (input === '') {
      throw new Error('[ERROR] 빈 값을 입력하였습니다.');
    }

    if (input.includes(' ')) {
      throw new Error('[ERROR] 공백을 포함해 입력하였습니다.');
    }

    if (isNaN(input)) {
      throw new Error('[ERROR] 입력 값은 숫자여야 합니다.');
    }
  }
}

module.exports = App;
