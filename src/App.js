const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  LOTTO,
  LOTTO_PRIZE,
} = require("../src/Constants");

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let inputMessage = "";
    MissionUtils.Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      inputMessage = input;
    });
    this.inputMoney(inputMessage);
  }

  inputMoney(input) {
    this.money = input;
  }
}

module.exports = App;
