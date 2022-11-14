const Calculator = require('./Calculator');
const { ERROR_MSG, GAME_MSG, NEW_LINE } = require('./Constant');
const IO = require('./IO');
const NumberGenerator = require('./NumberGenerator');

class Game {
  constructor() {
    this.lottos = null;
    this.cost = 0;
    this.winningNumbers = null;
    this.bonusNumber = 0;
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

  static buyLottos(n) {
    this.lottos = [...Array(n)].map(
      () => new Lotto(NumberGenerator.generateRandomNumbers())
    );
  }

  static enterWinningNumbers() {
    IO.readLine(GAME_MSG.pleaseEnterWinningNumbers, (input) => {
      this.winningNumbers = input.trim().split(',').map(Number);
    });
  }

  static enterBonusNumber() {
    IO.readLine(GAME_MSG.pleaseEnterBonusNumber, (input) => {
      this.bonusNumber = +input;
    });
  }
}

module.exports = Game;
