const Calculator = require('./Calculator');
const { GAME_MSG, NEW_LINE, INCOMES, RESULT_MSG } = require('./Constant');
const IO = require('./IO');
const Lotto = require('./Lotto');
const NumberGenerator = require('./NumberGenerator');
const Person = require('./Person');
const Referee = require('./Referee');
const Validator = require('./Validator');

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

class App {
  static winningNumbers;
  static bonusNumber;

  play() {
    App.enterMoney();
  }

  static enterMoney() {
    IO.readLine(pleaseEnterMoney + NEW_LINE, (input) => {
      const money = +input;
      Person.cost = money;
      Validator.validateMoney(money);
      App.printMoneyInfo(money);
    });
  }

  static printMoneyInfo(money) {
    const n = Calculator.calcQuotient(money);
    IO.print(NEW_LINE + n + bought);
    App.buyLottos(n);
  }

  static buyLottos(n) {
    const { generateRandomNumbers } = NumberGenerator;
    Person.lottos = [...Array(n)].map(() => new Lotto(generateRandomNumbers()));
    App.enterWinningNumbers();
  }

  static enterWinningNumbers() {
    IO.readLine(NEW_LINE + pleaseEnterWinningNumbers + NEW_LINE, (input) => {
      App.winningNumbers = input.trim().split(',').map(Number);
      Validator.validateNumbers(App.winningNumbers);
      App.enterBonusNumber();
    });
  }

  static enterBonusNumber() {
    IO.readLine(NEW_LINE + pleaseEnterBonusNumber + NEW_LINE, (input) => {
      App.bonusNumber = +input;
      App.calcResult();
    });
  }

  static calcResult() {
    const calcEachLotto = (result, lotto) => {
      const { numbers } = lotto;
      const { winningNumbers, bonusNumber } = App;
      const place = Referee.compare(numbers, winningNumbers, bonusNumber);
      place > 0 && result[place - 1]++;
      return result;
    };
    const result = Person.lottos.reduce(calcEachLotto, [0, 0, 0, 0, 0]);
    App.convertGameResult(result);
  }

  static convertGameResult(result) {
    const income = INCOMES.reduce((tot, val, i) => tot + val * result[i], 0);
    const profit = Calculator.calcProfit(Person.cost, income);
    App.printGameResult(result, profit);
  }

  static printGameResult([first, second, third, fourth, fifth], profit) {
    IO.print(NEW_LINE + stats + NEW_LINE + hrLine);
    IO.print(match3 + fifth + ea);
    IO.print(match4 + fourth + ea);
    IO.print(match5 + third + ea);
    IO.print(matchBonus + second + ea);
    IO.print(match6 + first + ea);
    IO.print(totalProfit + profit + isNPercent);
    App.end();
  }

  static end() {
    IO.close();
  }
}

module.exports = App;
