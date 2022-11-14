const MissionUtils = require("@woowacourse/mission-utils");

class InputMoney {
  #MONEY;

  constructor() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("금액을 입력해주세요.", (input) => {
      this.errorHandler(input);
      this.#MONEY = input;
    });
  }

  errorHandler(input) {
    if (input%1000 != 0) {
      throw new Error("[ERROR] 복권의 1장당 가격은 1000원입니다.");
    }
  }

  getMoney() {
    return this.#MONEY;
  }
}

module.exports = InputMoney;