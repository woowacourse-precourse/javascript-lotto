/* eslint-disable prettier/prettier */
const { Console } = require("@woowacourse/mission-utils");
const LottoCompany = require("./LottoCompany");
const LottoManager = require("./LottoManager");
const LogicChain = require("./LogicChain");

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
    this.#logicChain.addNextAsyncJob((next) => { this.#lottoManager.buyLottosAsync(this.#lottoCompany, next); });
    this.#logicChain.addNextJob(() => { this.#lottoManager.printLottosStatus(); });
    this.#logicChain.addNextAsyncJob((next) => this.#lottoCompany.makeWinningNumbersAsync(next));
    this.#logicChain.addNextAsyncJob((next) => this.#lottoCompany.makeBonusNumberAsync(next));
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

module.exports = App;
