const Mission = require("@woowacourse/mission-utils");
const { LOTTO_INFO, GAME_MESSAGES, NUMBERS, ERROR_MESSAGES } = require("../utils/Constants");

class QuickPick {
  #payment;
  #amount;
  #myLottoArray;

  constructor(payment) {
    this.validate(payment);
    this.#payment = Number(payment);
    this.countAmount();
    this.pickRandomNumbers();
  }

  validate(payment) {
    if (payment < 1000) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_MIN);
    }

    if (payment % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    }

    if (!Number(payment)) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_TYPE);
    }
  }

  countAmount() {
    this.#amount = this.#payment / LOTTO_INFO.LOTTO_PRICE;
  }

  pickRandomNumbers() {
    this.#myLottoArray = Array(this.#amount)
      .fill(null)
      .map((item) =>
        Mission.Random.pickUniqueNumbersInRange(
          NUMBERS.MIN_LOTTO_NUMBER,
          NUMBERS.MAX_LOTTO_NUMBER,
          NUMBERS.CORRECT_LOTTO_LENGTH
        ).sort((a, b) => a - b)
      );
    this.printNumbersArray();
  }

  printNumbersArray() {
    Mission.Console.print(`\n${GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(this.#amount)}`);
    this.#myLottoArray.forEach((item) => {
      let eachItems = String(item).replace(/,/gi, ", ");
      Mission.Console.print(`[${eachItems}]`);
    });
  }

  arrayOutput() {
    return this.#myLottoArray;
  }

  amountOutput() {
    return this.#amount;
  }
  paymentOutput() {
    return this.#payment;
  }
}

module.exports = QuickPick;
