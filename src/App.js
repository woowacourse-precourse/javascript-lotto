const { Console } = require("@woowacourse/mission-utils");
const InfoMessages = require("./constants/InfoMessages");
const LottoShop = require("./LottoShop.js");
const Lotto = require("./Lotto.js");
const PrizeCalculator = require("./PrizeCalculator.js");

class App {
  #prizeCalculator;

  play() {
    Console.readLine(InfoMessages.ENTER_PURCHASE_AMOUNT, (money) => {
      this.money = money;
      this.getUserLottos();
      this.setWinningNums();
    });
  }

  getUserLottos() {
    const lottoShop = new LottoShop(this.money);
    this.userLottos = lottoShop.getLottos();
    this.lottosQuantity = lottoShop.getLottosQuantity();
    Console.print("\n" + this.lottosQuantity + InfoMessages.PURCHASE_QUANTITY);
    this.userLottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  setWinningNums() {
    Console.readLine(InfoMessages.ENTER_WINNING_NUM, (winningNumsInput) => {
      const winningNumsInputArr = winningNumsInput.split(",").map(Number);
      this.lotto = new Lotto(winningNumsInputArr);
      this.winningNumsArr = winningNumsInputArr;
      this.setWinningBonusNum();
    });
  }

  setWinningBonusNum() {
    Console.readLine(InfoMessages.ENTER_BONUS_NUM, (winningBonusNumInput) => {
      this.lotto.validateBonusNum(Number(winningBonusNumInput));
      this.winningBonusNum = Number(winningBonusNumInput);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
