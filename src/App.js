const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/lotto');
const Lotto = require('./Lotto');

const LottoBuyer = require('./LottoBuyer');

class App {
  #buyer;

  #lotto;

  play() {
    this.#readMoney();
    this.#readLottoNumber();
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
      Console.print(this.#lotto.numbers);

      Console.close();
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
