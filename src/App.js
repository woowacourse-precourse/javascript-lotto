const MissionUtils = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, LOTTO_PRICE } = require("./Constants");
const Validation = require("./validation");

class App {
  play() {
    this.inputPurchaseAmount();
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
}

module.exports = App;
