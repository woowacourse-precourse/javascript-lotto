const UI = require("./utils/UI");
const { BUY_LOTTO, LOTTO } = require("./constant/constant");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const { Console } = require("@woowacourse/mission-utils");

class App {
  userLottoArr;
  winningNumber;
  bonusNumber;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine(BUY_LOTTO.ANNOUNCEMENT, (userMoney) => {
      const buyLotto = new BuyLotto(Number(userMoney));
      this.userLottoArr = buyLotto.userLottoArr;
      this.printUserLottoList();
      this.playLotto();
    });
  }

  printUserLottoList() {
    UI.print(`${this.userLottoArr.length}${BUY_LOTTO.PURCHASE}`);
    this.userLottoArr.forEach((currentLotto) => {
      UI.print(`"[${currentLotto.join(", ")}]"`);
    });
  }

  playLotto() {
    Console.readLine(LOTTO.ANNOUNCEMENT, (userAnswer) => {
      const lotto = new Lotto(userAnswer, this.userLottoArr);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
