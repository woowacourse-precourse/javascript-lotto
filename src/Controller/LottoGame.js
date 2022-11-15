const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");
const {
  HowManyCanBuyLotto,
  makeAmountOfWinningMoney,
  makeUsersLotto,
  resultOfLottoClass,
  makeWinningOfLottoArr,
} = require("../Model/CalculationOfLottoGame");

const {
  showHowmanyboughtLotto,
  showLottoMade,
  showLottoRateOfReturn,
  showResultOfWinLotto,
  lineBreak,
  userInputRequest,
} = require("../View/Render");

const {
  validateMoney,
  validateBonusNum,
} = require("../Model/CheckValidationOfBonusAndMoney");

const { INPUT } = require("../data/Constants");

class LottoGame {
  gameStart() {
    this.getUserMoney();
  }

  getUserMoney() {
    userInputRequest(INPUT.INPUT_USER_MONEY, (userInputMoney) => {
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
    userInputRequest(INPUT.INPUT_USER_WINNING_NUM, (userInputOfWinningNum) => {
      this.winningNum = userInputOfWinningNum.split(",");

      const lotto = new Lotto(this.winningNum);

      lineBreak();

      this.getBonusNum();
    });
  }

  getBonusNum() {
    userInputRequest(INPUT.INPUT_USER_BONUS_NUM, (bonusNum) => {
      this.bonusNum = bonusNum;
      validateBonusNum(bonusNum, this.winningNum);

      lineBreak();

      this.makeWinningLottoArr();
    });
  }

  makeWinningLottoArr() {
    const winningOfLottoArr = makeWinningOfLottoArr(
      this.userHaveLotto,
      this.winningNum
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
module.exports = LottoGame;
