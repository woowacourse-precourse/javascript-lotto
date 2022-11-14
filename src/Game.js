const Calculator = require('./Calculator');
const { ERROR_MSG, GAME_MSG, NEW_LINE } = require('./Constant');
const IO = require('./IO');

class Game {
  constructor() {
    this.lottos = null;
    this.cost = 0;
  }

  static validate(money) {
    if (money % 1000 > 0)
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.only1000WonUnits);
  }

  static enterMoney() {
    IO.readLine(GAME_MSG.pleaseEnterMoney + NEW_LINE, (input) => {
      const money = +input;
      this.cost = money;
      Game.validate(money);
    });
  }

  static printMoneyInfo(money) {
    const n = Calculator.calcQuotient(money);
    IO.print(NEW_LINE + n + GAME_MSG.bought);
  }
}

module.exports = Game;
