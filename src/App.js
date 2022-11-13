const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Match = require('./Matcher');

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.LOTTO_TICKET_PRICE = 1000;
    this.lottoCount = 0;
  }
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, money => {
      if (money % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
      }
      this.lottoCount += Number(money) / this.LOTTO_TICKET_PRICE;
      this.money += Number(money);
      this.makeRandomLottoNumber();
    });
  }

  makeRandomLottoNumber() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const updateNumber = [...this.lottoNumber];
      updateNumber.push(lottoNumber.sort((a, b) => a - b));
      this.lottoNumber = updateNumber;
    }
    this.printLotto();
  }

  printLotto() {
    const lottoList = this.lottoNumber
      .map((x, index) => '[' + this.lottoNumber[index].join(', ') + ']')
      .join('\n');
    Console.print(`\n${this.lottoCount}개를 구매했습니다.\n${lottoList}`);
    this.enterWinNumber();
  }

  enterWinNumber() {
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
      this.matchLottoNumber();
    });
  }

  findLottoProfit() {
    const profit =
      String(
        ((this.winRank.threeMatch[0] * this.winRank.threeMatch[1] +
          this.winRank.fourMatch[0] * this.winRank.fourMatch[1] +
          this.winRank.fiveMatch[0] * this.winRank.fiveMatch[1] +
          this.winRank.sixMatch[0] * this.winRank.sixMatch[1] +
          this.winRank.fiveBonusMatch[0] * this.winRank.fiveBonusMatch[1]) /
          this.money) *
          100,
      ) + '%';
    this.winningStatistics(profit);
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
