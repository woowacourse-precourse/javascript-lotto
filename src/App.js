/* eslint-disable prettier/prettier */
const { Console } = require("@woowacourse/mission-utils");
const LottoCompany = require("./LottoCompany");
const LottoManager = require("./LottoManager");
const LogicChain = require("./LogicChain");
const getUserInputAsync = require("./lib/userInput");
const INSTRUCTION = require("./lib/constants")

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
    this.#logicChain.pushAsyncJob((next) => { getUserInputAsync(INSTRUCTION.GET_MONEY ,next); });
    this.#logicChain.pushJob((inputMoney) => { this.#lottoManager.buyLottos(this.#lottoCompany, inputMoney); });
    this.#logicChain.pushJob(() => { this.#lottoManager.printLottosStatus(); });
    this.#logicChain.pushAsyncJob((next) => { getUserInputAsync(INSTRUCTION.GET_WINNING_NUMBERS ,next);});
    this.#logicChain.pushJob((inputNumbers) => this.#lottoCompany.setWinningNumbers(inputNumbers));
    this.#logicChain.pushAsyncJob((next) => { getUserInputAsync(INSTRUCTION.GET_BONUSE_NUMBER ,next);});
    this.#logicChain.pushJob((inputNumber) => this.#lottoCompany.setBonusNumber(inputNumber));
    [
      () => { this.#lottoManager.checkResults(this.#lottoCompany); },
      () => { this.#lottoCompany.printReportByRanks(this.#lottoManager.getLottoResults()); },
      () => { this.#lottoManager.printYield(this.#lottoCompany); },
      () => { Console.close(); },
    ].forEach((job) => this.#logicChain.pushJob(job));
  }

  play() {
    this.#logicChain.execute();
  }
}
const app = new App();
app.play();
module.exports = App;
