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
    Console.readLine(PHRASE.PURCHASE_AMOUNT, this.run.bind(this));
  }

  run(input) {
    this.validate(input);
    this.printLottoCount(input);
    this.makeLotto(input);
    this.drawMachine.askWinningNumber();
  }

  validate(input) {
    if (isNaN(input)) throw new Error(ERROR.PURCHASE_AMOUNT_TYPE);
    if (input % LOTTO.PRICE !== 0 || input == 0)
      throw new Error(ERROR.PURCHASE_AMOUNT_UNIT);
    if (input < 0) throw new Error(ERROR.PURCHASE_AMOUNT_POSITIVE);
  }

  printLottoCount(input) {
    const count = input / LOTTO.PRICE;
    Console.print(count + PHRASE.LOTTO_COUNT);
  }

  makeLotto(input) {
    const count = input / LOTTO.PRICE;
    for (let i = 0; i < count; i++) {
      this.createLottoNumber();
      this.createLotto();
      this.printLottoNumber();
    }
  }

  createLottoNumber() {
    const number = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT
    );
    this.#lottoNumber = number;
  }

  createLotto() {
    const lotto = new Lotto(this.#lottoNumber);
    this.conveyLotto(lotto);
  }

  conveyLotto(lotto) {
    ScoreMachine.lottoList.push(lotto);
  }

  printLottoNumber() {
    Console.print(`[${this.#lottoNumber.sort((a, b) => a - b).join(', ')}]`);
  }
}

module.exports = VendingMachine;
