const MissionUtils = require("@woowacourse/mission-utils");

class MessageOutput {
  // #message;

  // constructor(message) {
  //   this.#message = message;
  // }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
  makeUserLottoMessage(lotto) {
    this.printMessage(
      "[" + lotto.toString().replaceAll(",", ", ").trim() + "]"
    );
  }
}

module.exports = MessageOutput;
