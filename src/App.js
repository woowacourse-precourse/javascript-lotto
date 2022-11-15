const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const User = require('./components/User');
const Winning = require('./components/Winning');
const { allMatchNum } = require('./utils/utils');

class App {
  inputMoney() {
    Console.readLine(MESSAGE.MONEY_INPUT + '\n', inputMoney => {
      this.user = new User(inputMoney);
      this.user.setLottos();
      this.user.printMyLottos();

      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine('\n' + MESSAGE.NUMBER_INPUT + '\n', winningNumbers => {
      this.winning = new Winning(winningNumbers);

      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine('\n' + MESSAGE.BONUS_INPUT + '\n', bonusNumber => {
      this.winning.setBonusNum(bonusNumber);

      const winningCountMap = this.user.checkWinningCount(
        this.winning.winningNumber,
        this.winning.bonusNumber,
      );

      this.printResult(winningCountMap);
    });
  }

  printResult(countMap) {
    Console.print(MESSAGE.WINNING);
    Console.print(
      `${MESSAGE.MATCH_THREE}${countMap.get(3) || 0}${MESSAGE.COUNT}`,
    );
    Console.print(
      MESSAGE.MATCH_FOUR + (countMap.get(4) || 0).toString() + MESSAGE.COUNT,
    );
    Console.print(
      MESSAGE.MATCH_FIVE + (countMap.get(5) || 0).toString() + MESSAGE.COUNT,
    );
    Console.print(
      MESSAGE.MATCH_FIVE_BONUS +
        (countMap.get('bonus') || 0).toString() +
        MESSAGE.COUNT,
    );
    Console.print(
      MESSAGE.MATCH_SIX + (countMap.get(6) || 0).toString() + MESSAGE.COUNT,
    );
    Console.print(
      `${MESSAGE.YIELD} ${this.user.calculateYield(countMap)}%${MESSAGE.END}`,
    );
    Console.close();
  }

  play() {
    this.inputMoney();
  }
}

module.exports = App;
