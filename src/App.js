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
      this.#buyer = new LottoBuyer(money);
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
      const lottoNumbers = numbers.split(',').map((number) => +number);
      this.#lotto = new Lotto(lottoNumbers);
      Console.print(this.#lotto.numbers);

      Console.close();
    });
  }
}

module.exports = App;
