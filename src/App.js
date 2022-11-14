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
    [
      () => this.#lottoManager.buyLottosAsync(this.#lottoCompany, () => this.#logicChain.executeNext()),
      () => { this.#lottoManager.printLottosStatus(); this.#logicChain.executeNext();},
      () => this.#lottoCompany.makeWinningNumbersAsync(() => this.#logicChain.executeNext()),
      () => this.#lottoCompany.makeBonusNumberAsync(() => this.#logicChain.executeNext()),
      () => { this.#lottoManager.checkResults(this.#lottoCompany); this.#logicChain.executeNext(); },
      () => { 
        this.#lottoCompany.printReportByRanks(this.#lottoManager.getLottoResults()); 
        this.#logicChain.executeNext();
      },
      () => { this.#lottoManager.printYield(this.#lottoCompany); this.#logicChain.executeNext(); },
      () => { Console.close(); },
    ].forEach((logic) => this.#logicChain.addNextLogic(logic));
  }

  play() {
    this.#logicChain.executeNext();
  }
}

module.exports = App;
