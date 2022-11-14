const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, PRINT_MESSAGE } = require("./constants/messages.js");
class UserInterface {
  // 로또 게임을 진행할 때 입출력 기능을 담당하는 클래스.

  // 구입 금액을 입력 받는 기능을 하는 함수.
  static purchaseRequest() {
    let purchaseAmount;
    Console.readLine(INPUT_MESSAGE.PURCHASE_INPUT, (purchase) => {
      purchaseAmount = purchase;
    });
    return purchaseAmount;
  }

  static printLottoNumber(lottoNumber) {
    Console.print(PRINT_MESSAGE.PURCHASE_MESSAGE(lottoNumber));
  }

  static printLottoArray(lottoArray) {
    lottoArray.forEach((lotto) => {
      const printLottoNumber = lotto.join(", ");
      Console.print(`[${printLottoNumber}]`);
    });
  }

  static winnerNumberRequest() {
    let winnerNumber;
    Console.readLine(INPUT_MESSAGE.WINNER_INPUT, (number) => {
      winnerNumber = number;
    });
    return winnerNumber;
  }

  static bonusNumberRequest() {
    let bonusNumber;
    Console.readLine(INPUT_MESSAGE.BONUS_INPUT, (number) => {
      bonusNumber = number;
    });
    return bonusNumber;
  }

  static printStartStatistics() {
    Console.print(PRINT_MESSAGE.START_STATISTICS);
  }

  static printBodyStatistics(resultArray) {
    Console.print(PRINT_MESSAGE.FIFTH_RANKING_MESSAGE(resultArray[5]));
    Console.print(PRINT_MESSAGE.FOURTH_RANKING_MESSAGE(resultArray[4]));
    Console.print(PRINT_MESSAGE.THIRD_RANKING_MESSAGE(resultArray[3]));
    Console.print(PRINT_MESSAGE.SECOND_RANKING_MESSAGE(resultArray[2]));
    Console.print(PRINT_MESSAGE.FIRST_RANKING_MESSAGE(resultArray[1]));
  }
  static printPercentYield(percent) {
    Console.print(PRINT_MESSAGE.PRINT_YIELD_MESSAGE(percent));
    Console.close();
  }
}

module.exports = UserInterface;
