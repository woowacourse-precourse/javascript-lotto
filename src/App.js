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
      lotto.validateMoney(this.userInputMoney);

      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const purchasedLottoCount = calculationMoney.canBuyLotto(
      this.userInputMoney
    );

    render.showHowmanybought(purchasedLottoCount);

    this.lineBreak();

    this.makeLotto(purchasedLottoCount);
  }

  makeLotto(purchaedLottoNum) {
    this.userHaveLotto = calculationMoney.makeLotto(purchaedLottoNum);
    render.showMadeLotto(this.userHaveLotto);

    this.lineBreak();

    this.getWinningNum();
  }

  getWinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.", (winningNum) => {
      this.winningNum = winningNum.split(",");

      lotto.validateWinningNum(this.winningNum);

      this.lineBreak();

      this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNum) => {
      this.bonusNum = bonusNum;

      lotto.validateBonusNum(this.bonusNum, this.winningNum);

      this.calculateOfLotto();
    });
  }

  calculateOfLotto() {
    this.totalWinningNum = [...this.winningNum, this.bonusNum];

    const winningNumArr = calculationMoney.makeWinningNumArr(
      this.userHaveLotto,
      this.totalWinningNum
    );

    this.makeLottoResult(winningNumArr);
  }

  makeLottoResult(winningNumArr) {
    const result = calculationMoney.resultOfLottoClass(
      winningNumArr,
      this.userHaveLotto,
      this.bonusNum
    );

    this.renderOfResult(result);
  }

  renderOfResult(result) {
    render.renderResult([...result]);
  }

  makeWinningAmount(result) {
    const winningAmount = calculationMoney.makeWinningAmount(result);
  }
}

module.exports = App;
