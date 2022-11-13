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
    ConsoleWork.print(this.makeLotto());
  }

  makeLotto() {
    const result = [];
    while (result.length < 6) {
      const number = RandomWork.makeRandom(1, 45);
      result.push(number);
    }
    return result;
  }
}

module.exports = Lotto;
