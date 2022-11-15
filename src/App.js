/* eslint-disable prettier/prettier */
const { Console } = require("@woowacourse/mission-utils");
const LottoCompany = require("./LottoCompany");
const LottoManager = require("./LottoManager");
const LogicChain = require("./LogicChain");
const getUserInputAsync = require("./lib/userInput");

const lottoPrice = 1000;
const winningMoney = [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000];
class App {
  #lottoCompany;

  #lottoManager;

  #logicChain;

  constructor() {
    this.#lottoCompany = new LottoCompany(lottoPrice, winningMoney);
    this.#lottoManager = new LottoManager();
    this.#logicChain = new LogicChain();
    this.makeLogicOrders();
  }

  makeLogicOrders() {
    this.#logicChain.addNextAsyncJob((next) => { getUserInputAsync("\n구매금액을 입력해 주세요.\n" ,next); });
    this.#logicChain.addNextJob((inputMoney) => { this.#lottoManager.buyLottos(this.#lottoCompany, inputMoney); });
    this.#logicChain.addNextJob(() => { this.#lottoManager.printLottosStatus(); });
    this.#logicChain.addNextAsyncJob((next) => { getUserInputAsync("\n당첨 번호를 입력해 주세요.\n" ,next);});
    this.#logicChain.addNextJob((inputNumbers) => this.#lottoCompany.setWinningNumbers(inputNumbers));
    this.#logicChain.addNextAsyncJob((next) => { getUserInputAsync("\n보너스 번호를 입력해 주세요.\n" ,next);});
    this.#logicChain.addNextJob((inputNumber) => this.#lottoCompany.setBonusNumber(inputNumber));
    [
      () => { this.#lottoManager.checkResults(this.#lottoCompany); },
      () => { this.#lottoCompany.printReportByRanks(this.#lottoManager.getLottoResults()); },
      () => { this.#lottoManager.printYield(this.#lottoCompany); },
      () => { Console.close(); },
    ].forEach((job) => this.#logicChain.addNextJob(job));
  }

  play() {
    this.#logicChain.execute();
  }
}
const app = new App();
app.play();
module.exports = App;
