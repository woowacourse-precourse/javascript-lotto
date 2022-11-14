const Calculator = require('./Calculator');
const {
  ERROR_MSG,
  GAME_MSG,
  NEW_LINE,
  INCOMES,
  RESULT_MSG,
} = require('./Constant');
const IO = require('./IO');
const NumberGenerator = require('./NumberGenerator');
const Referee = require('./Referee');

const {
  ea,
  hrLine,
  isNPercent,
  match3,
  match4,
  match5,
  match6,
  matchBonus,
  stats,
  totalProfit,
} = RESULT_MSG;

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

  static calcResult() {
    const compareEachLotto = (result, lotto) => {
      const place = Referee.compare(
        lotto.numbers,
        this.winningNumbers,
        this.bonusNumber
      );
      place > 0 && result[place - 1]++;
      return result;
    };
    const result = this.lottos.reduce(compareEachLotto, [0, 0, 0, 0, 0]);
  }

  static convertGameResult(result) {
    const income = INCOMES.reduce((tot, val, i) => tot + val * result[i], 0);
    const profit = Calculator.calcProfit(this.cost, income);
  }

  static printGameResult([first, second, third, fourth, fifth], profit) {
    IO.print(stats + NEW_LINE + hrLine);
    IO.print(match3 + fifth + ea);
    IO.print(match4 + fourth + ea);
    IO.print(match5 + third + ea);
    IO.print(matchBonus + second + ea);
    IO.print(match6 + first + ea);
    IO.print(totalProfit + profit + isNPercent);
  }
}

module.exports = Game;
