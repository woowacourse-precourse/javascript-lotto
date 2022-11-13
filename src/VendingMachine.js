const { Console, Random } = require('@woowacourse/mission-utils');

const { PHRASE, ERROR, LOTTO } = require('./constants');
const Lotto = require('./Lotto');

class VendingMachine {
  #lottoNumber = [];

  askPurchaseAmount() {
    Console.readLine(PHRASE.PURCHASE_AMOUNT, (input) => {
      this.validate(input);
      this.makeLotto(input);
    });
  }

  validate(input) {
    if (isNaN(input)) throw new Error(ERROR.PURCHASE_AMOUNT_TYPE);
    if (input % 1000 !== 0 || input == 0) throw new Error(ERROR.PURCHASE_AMOUNT_UNIT);
  }

  makeLotto(input) {
    const count = input / 1000;
    this.printLottoCount(count);

    for (let i = 0; i < count; i++) {
      this.generateLottoNumber();
      new Lotto(this.#lottoNumber);
    }
  }

  generateLottoNumber() {
    this.#lottoNumber.splice(0);

    while (this.#lottoNumber.length < LOTTO.NUMBERS_COUNT) {
      const number = Random.pickNumberInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
      if (!this.#lottoNumber.includes(number)) this.#lottoNumber.push(number);
    }
  }

  printLottoCount(count) {
    Console.print(count + PHRASE.LOTTO_COUNT);
  }
}

module.exports = VendingMachine;
