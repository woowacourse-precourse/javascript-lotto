const { Console } = require('@woowacourse/mission-utils');
const LottoGenerator = require('./domain/LottoGenerator');
const LottoCalculator = require('./domain/LottoCalculator');
const WinningLotto = require('./Lotto');
const {
  printLottoResult,
  printGeneratedLottos,
} = require('./utils/manageConsole');

class App {
  constructor() {
    this.winningLotto = new WinningLotto();
    this.lottoGenerator = new LottoGenerator();
  }

  play() {
    this.buyLotto().then(() => {
      this.generateLuckyLotto().then(() => {
        this.getResultOfLotto(
          this.lottoGenerator.lottos,
          this.winningLotto.lotto,
          this.winningLotto.bonusNum
        );
      });
    });
  }

  buyLotto() {
    return new Promise((resolve) => {
      Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
        this.lottoGenerator.validateInputMoney(money);
        const generatedLottos = this.lottoGenerator.generateLottos(money);
        resolve(printGeneratedLottos(generatedLottos));
      });
    });
  }

  async generateLuckyLotto() {
    return new Promise((resolve) => {
      Console.readLine('\n당첨 번호를 입력해 주세요.\n', (lotto) => {
        lotto = lotto.split(',').map((num) => {
          return parseInt(num);
        });
        resolve(this.winningLotto.setLotto(lotto));
      });
    }).then(() => {
      return new Promise((resolve) => {
        Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
          resolve(this.winningLotto.setBonusNum(bonusNum));
        });
      });
    });
  }

  getResultOfLotto(lottos, winningLotto, bonusNum) {
    return new Promise((resolve) => {
      const lottoCalculator = new LottoCalculator(
        lottos,
        winningLotto,
        bonusNum
      );
      const PROFIT = lottoCalculator.calculateProfit();
      const SCORE = lottoCalculator.score;
      resolve(printLottoResult(SCORE, PROFIT), Console.close());
    });
  }
}

module.exports = App;
const app = new App();
app.play();
