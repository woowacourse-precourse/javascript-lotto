const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message.js");

class NumberReceiver {
  #lottoNumber;
  #bonusNumber;

  constructor() {
    this.inputLottoNumber();
    this.inputBonusNumber();
  }

  inputLottoNumber() {
    MissionUtils.Console.readLine(Message.winningNumberInput, (numbers) => {
      this.#lottoNumber = numbers.split(",").map((x) => +x);
    });
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(Message.bonusNumberInput, (numbers) => {
      this.#bonusNumber = Number(numbers);
    });
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = NumberReceiver;
