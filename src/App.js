const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const Lotto = require('./components/Lotto');
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
      const map = allMatchNum(this.user.lottos, this.winning.winningNumber);
      this.printResult(map);
    });
  }

  compareLotto() {}

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
        (countMap.get(5) || 0).toString() +
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

const app = new App();
app.play();

module.exports = App;
