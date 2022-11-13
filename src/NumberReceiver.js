const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message.js");

class NumberReceiver {
  #lottoNumber;

  constructor() {
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    MissionUtils.Console.readLine(Message.winningNumberInput, (numbers) => {
      this.#lottoNumber = numbers.split(",").map((x) => +x);
    });
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }
}

module.exports = NumberReceiver;
