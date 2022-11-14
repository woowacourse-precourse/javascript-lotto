const MissionUtils = require("@woowacourse/mission-utils");

class MessageOutput {
  #message;

  constructor(message) {
    this.#message = message;
  }

  printMesage(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = MessageOutput;
