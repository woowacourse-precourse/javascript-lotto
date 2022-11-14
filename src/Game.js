const Calculator = require('./Calculator');
const {
  ERROR_MSG,
  GAME_MSG,
  NEW_LINE,
  INCOMES,
  RESULT_MSG,
} = require('./Constant');
const IO = require('./IO');
const Lotto = require('./Lotto');
const NumberGenerator = require('./NumberGenerator');
const Person = require('./Person');
const Referee = require('./Referee');

const {
  bought,
  pleaseEnterBonusNumber,
  pleaseEnterMoney,
  pleaseEnterWinningNumbers,
} = GAME_MSG;
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
  static winningNumbers;
  static bonusNumber;

  static validate(money) {
    if (money % 1000 > 0)
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.only1000WonUnits);
  }

  static start() {
    Game.enterMoney();
  }

  static enterMoney() {
    IO.readLine(pleaseEnterMoney + NEW_LINE, (input) => {
      const money = +input;
      Person.cost = money;
      Game.validate(money);
      Game.printMoneyInfo(money);
    });
  }

  static printMoneyInfo(money) {
    const n = Calculator.calcQuotient(money);
    IO.print(NEW_LINE + n + bought);
    Game.buyLottos(n);
  }

  static buyLottos(n) {
    const { generateRandomNumbers } = NumberGenerator;
    Person.lottos = [...Array(n)].map(() => new Lotto(generateRandomNumbers()));
    Game.enterWinningNumbers();
  }

  static enterWinningNumbers() {
    IO.readLine(NEW_LINE + pleaseEnterWinningNumbers + NEW_LINE, (input) => {
      Game.winningNumbers = input.trim().split(',').map(Number);
      IO.validateNumbers(Game.winningNumbers);
      Game.enterBonusNumber();
    });
  }

  static enterBonusNumber() {
    IO.readLine(NEW_LINE + pleaseEnterBonusNumber + NEW_LINE, (input) => {
      Game.bonusNumber = +input;
      Game.calcResult();
    });
  }

  static calcResult() {
    const calcEachLotto = (result, lotto) => {
      const { numbers } = lotto;
      const { winningNumbers, bonusNumber } = Game;
      const place = Referee.compare(numbers, winningNumbers, bonusNumber);
      place > 0 && result[place - 1]++;
      return result;
    };
    const result = Person.lottos.reduce(calcEachLotto, [0, 0, 0, 0, 0]);
    Game.convertGameResult(result);
  }

  static convertGameResult(result) {
    const income = INCOMES.reduce((tot, val, i) => tot + val * result[i], 0);
    const profit = Calculator.calcProfit(Person.cost, income);
    Game.printGameResult(result, profit);
  }

  static printGameResult([first, second, third, fourth, fifth], profit) {
    IO.print(NEW_LINE + stats + NEW_LINE + hrLine);
    IO.print(match3 + fifth + ea);
    IO.print(match4 + fourth + ea);
    IO.print(match5 + third + ea);
    IO.print(matchBonus + second + ea);
    IO.print(match6 + first + ea);
    IO.print(totalProfit + profit + isNPercent);
    Game.end();
  }

  static end() {
    IO.close();
  }
}

module.exports = Game;
