const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');
const RandomWork = require('./RandomWork');

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  startGame() {
    ConsoleWork.print(`${this.#numbers / 1000}${Message.PURCHASE_MESSAGE}`);
  }
}

module.exports = Lotto;
