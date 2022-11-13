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

    const totalPrize = this.#lottos.reduce(
      (acc, lotto) =>
        acc + lotto.calculateResult(this.#userNumbers, this.#userBonusNumber),
      0
    );
  }
}

module.exports = App;

const app = new App();
app.play();
