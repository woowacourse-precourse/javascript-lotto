const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, PRINT_MESSAGE } = require("./constants/constants");

const Lotto = require("./Lotto");
const OutputUtils = require("./OutputUtils");
const Result = require("./Result");

class App {
  #winningLotto;
  #buyMoney;

  constructor() {
    this.result = new Result();
    this.lottoArr = [];
  }

  play() {
    this.startLotto();
  }

  startLotto() {
    Console.readLine(INPUT_MESSAGE.BUY_MONEY, (answer) => {
      this.#buyMoney = answer;
      this.validateBuyMoney(answer);
      this.createLottos();

      OutputUtils.printLottos(this.lottoArr);
      this.getWinningNum(this.lottoArr);
    });
  }

  createLottos() {
    const lottoNum = this.divideMoneyByThousand();
    this.lottoArr = Lotto.createTotalLottoArr(lottoNum);
  }

  validateBuyMoney(inputBuyMoney) {
    this.validateIsNumber(inputBuyMoney);
    this.validateIsOverThousand(inputBuyMoney);
    this.validateIsDividedByThounsand(inputBuyMoney);
  }

  validateIsNumber(inputBuyMoney) {
    if (isNaN(inputBuyMoney)) throw "[ERROR]숫자를 입력해주세요";
  }

  validateIsOverThousand(inputBuyMoney) {
    if (inputBuyMoney < 1000) throw "[ERROR]1000원 이상의 금액을 입력해주세요.";
  }

  validateIsDividedByThounsand(inputBuyMoney) {
    if (inputBuyMoney % 1000 !== 0)
      throw "[ERROR]1000원 단위의 숫자를 입력해주세요.";
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
      this.validateBonusNum(answer);
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
      Console.close();
    });
  }

  validateBonusNum(input) {
    this.validateIsNumber(input);
    this.validateRange(input);
  }

  validateRange(input) {
    if (Number(input) < 1 || Number(input) > 45)
      throw "[ERROR]1부터 45 사이의 숫자를 입력해주세요.";
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
