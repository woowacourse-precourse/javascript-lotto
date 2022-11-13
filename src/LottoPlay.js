const UserInterface = require("./UserInterface.js");
const CheckError = require("./CheckError.js");
const Lotto = require("./Lotto.js");
const { Random } = require("@woowacourse/mission-utils");
class LottoPlay {
  // Lotto 게임 기능 구현하는 클래스.
  constructor() {}
  play() {
    const purchaseAmount = UserInterface.purchaseRequest(); // 구입 금액 입력.
    CheckError.checkPurchaseAmount(purchaseAmount); //
    const lottoNumber = this.purchaseLotto(purchaseAmount);
    UserInterface.printLottoNumber(lottoNumber);
  }

  purchaseLotto(purchaseAmount) {
    return purchaseAmount / 1000;
  }

  createOneLotto() {
    // 한 개의 로또 번호를 생성하는 함수.
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoPlay;
