const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { CONSOLE_MESSAGE } = require("./util/message");
const { getCountByPay, getRandomNumbers } = require("./util/purchase");

class App {
  #lottos = [];

  play() {
    Console.readLine(CONSOLE_MESSAGE.Enter, (payStr) => {
      const lottoCnt = getCountByPay(+payStr);

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
    let numbers = null;

    Console.readLine(CONSOLE_MESSAGE.Numbers, (numbersStr) => {
      numbers = numbersStr.split(",").map(Number);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    let bonusNumber = null;

    Console.readLine(CONSOLE_MESSAGE.BonusNumber, (numberStr) => {
      bonusNumber = +numberStr;
    });
  }
}

module.exports = App;

const app = new App();
app.play();
