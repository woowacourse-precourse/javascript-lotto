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

      this.totalWinningNum = [...this.winningNum, this.bonusNum];

      const winningNumArr = calculationMoney.makeWinningNumArr(
        this.userHaveLotto,
        this.totalWinningNum
      );

      this.checkSecondClass(winningNumArr);

      render.renderResult(this.result);
    });
  }

  checkSecondClass(winningNumArr) {
    if (winningNumArr.includes(5) === true) {
      this.secondOrThird = calculationMoney.resultOfSecondOrThirdClass(
        this.userHaveLotto,
        this.bonusNum,
        winningNumArr
      );
    }
    if (winningNumArr.includes(5) === false) {
      this.resultOfLottoClass =
        calculationMoney.resultOfLottoClass(winningNumArr);
      Console.print(this.secondOrThird);
      Console.print(this.resultOfLottoClass);

      this.result = this.resultOfLottoClass;
      if (winningNumArr.includes(5)) {
        this.result = [
          ...this.resultOfLottoClass,
          ...this.resultOfSecondOrThirdClass,
        ].sort((a, b) => (a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0));
      }
    }
  }
}

module.exports = App;
