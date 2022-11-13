const Mission = require("@woowacourse/mission-utils");
const { LOTTO_INFO, GAME_MESSAGES, ERROR_MESSAGES, NUMBERS } = require("../utils/Constants");

class QuickPick {
  #amount;
  #myLottoArray;

  constructor(payment) {
    this.validate(payment);
    this.checkAmount(payment);
    this.pickRandomNumbers();
  }

  validate(payment) {
    if (!Number(payment)) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_TYPE);
    }
    if (payment % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    }
  }

  checkAmount(payment) {
    this.#amount = payment / LOTTO_INFO.LOTTO_PRICE;
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
}

module.exports = QuickPick;
