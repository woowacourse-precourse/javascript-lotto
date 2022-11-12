const { Console } = require("@woowacourse/mission-utils");

class LottoManager {
  #lottos;

  #winningResults;

  #money;

  buyLottos(lottoCompany) {
    Console.print("구매금액을 입력해 주세요");
    Console.readLine((), (money)=>{
        this.#money = Number(money);
        this.#lottos = lottoCompany.publishLottos(money);
    });
  }

  checkResults(lottoCompany) {
    this.#winningResults = [];
    this.#lottos.forEach((lotto) => {
      const result = lottoCompany.checkResult(lotto);
      if (result === -1) return;
      this.#winningResults.push(result);
    });
  }

  calculateYield(lottoCompany) {
    let totalMoney = 0;
    this.#winningResults.forEach((winningRank) => {
      totalMoney += lottoCompany.winningMoney(winningRank);
    });
    return `${Math.round((totalMoney / this.#money) * 1000) / 10}%`;
  }
}

module.exports = LottoManager;
