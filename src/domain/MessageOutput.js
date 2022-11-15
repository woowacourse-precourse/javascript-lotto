const MissionUtils = require("@woowacourse/mission-utils");
const { COUNT, WON } = require("../constants/constant");

class MessageOutput {
  printMessage(message) {
    MissionUtils.Console.print(message);
  }
  makeUserLottoMessage(lotto) {
    this.printMessage(
      "[" + lotto.toString().replaceAll(",", ", ").trim() + "]"
    );
  }

  makeUserResultMessage(condition, price, count) {
    const message = `${condition} (${price}${WON}) - ${count}${COUNT}`;
    this.printMessage(message);
  }

  makeFinalReturnMoney(resultReturnMoney) {
    const message = `총 수익률은 ${resultReturnMoney}%입니다.`;
    this.printMessage(message);
  }
}

module.exports = MessageOutput;
