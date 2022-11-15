const { Console } = require('@woowacourse/mission-utils');
const Message = require("./Message.js");

class NumberReceiver {
  #lottoNumber;
  #bonusNumber;

  constructor() {
    this.inputLottoNumber();
    this.inputBonusNumber();
  }

  inputLottoNumber() {
    Console.readLine(Message.INFORMATION.winningNumberInput, (numbers) => {
      this.#lottoNumber = numbers.split(",").map((x) => +x);
    });
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }

  inputBonusNumber() {
    Console.readLine(Message.INFORMATION.bonusNumberInput, (numbers) => {
      this.#bonusNumber = Number(numbers);
    });
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = NumberReceiver;
