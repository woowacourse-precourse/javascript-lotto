const Console = require('../domains/Console');

class GameInput {
  static enter(message, playLotto) {
    Console.readLine(message, playLotto);
  }
}

module.exports = GameInput;
