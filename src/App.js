const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const CalculationMoney = require("./CalculationMoney");
const Render = require("./Render");

const lotto = new Lotto();
const calculationMoney = new CalculationMoney();
const render = new Render();
class App {
  play() {
    this.getUserMoney();
  }

  lineBreak() {
    Console.print(``);
  }

  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요.", (money) => {
      this.userInputMoney = money;
      this.checkUserMoney();
      this.calculateMoney();
    });
  }

  checkUserMoney() {
    lotto.validateMoney(this.userInputMoney);
  }

  calculateMoney() {
    const purchasedLottoCount = calculationMoney.canBuyLotto(
      this.userInputMoney
    );

    render.showHowmanybought(purchasedLottoCount);

    this.lineBreak();

    this.makeLotto(purchasedLottoCount);
  }

  makeLotto(purchaedLottoNum) {
    this.madeLotto = calculationMoney.makeLotto(purchaedLottoNum);

    render.showMadeLotto(this.madeLotto);

    this.lineBreak();

    this.getWinningNum();
  }

  getWinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.", (winningNum) => {
      this.winningNum = winningNum.split(",");

      lotto.validateWinningNum(this.winningNum);

      this.lineBreak();
    });
  }

  getBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNum) => {
      this.bonusNum = bonusNum;

      lotto.validateBonusNum(this.bonusNum);
    });
  }
}

module.exports = App;
