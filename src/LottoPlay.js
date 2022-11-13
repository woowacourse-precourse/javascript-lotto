const UserInterface = require("./UserInterface.js");
const CheckError = require("./CheckError.js");
class LottoPlay {
  // Lotto 게임 기능 구현하는 클래스.
  constructor() {}
  play() {
    const purchaseAmount = UserInterface.purchaseRequest(); // 구입 금액 입력.
    CheckError.checkPurchaseAmount(purchaseAmount); //
    UserInterface.printLottoNumber(this.purchaseLotto(purchaseAmount));
  }

  purchaseLotto(purchaseAmount) {
    return purchaseAmount / 1000;
  }
}

module.exports = LottoPlay;
