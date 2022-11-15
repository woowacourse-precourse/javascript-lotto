/* eslint-disable prettier/prettier */
const { Console } = require("@woowacourse/mission-utils");
const LottoCompany = require("./LottoCompany");
const LottoManager = require("./LottoManager");
const LogicChain = require("./LogicChain");
const getUserInputAsync = require("./lib/userInput");
const { INSTRUCTION, LOTTO_PRICE, WINNING_MONEYS} = require("./lib/constants")

class App {
  #lottoCompany;

  #lottoManager;

  #logicChain;

  constructor() {
    this.#lottoCompany = new LottoCompany(LOTTO_PRICE, WINNING_MONEYS);
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

module.exports = App;
