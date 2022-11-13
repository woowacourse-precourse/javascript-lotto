const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  HowManyCanBuyLotto,
  makeAmountOfWinningMoney,
  makeUsersLotto,
  resultOfLottoClass,
  makeWinningOfLottoArr,
  makeArrayOfArrayPlusNum,
} = require("./CalculationMoney");
const {
  showHowmanyboughtLotto,
  showLottoMade,
  showLottoRateOfReturn,
  showResultOfWinLotto,
  lineBreak,
} = require("./Render");
const { validateMoney, validateBonusNum } = require("./CheckBonusAndMoney");

class App {
  // 생성자함수를 생성하면 바로 데이터 검사를 할 수 있게만들어야통과함

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(`구매금액을 입력해 주세요.\n`, (userInputMoney) => {
      this.userInputMoney = userInputMoney;
      validateMoney(userInputMoney);

      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const numOfLotto = HowManyCanBuyLotto(this.userInputMoney);
    lineBreak();

    showHowmanyboughtLotto(numOfLotto);

    lineBreak();

    this.makeLottoandShow(numOfLotto);
  }

  makeLottoandShow(numOfLotto) {
    this.userHaveLotto = makeUsersLotto(numOfLotto);
    showLottoMade(this.userHaveLotto);

    lineBreak();

    this.getWinningNum();
  }

  getWinningNum() {
    Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (userInputOfWinningNum) => {
        this.winningNum = userInputOfWinningNum.split(",");

        const lotto = new Lotto(this.winningNum);

        lineBreak();

        this.getBonusNum();
      }
    );
  }

  getBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.bonusNum = bonusNum;
      validateBonusNum(bonusNum, this.winningNum);

      lineBreak();

      this.makeWinningOfLottoArr();
    });
  }

  makeWinningOfLottoArr() {
    this.totalWinningNum = makeArrayOfArrayPlusNum(
      this.winningNum,
      this.bonusNum
    );

    const winningOfLottoArr = makeWinningOfLottoArr(
      this.userHaveLotto,
      this.totalWinningNum
    );

    this.makeLottoGameResult(winningOfLottoArr);
  }

  makeLottoGameResult(winningOfLottoArr) {
    const result = resultOfLottoClass(
      winningOfLottoArr,
      this.userHaveLotto,
      this.bonusNum
    );

    this.renderOfResult(result);
  }

  renderOfResult(result) {
    showResultOfWinLotto([...result]);

    this.makeWinningAmountAndShow([...result]);
  }

  makeWinningAmountAndShow(result) {
    const winningAmount = makeAmountOfWinningMoney(result);

    showLottoRateOfReturn(winningAmount, this.userInputMoney);

    Console.close();
  }
}

module.exports = App;
