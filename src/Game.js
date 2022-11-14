const { ERROR_MSG } = require('./Constant');

class Game {
  constructor() {
    this.lottos = null;
    this.cost = 0;
  }
  static validate(money) {
    if (money % 1000 > 0)
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.only1000WonUnits);
  }
}

module.exports = Game;
