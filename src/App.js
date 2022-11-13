const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  HowManyCanBuyLotto,
  makeAmountOfWinningMoney,
  makeUsersLotto,
  resultOfLottoClass,
  makeWinningOfLottoArr,
} = require("./CalculationMoney");
const Render = require("./Render");
const { validateMoney, validateBonusNum } = require("./CheckBonusAndMoney");

const render = new Render();
class App {
  // 생성자함수를 생성하면 바로 데이터 검사를 할 수 있게만들어야통과함

  play() {
    this.getUserMoney();
  }

  lineBreak() {
    Console.print(``);
  }

  getUserMoney() {
    Console.readLine(`구매금액을 입력해 주세요.\n`, (money) => {
      this.userInputMoney = money;

      validateMoney(money);

      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const numOfLotto = HowManyCanBuyLotto(this.userInputMoney);

    render.showHowmanybought(numOfLotto);

    this.lineBreak();

    this.makeLotto(numOfLotto);
  }

  makeLotto(numOfLotto) {
    this.userHaveLotto = makeUsersLotto(numOfLotto);

    render.showMadeLotto(this.userHaveLotto);

    this.lineBreak();

    this.getWinningNum();
  }

  getWinningNum() {
    Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (userInputOfWinningNum) => {
        this.winningNum = userInputOfWinningNum.split(",");

        const lotto = new Lotto(this.winningNum);

        this.lineBreak();

        this.getBonusNum();
      }
    );
  }

  getBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.bonusNum = bonusNum;

      validateBonusNum(bonusNum, this.winningNum);

      this.lineBreak();

      this.calculateOfLotto();
    });
  }

  calculateOfLotto() {
    this.totalWinningNum = [...this.winningNum, this.bonusNum];

    const winningNumArr = makeWinningOfLottoArr(
      this.userHaveLotto,
      this.totalWinningNum
    );

    this.makeLottoResult(winningNumArr);
  }

  makeLottoResult(winningNumArr) {
    const result = resultOfLottoClass(
      winningNumArr,
      this.userHaveLotto,
      this.bonusNum
    );

    this.renderOfResult(result);
  }

  renderOfResult(result) {
    render.showResult([...result]);

    this.makeWinningAmount([...result]);
  }

  makeWinningAmount(result) {
    const winningAmount = makeAmountOfWinningMoney(result);

    render.showRateOfReturn(winningAmount, this.userInputMoney);

    Console.close();
  }
}

module.exports = App;
