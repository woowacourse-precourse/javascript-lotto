const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./IssueLotto');
const LottoEarnings = require('./Calculator');
const Lotto = require('./Lotto');
const Match = require('./Matcher');

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
    });
  }

  winningStatistics(profit) {
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${this.winRank.threeMatch[1]}개\n4개 일치 (50,000원) - ${this.winRank.fourMatch[1]}개\n5개 일치 (1,500,000원) - ${this.winRank.fiveMatch[1]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winRank.fiveBonusMatch[1]}개\n6개 일치 (2,000,000,000원) - ${this.winRank.sixMatch[1]}개\n총 수익률은 ${profit}입니다.`,
    );
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
