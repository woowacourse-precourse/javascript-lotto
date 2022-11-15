const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, PRINT_MESSAGE } = require("./constants/constants");

const Lotto = require("./Lotto");
const Lottos = require("./Lottos");

const OutputUtils = require("./OutputUtils");
const Result = require("./Result");

class App {
  #winningLotto;
  #lottoMoney;

  constructor() {
    this.result = new Result();
    this.lottos = [];
  }

  play() {
    this.startLotto();
  }

  startLotto() {
    Console.readLine(INPUT_MESSAGE.BUY_MONEY, (answer) => {
      this.#lottoMoney = answer;
      this.validateLottoMoney(answer);

      this.createLottos();

      this.getWinningNum();
    });
  }

  validateLottoMoney(inputLottoMoney) {
    this.validateIsNumber(inputLottoMoney);
    this.validateIsOverThousand(inputLottoMoney);
    this.validateIsDividedByThounsand(inputLottoMoney);
  }

  validateIsNumber(inputLottoMoney) {
    if (isNaN(inputLottoMoney)) throw "[ERROR]숫자를 입력해주세요";
  }

  validateIsOverThousand(inputLottoMoney) {
    if (inputLottoMoney < 1000)
      throw "[ERROR]1000원 이상의 금액을 입력해주세요.";
  }

  validateIsDividedByThounsand(inputLottoMoney) {
    if (inputLottoMoney % 1000 !== 0)
      throw "[ERROR]1000원 단위의 숫자를 입력해주세요.";
  }

  createLottos() {
    const lottoNum = this.divideMoneyByThousand();
    this.lottos = Lottos.createLottos(lottoNum);
    OutputUtils.printLottos(this.lottos);
  }

  divideMoneyByThousand() {
    const lottoNum = parseInt(this.#lottoMoney / 1000);
    Console.print(`${lottoNum}${PRINT_MESSAGE.BUY_LOTTO}`);
    return lottoNum;
  }

  getWinningNum() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUM, (answer) => {
      const winNumbers = answer.split(",").map((item) => Number(item));
      this.#winningLotto = new Lotto(winNumbers);
      this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUM, (answer) => {
      this.validateBonusNum(answer);
      const bonusNum = Number(answer);
      this.matchAllLottos(bonusNum);
    });
  }

  matchAllLottos(bonusNum) {
    const scores = this.lottos.getLottoScores(this.#winningLotto);
    const lottoResult = this.result.createLottoResult(
      scores,
      bonusNum,
      this.lottos
    );
    const bonusResult = this.result.createBonusResult();
    this.endLottoGame(lottoResult, bonusResult);
  }

  endLottoGame(lottoResult, bonusResult) {
    const totalYield = this.result.getTotalYield(
      this.#lottoMoney,
      lottoResult,
      bonusResult
    );
    this.result.printLottoResult(lottoResult, bonusResult, totalYield);
    Console.close();
  }

  validateBonusNum(input) {
    this.validateIsNumber(input);
    this.validateRange(input);
  }

  validateRange(input) {
    if (Number(input) < 1 || Number(input) > 45)
      throw "[ERROR]1부터 45 사이의 숫자를 입력해주세요.";
  }
}
const app = new App();
app.play();
module.exports = App;
