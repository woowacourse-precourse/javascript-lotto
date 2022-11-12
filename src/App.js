const UI = require("./UI");
const { BUY_LOTTO } = require("./constant/constant");
const BuyLotto = require("./BuyLotto");
const { Console } = require("@woowacourse/mission-utils");

class App {
  userLottoArr;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine(BUY_LOTTO.ANNOUNCEMENT, (userMoney) => {
      if (userMoney) {
        const buyLotto = new BuyLotto(Number(userMoney));
        this.userLottoArr = buyLotto.userLottoArr;
        this.printLotto();
      }
    });
  }

  printLotto() {
    UI.print(`${this.userLottoArr.length}${BUY_LOTTO.PURCHASE}`);
    this.userLottoArr.forEach((currentLotto) => {
      UI.print(currentLotto);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
