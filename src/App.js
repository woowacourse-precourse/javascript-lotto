const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, PRINT_MESSAGE } = require("./constants/constants");

const Lotto = require("./Lotto");
const Output = require("./Output");
const Result = require("./Result");

class App {
  #winningLotto;
  #buyMoney;

  constructor() {
    this.result = new Result();
    // this.lotto = new Lotto();
    this.lottoArr = [];
  }

  play() {
    this.inputBuyMoney();
  }

  inputBuyMoney() {
    Console.readLine(INPUT_MESSAGE.BUY_MONEY, (answer) => {
      let lottoNum;
      this.#buyMoney = answer;
      lottoNum = this.divideMoneyByThousand();
      this.lottoArr = Lotto.createTotalLottoArr(lottoNum);

      Output.printLottos(this.lottoArr);
      this.getWinningNum(this.lottoArr);
    });
  }

  divideMoneyByThousand() {
    const lottoNum = parseInt(this.#buyMoney / 1000);
    Console.print(`${lottoNum}${PRINT_MESSAGE.BUY_LOTTO}`);
    return lottoNum;
  }

  getWinningNum(lottoArr) {
    Console.readLine(INPUT_MESSAGE.WINNING_NUM, (answer) => {
      const winNumbers = answer.split(",").map((item) => Number(item));
      this.#winningLotto = new Lotto(winNumbers);
      this.getBonusNum(lottoArr);
    });
  }

  getBonusNum(lottoArr) {
    Console.readLine(INPUT_MESSAGE.BONUS_NUM, (answer) => {
      const bonusNum = Number(answer);
      const scores = this.getLottoScores(lottoArr, this.#winningLotto);
      const lottoResult = this.result.createLottoResult(
        scores,
        bonusNum,
        lottoArr
      );
      const bonusResult = this.result.createBonusResult();
      console.log(bonusResult);
      const totalYield = this.result.getTotalYield(
        this.#buyMoney,
        lottoResult,
        bonusResult
      );
      this.result.printLottoResult(lottoResult, bonusResult, totalYield);
    });
  }

  getLottoScores(lottos, winningLotto) {
    const scores = [];
    for (let i = 0; i < lottos.length; i++) {
      const eachScore = lottos[i].calculateScore(winningLotto);
      scores.push(eachScore);
    }
    return scores;
  }
}
const app = new App();
app.play();
module.exports = App;
