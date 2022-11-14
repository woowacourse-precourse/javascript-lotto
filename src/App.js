const { Console } = require('@woowacourse/mission-utils');
const LottoGenerator = require('./domain/LottoGenerator');
const LottoCalculator = require('./domain/LottoCalculator');
const WinningLotto = require('./Lotto');
const {
  printLottoResult,
  printGeneratedLottos,
  printNumOfLottos,
} = require('./utils/manageConsole');

class App {
  constructor() {
    this.winningLotto = new WinningLotto();
    this.lottoGenerator = new LottoGenerator();
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.lottoGenerator.validateInputMoney(money);
      printNumOfLottos(this.lottoGenerator.getNumOfLottos(money));
      printGeneratedLottos(this.lottoGenerator.generateLottos(money));
      return this.generateLuckyLotto();
    });
  }

  generateLuckyLotto() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (lotto) => {
      lotto = lotto.split(',').map((num) => {
        return parseInt(num);
      });
      this.winningLotto.setLotto(lotto);
      return this.generateBonusNum();
    });
  }

  generateBonusNum() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
      this.winningLotto.setBonusNum(bonusNum);
      return this.getResultOfLotto(
        this.lottoGenerator.lottos,
        this.winningLotto.lotto,
        this.winningLotto.bonusNum
      );
    });
  }

  getResultOfLotto(lottos, winningLotto, bonusNum) {
    const lottoCalculator = new LottoCalculator(lottos, winningLotto, bonusNum);
    const PROFIT = lottoCalculator.calculateProfit();
    const SCORE = lottoCalculator.score;
    return printLottoResult(SCORE, PROFIT), Console.close();
  }
}

module.exports = App;
const app = new App();
app.play();
