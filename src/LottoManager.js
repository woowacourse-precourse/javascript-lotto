const { Console } = require("@woowacourse/mission-utils");

class LottoManager {
  #lottos;

  #winningResults;

  #money;

  buyLottos(lottoCompany, money) {
    this.#money = Number(money);
    this.#lottos = lottoCompany.publishLottos(this.#money);
  }

  printLottosStatus() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
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

  getLottoResults() {
    return [...this.#winningResults];
  }

  printYield(lottoCompany) {
    let totalMoney = 0;
    this.#winningResults.forEach((winningRank) => {
      totalMoney += lottoCompany.winningMoney(winningRank);
    });
    Console.print(
      `총 수익률은 ${
        Math.round((totalMoney / this.#money) * 1000) / 10
      }%입니다.`
    );
  }
}

module.exports = LottoManager;
