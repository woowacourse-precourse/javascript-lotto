const { readLine, print } = require('@woowacourse/mission-utils').Console;
const { INPUT, OUTPUT } = require('./Constants');
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
    print(OUTPUT.STATISTICS);
    print()

    print(this.#lottoResult.getResult());

  }

}

new Lottery().progress();

module.exports = Lottery;
