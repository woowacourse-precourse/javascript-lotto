const onsoleWork = require('./ConsoleWork');
const Message = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  startGame() {
    console.log(this.#numbers);
  }
}

module.exports = Lotto;
