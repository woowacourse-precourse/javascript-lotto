const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./IssueLotto');
const LottoEarnings = require('./Calculator');
const Lotto = require('./Lotto');
const Match = require('./Matcher');
const Result = require('./Result');

const Console = MissionUtils.Console;

class App {
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, money => {
      if (money % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
      }
      LottoGenerator.getPurchaseLottoCount(Number(money));
      LottoEarnings.money += Number(money);
      this.enterWinningNumber();
    });
  }

  enterWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', input => {
      const inputNumber = input.split(',').map(num => Number(num));
      const lotto = new Lotto(inputNumber);
      lotto.validate(inputNumber);
      Match.winningNumber = inputNumber;
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', input => {
      const inputNumber = Number(input);
      Match.bonusNumber.push(inputNumber);
      this.winningStatistics();
    });
  }

  winningStatistics() {
    Match.matchLottoNumber();
    const earnings = LottoEarnings.getEarnings();
    Result.printResult(earnings);
  }
}

const app = new App();
app.play();

module.exports = App;
