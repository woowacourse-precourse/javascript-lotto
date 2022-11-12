class LottoManager {
  #lottos;

  buyLottos(money, lottoCompany) {
    this.#lottos = lottoCompany.publishLottos(money);
  }

  printLottosStatus() {}

  checkWinning() {}

  printResults() {}

  calculateYield() {}
}

module.exports = LottoManager;
