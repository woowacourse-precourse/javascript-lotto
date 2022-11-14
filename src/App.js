const MissionUtils = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, LOTTO_PRICE } = require("./Constants");
const Validation = require("./validation");

class App {
  winnerNumber;
  play() {
    this.inputPurchaseAmount();
    this.inputWinnerNumber();
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.PURCHASEAMOUNT_INPUT_MESSAGE,
      (purchaseAmount) => {
        Validation.checkPurchaseAmount(purchaseAmount);
        console.log(purchaseAmount);
        this.lottoBuying(purchaseAmount);
      }
    );
  }
  lottoBuying(purchaseAmount) {
    const lottoCount = this.getLottoCount(purchaseAmount);
  }
  getLottoCount(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
  inputWinnerNumber() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.WINNERNUMBER_INPUT_MESSAGE,
      (winnerNumber) => {
        const winnerNumberArr = winnerNumber.split(",");
        Validation.checkInputWinnerNumber(winnerNumberArr);
        this.winnerNumber = winnerNumberArr;
      }
    );
  }
}

module.exports = App;
