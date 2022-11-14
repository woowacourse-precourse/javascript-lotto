const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, PRINT_MESSAGE } = require("./constants/constants");

const Lotto = require("./Lotto");
const Output = require("./Output");
const Result = require("./Result");
const Score = require("./Score");

class App {
  #winningNum;
  #buyMoney;

  constructor() {
    this.result = new Result();
    this.score = new Score();
    this.lotto = new Lotto();
  }

  play() {
    this.inputBuyMoney();
  }

  inputBuyMoney() {
    Console.readLine(INPUT_MESSAGE.BUY_MONEY, (answer) => {
      let lottoNum;
      this.#buyMoney = answer;
      lottoNum = this.divideMoneyByThousand();
      const lottoArr = this.lotto.createTotalLottoArr(lottoNum);
      Output.printLottos(lottoArr);
      this.getWinningNum(lottoArr);
    });
  }

  divideMoneyByThousand() {
    const lottoNum = parseInt(this.#buyMoney / 1000);
    Console.print(`${lottoNum}${PRINT_MESSAGE.BUY_LOTTO}`);
    return lottoNum;
  }

  getWinningNum(lottoArr) {
    Console.readLine(INPUT_MESSAGE.WINNING_NUM, (answer) => {
      this.#winningNum = answer.split(",").map((item) => Number(item));
      this.getBonusNum(lottoArr);
    });
  }

  getBonusNum(lottoArr) {
    Console.readLine(INPUT_MESSAGE.BONUS_NUM, (answer) => {
      const bonusNum = Number(answer);
      const scores = this.score.getLottoScores(lottoArr, this.#winningNum);
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
}
const app = new App();
app.play();
module.exports = App;
