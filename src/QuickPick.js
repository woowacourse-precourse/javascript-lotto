const { Console, Random } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES, NUMBERS } = require("./Constants");

class QuickPick {
  #amount;
  #myLottoArray;

  constructor(amount) {
    this.#amount = amount;
    this.#myLottoArray = QuickPick.pickRandomNumbers(amount);
  }

  static pickRandomNumbers(amount) {
    return Array(amount)
      .fill(0)
      .map(() =>
        Random.pickUniqueNumbersInRange(
          NUMBERS.MIN_LOTTO_NUMBER,
          NUMBERS.MAX_LOTTO_NUMBER,
          NUMBERS.CORRECT_LOTTO_LENGTH
        ).sort((a, b) => a - b)
      );
  }

  printNumbersArray() {
    Console.print(GAME_MESSAGES.ANNOUNCE_AMOUNT(this.#amount));
    this.#myLottoArray.forEach((item) => {
      Console.print(`[${item.join(", ")}]`);
    });
  }

  getLottoAmout() {
    return this.#amount;
  }

  getMyLottoArray() {
    return this.#myLottoArray;
  }
}

module.exports = QuickPick;
