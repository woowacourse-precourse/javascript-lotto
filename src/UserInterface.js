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

  winnerNumberRequest() {
    // TODO: 당첨 번호 입력 기능
  }

  bonusNumberRequest() {
    // TODO: 보너스 번호 입력 기능
  }

  printLottoNumber() {
    // TODO: 몇개를 구매했는지 출력 하는 기능
  }

  printLottoArray() {
    // TODO: 구입한 로또 번호 출력 기능.
  }
}

module.exports = UserInterface;
