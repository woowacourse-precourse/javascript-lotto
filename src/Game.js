const { Console } = require('@woowacourse/mission-utils');

class Game {
  askNumber(message, callback) {
    Console.readLine(message, callback);
  }
}

module.exports = Game;
