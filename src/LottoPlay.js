const UserInterface = require("./src/UserInterface.js");
const CheckError = require("./src/CheckError.js");
class LottoPlay {
  // Lotto 게임 기능 구현하는 클래스.
  play() {
    const purchaseAmount = UserInterface.purchaseRequest(); // 구입 금액 입력.
    CheckError.checkPurchaseAmount(purchaseAmount); //
    this.purchaseLotto(purchaseAmount);
  }

  purchaseLotto(purchaseAmount) {
    return purchaseAmount / 1000;
  }
}

module.exports = LottoPlay;
