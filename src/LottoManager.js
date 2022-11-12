class LottoManager {
  #lottos;
  #winningResults;

  buyLottos(money, lottoCompany) {
    this.#lottos = lottoCompany.publishLottos(money);
  }

  printLottosStatus() {}

  checkResults(lottoCompany) {
    this.#winningResults = [];
    this.#lottos.forEach((lotto) => {
      this.#winningResults.push(lottoCompany.checkResult(lotto));
    });
  }

  calculateYield() {}
}

module.exports = LottoManager;
