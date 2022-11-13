const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constants/messages.js");
class UserInterface {
  // 로또 게임을 진행할 때 입출력 기능을 담당하는 클래스.

  // 구입 금액을 입력 받는 기능을 하는 함수.
  purchaseRequest() {
    let purchaseAmount;
    Console.readLine(INPUT_MESSAGE.PURCHASE_INPUT, (purchase) => {
      purchaseAmount = puchase;
    });
    return purchaseAmount;
  }
}

module.exports = UserInterface;
