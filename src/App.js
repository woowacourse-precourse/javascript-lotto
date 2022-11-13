const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { CONSOLE_MESSAGE } = require("./util/message");
const { getCountByPay, getRandomNumbers } = require("./util/purchase");

class App {
  #lottos = [];
  #pay = null;
  #userNumbers = null;
  #userBonusNumber = null;

  play() {
    Console.readLine(CONSOLE_MESSAGE.Enter, (payStr) => {
      this.pay = +payStr;
      const lottoCnt = getCountByPay(this.pay);

      Console.print(lottoCnt + CONSOLE_MESSAGE.Purchase);
      for (let i = 0; i < lottoCnt; i++) {
        const randomNumbers = getRandomNumbers();

        Console.print(randomNumbers);
        this.#lottos.push(new Lotto(randomNumbers));
      }

      this.pickNumbers();
    });
  }

  pickNumbers() {
    Console.readLine(CONSOLE_MESSAGE.Numbers, (numbersStr) => {
      this.#userNumbers = numbersStr.split(",").map(Number);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(CONSOLE_MESSAGE.BonusNumber, (numberStr) => {
      this.#userBonusNumber = +numberStr;

      this.calculateResults();
    });
  }

  calculateResults() {
    Console.print(CONSOLE_MESSAGE.Stats);

    const totalResult = this.#lottos.reduce(
      (acc, lotto) => {
        const { prize: currentPrize, type: currentRank } =
          lotto.calculateResult(this.#userNumbers, this.#userBonusNumber);

        if (!currentRank) return acc;

        acc.prize += currentPrize;
        acc.ranksCnt[currentRank] += 1;
        return acc;
      },
      { prize: 0, ranksCnt: [0, 0, 0, 0, 0] }
    );

    this.printResult(totalResult);
  }
}

module.exports = App;

const app = new App();
app.play();
