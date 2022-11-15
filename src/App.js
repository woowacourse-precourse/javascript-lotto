const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { getRate } = require("./util/calculate");
const { CONSOLE_MESSAGE, CONSOLE_MATCH_MESSAGE } = require("./util/message");
const { getCountByPay, getRandomNumbers } = require("./util/purchase");

class App {
  #lottos = [];
  userNumbers = null;
  userBonusNumber = null;
  pay = null;

  play() {
    Console.readLine(CONSOLE_MESSAGE.Enter, (payStr) => {
      this.pay = +payStr;
      const lottoCnt = getCountByPay(this.pay);

      this.createLottos(lottoCnt).pickNumbers();
    });
  }

  createLottos(lottoCnt) {
    Console.print(lottoCnt + CONSOLE_MESSAGE.Purchase);
    for (let i = 0; i < lottoCnt; i++) {
      const randomNumbers = getRandomNumbers();

      Console.print(`[${randomNumbers.join(", ")}]`);
      this.#lottos.push(new Lotto(randomNumbers));
    }

    return this;
  }

  pickNumbers() {
    Console.readLine(CONSOLE_MESSAGE.Numbers, (numbersStr) => {
      this.userNumbers = numbersStr.split(",").map(Number);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(CONSOLE_MESSAGE.BonusNumber, (numberStr) => {
      this.userBonusNumber = +numberStr;

      this.calculateResults();
    });
  }

  calculateResults() {
    Console.print(CONSOLE_MESSAGE.Stats);

    const totalResult = this.#lottos.reduce(
      (acc, lotto) => {
        const { prize: currentPrize, type: currentRank } =
          lotto.calculateResult(this.userNumbers, this.userBonusNumber);

        if (currentRank === null) return acc;

        acc.prize += currentPrize;
        acc.ranksCnt[currentRank] += 1;
        return acc;
      },
      { prize: 0, ranksCnt: [0, 0, 0, 0, 0] }
    );

    this.printResult(totalResult);
  }

  printResult(totalResult) {
    const { prize, ranksCnt } = totalResult;

    ranksCnt.reduce((acc, currentCnt, idx) => {
      Console.print(CONSOLE_MATCH_MESSAGE[idx](currentCnt));
    }, 0);

    Console.print(CONSOLE_MESSAGE.Rate(getRate(this.pay, prize)));
    Console.close();
  }
}

module.exports = App;
