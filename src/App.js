const { Console } = require('@woowacourse/mission-utils');
const { INPUT, OUTPUT, LOTTO } = require('./Constant');
const Lotto = require('./Lotto');
const LottoStore = require('./LottoStore');
const LottoResult = require('./LottoResult');

class App {
  #lotto;
  #lottoStore;
  #lottoResult;
  
  play() {
    this.getPrice();
  }

  getPrice() {
    Console.readLine(INPUT.PRICE, (price) => {
      this.#lottoStore = new LottoStore(price);
      this.printAutoLotto();
    });
  }

  printAutoLotto() {
    Console.print(OUTPUT.NEW_LINE + this.#lottoStore.getCount() + OUTPUT.COUNT);
    this.#lottoStore.setAutoLotto().map((numbers) => {
      Console.print(`[${numbers.join(', ')}]`);
    });
    this.getLottoNumber();
  }

  getLottoNumber() {
    Console.readLine(INPUT.LOTTO_NUMBER, (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT.BONUS_NUMBER, (number) => {
      this.#lotto.setBonus(number);
      this.printResult();
    });
  }

  printResult() {
    this.#lottoResult = new LottoResult(this.#lotto.getLotto(), this.#lottoStore.getAutoLotto());
    const result = this.#lottoResult.getResult();
    Console.print(OUTPUT.STATISTICS);
    Console.print(LOTTO.FIFTH_PLACE + result[0] + LOTTO.COUNT);
    Console.print(LOTTO.FOURTH_PLACE + result[1] + LOTTO.COUNT);
    Console.print(LOTTO.THIRD_PLACE + result[2] + LOTTO.COUNT);
    Console.print(LOTTO.SECOND_PLACE + result[3] + LOTTO.COUNT);
    Console.print(LOTTO.FIRST_PLACE + result[4] + LOTTO.COUNT);

    Console.print(LOTTO.RATE_RETURN + this.#lottoResult.getRate(result) + LOTTO.PERCENT);
    Console.close();
  }

}

new App().play();

module.exports = App;
