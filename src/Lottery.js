const { readLine, print } = require('@woowacourse/mission-utils').Console;
const { INPUT, OUTPUT, LOTTO } = require('./Constants');
const LottoStore = require('./LottoStore');
const LottoResult = require('./LottoResult');
const Lotto = require('./Lotto');

class Lottery {
  #lotto;
  #lottoStore;
  #lottoResult;

  progress() {
    this.getPrice();

    /*
    const LOTTO = this.#lotto.getLotto();
    console.log(LOTTO)
    */
  }
  
  getPrice() {
    readLine(INPUT.PRICE, (price) => {
      this.#lottoStore = new LottoStore(price);
      this.printAutoLotto();
    });
  }

  printAutoLotto() {
    print(OUTPUT.NEW_LINE + this.#lottoStore.getCount() + OUTPUT.COUNT);
    this.#lottoStore.getAutoLotto().map((numbers) => {
      print(numbers);
    });
    this.getLottoNumber();
  }

  getLottoNumber() {
    readLine(INPUT.LOTTO_NUMBER, (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    readLine(INPUT.BONUS_NUMBER, (number) => {
      this.#lotto.setBonus(number);
      this.printResult();
    });
  }

  printResult() {
    this.#lottoResult = new LottoResult(this.#lotto.getLotto(), this.#lottoStore.getAutoLotto());
    const result = this.#lottoResult.getResult();
    print(OUTPUT.STATISTICS);
    print(LOTTO.FIFTH_PLACE + result[0] + LOTTO.COUNT);
    print(LOTTO.FOURTH_PLACE + result[1] + LOTTO.COUNT);
    print(LOTTO.THIRD_PLACE + result[2] + LOTTO.COUNT);
    print(LOTTO.SECOND_PLACE + result[3] + LOTTO.COUNT);
    print(LOTTO.FIRST_PLACE + result[4] + LOTTO.COUNT);

  }

}

new Lottery().progress();

module.exports = Lottery;
