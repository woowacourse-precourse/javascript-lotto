const { Console } = require('@woowacourse/mission-utils');
const { INPUT, PRINT, LOTTO } = require('./constant/Constant');
const {
  checkValidMoneyInput,
  checkValidWinningNumberInput,
  checkValidBonusNumberInput,
} = require('./util/CheckValidInput');
const LottoStore = require('./LottoStore');
const LottoRule = require('./LottoRule');
const LottoChecker = require('./LottoChecker');

class App {
  lottoRule = new LottoRule(LOTTO.TOTAL_COUNT, {
    min: LOTTO.MIN,
    max: LOTTO.MAX,
  });
  store;
  winningNumber;
  bonusNumber;
  lottos;
  money = 0;

  constructor() {
    this.store = new LottoStore(this.lottoRule);
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(INPUT.MONEY, (input) => {
      checkValidMoneyInput(Number(input));
      this.money = parseInt(input, 10);
      this.lottos = this.store.sellLottos(this.money);
      this.printLotto();
    });
  }

  printLotto() {
    Console.print(PRINT.LOTTO_COUNT(this.lottos.length));
    this.lottos.map((lotto) => Console.print(lotto.printLotto()));
    this.inputWinningNumber();
  }

  inputWinningNumber() {
    Console.readLine(INPUT.WINNING_NUMBER, (input) => {
      this.winningNumber = input.split(',').map((number) => Number(number));
      checkValidWinningNumberInput(this.winningNumber);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT.BONUS_NUMBER, (input) => {
      checkValidBonusNumberInput(this.winningNumber, input);
      this.bonusNumber = input;
      const checker = new LottoChecker(this.winningNumber, this.bonusNumber);
      this.printWinningStatistics(this.lottos, checker, this.money);
    });
  }

  printWinningStatistics(lottos, checker, money) {
    const histories = checker.checkLottos(lottos);
    Console.print(PRINT.STATISTICS);
    let rewards = 0;
    histories.forEach((history) => {
      rewards += history.totalReward();
      Console.print(history.getMessage());
    });
    const profit = ((rewards / money) * 100).toFixed(1);
    Console.print(PRINT.STATISTICS_YIELD(profit));
    Console.close();
  }
}

module.exports = App;
