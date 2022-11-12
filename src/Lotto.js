const ConsoleWork = require('./ConsoleWork');
const Message = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static playGame() {
    ConsoleWork.print(Message.START_MESSAGE);
    ConsoleWork.takeInput('', (message) => ConsoleWork.print(message));
  }
}

module.exports = Lotto;
