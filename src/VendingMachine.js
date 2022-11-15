const { Console, Random } = require('@woowacourse/mission-utils');

const { PHRASE, ERROR, LOTTO } = require('./constants');
const DrawMachine = require('./DrawMachine');
const ScoreMachine = require('./ScoreMachine');
const Lotto = require('./Lotto');

class VendingMachine {
  #lottoNumber;

  constructor() {
    this.drawMachine = new DrawMachine();
  }

  askPurchaseAmount() {
    Console.readLine(PHRASE.PURCHASE_AMOUNT, (input) => {
      this.validate(input);
      this.makeLotto(input);
      this.drawMachine.darwWinningNumber();
    });
  }

  validate(input) {
    if (isNaN(input)) throw new Error(ERROR.PURCHASE_AMOUNT_TYPE);
    if (input % LOTTO.PRICE !== 0 || input == 0)
      throw new Error(ERROR.PURCHASE_AMOUNT_UNIT);
  }

  makeLotto(input) {
    const count = input / LOTTO.PRICE;
    this.printLottoCount(count);

    for (let i = 0; i < count; i++) {
      this.generateLottoNumber();
      const lotto = new Lotto(this.#lottoNumber);
      ScoreMachine.lottoList.push(lotto);
      this.printLottoNumber();
    }
  }

  generateLottoNumber() {
    const number = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT
    );
    this.#lottoNumber = number;
  }

  printLottoCount(count) {
    Console.print(count + PHRASE.LOTTO_COUNT);
  }

  printLottoNumber() {
    Console.print(`[${this.#lottoNumber.sort((a, b) => a - b).join(', ')}]`);
  }
}

module.exports = VendingMachine;
