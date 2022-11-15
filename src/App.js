const { Console } = require("@woowacourse/mission-utils");
const InfoMessages = require("./constants/InfoMessages");
const LottoShop = require("./LottoShop.js");
const Lotto = require("./Lotto.js");
const PrizeCalculator = require("./PrizeCalculator.js");

class App {
  #lotto;
  #prizeCalculator;

  constructor() {
    this.#lotto = new Lotto();
  }

  play() {
    Console.readLine(InfoMessages.ENTER_PURCHASE_AMOUNT, (money) => {
      const lottoShop = new LottoShop(money);
      this.userLottos = lottoShop.getLottos();
      this.lottosQuantity = lottoShop.getLottosQuantity();
      this.showUserLottos();
    });
  }
  showUserLottos() {
    Console.print(this.lottosQuantity + InfoMessages.PURCHASE_QUANTITY);
    this.userLottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
