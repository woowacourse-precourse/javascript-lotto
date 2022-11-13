const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { CONSOLE_MESSAGE } = require("./util/message");
const { getCountByPay, getRandomNumbers } = require("./util/purchase");

class App {
  #lottos = [];

  play() {
    this.purchaseLottos();
  }

  purchaseLottos() {
    Console.readLine(CONSOLE_MESSAGE.Enter, (price) => {
      const lottoCnt = getCountByPay(+price);

      Console.print(lottoCnt + CONSOLE_MESSAGE.Purchase);
      for (let i = 0; i < lottoCnt; i++) {
        const randomNumbers = getRandomNumbers();

        Console.print(randomNumbers);
        this.#lottos.push(new Lotto(randomNumbers));
      }
    });
  }
}

module.exports = App;

const app = new App();
app.play();
