const { ERROR_MSG } = require('./Constant');

class Game {
  static validate(money) {
    if (money % 1000 > 0)
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.only1000WonUnits);
  }
}

module.exports = Game;
