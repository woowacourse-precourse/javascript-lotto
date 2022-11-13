const { Console } = require("@woowacourse/mission-utils");
const NumberGenerator = require("./NumberGenerator");

class App {
  lottos;
  winningNumber;

  constructor() {
    this.lottos = [];
    this.winningNumber = [];
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', this.issueLotto.bind(this));
  }

  issueLotto() {
    const numberGenerator = new NumberGenerator();
    for (let purchaseCount = 0; purchaseCount < purchaseMoney / 1000; purchaseCount++){
      this.lottos.push(new Lotto(numberGenerator.createRandomNumber()));
    }
  }

  printMyLottos() {
    Console.print(`\n${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach(lotto => lotto.print());
  }

  getWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.winningNumber = winningNumber.split(',').map(num => Number(num));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      this.endGame();
    });
  }

  printWinningResult() {
    String.prototype.format = function() {
      return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
    };
    this.lottoSimulator.gradeCount.forEach((count, rank) => {
      const rankUpperCase = rank.toUpperCase();
      Console.print('%s개 일치%s (%s원) - %s개'.format(
        GRADE[rankUpperCase].DUPLICATE_COUNT,
        GRADE[rankUpperCase].EXTRA_TEXT,
        GRADE[rankUpperCase].PRIZE_MONEY,
        count,
        )
      );
    });
  }

  printReturnRate() {
    Console.print(`총 수익률은 ${this.lottoSimulator.calcReturnRate(this.purchaseMoney)}%입니다.`);
  }
}

module.exports = App;

const ap = new App();
ap.play();