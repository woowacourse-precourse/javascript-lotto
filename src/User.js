const { Console } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;

class User {
  #myLottos;
  #amount;
  #profit;
  #winStats;

  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.validate(input);
      this.#amount = input;
    });
  }

  purchasableLotto() {
    return this.#amount / LOTTO_PRICE;
  }

  addLotto(lotto) {
    this.#myLottos.push(lotto);
  }

  getRateOfProfit() {
    return (this.#profit / this.#amount).toFixed(1);
  }

  validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(`[ERROR] 구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`);
    }
  }

  addWinStats(winStats) {
    this.#profit = winStats.get("profit");
    this.#winStats = winStats;
  }

  getLottos() {
    return this.#myLottos;
  }

  printLottos() {
    Console.print(this.purchasableLotto() + "개를 구매했습니다.");
    this.#myLottos.map((lotto) => {
      Console.print(lotto);
    });
  }

  printWinStats() {
    for (let rank = 5; rank >= 1; rank--) {
      printRank(rank, this.#winStats.get(rank));
    }
    Console.print(`총 수익률은 ${this.getRateOfProfit()}%입니다.`);
  }

  printRank(rank, count) {
    switch (rank) {
      case 5:
        Console.print(`3개 일치 (5,000원) - ${count}개`);
        break;
      case 4:
        Console.print(`4개 일치 (50,000원) - ${count}개`);
        break;
      case 3:
        Console.print(`5개 일치 (1,500,000원) - ${count}개`);
        break;
      case 2:
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
        break;
      case 1:
        Console.print(`6개 일치 (2,000,000,000원) - ${count}개`);
        break;
    }
  }
}

module.exports = User;
