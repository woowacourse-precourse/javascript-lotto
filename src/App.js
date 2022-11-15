const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

class Promptor {
  receiveMoney() {
    const query = "구입금액을 입력해 주세요.";
    const err =
      "천의 배수의 양의 정수만 입력할 수 있습니다. ( 예: 135000 (O); -2342 (X) )";

    MissionUtils.readLine(query, (userInput) => {
      if (!this.#validateMoney(userInput)) {
        MyErrorHandler(err);
      }
      this.money = userInput;
    });
  }

  #validateMoney(money) {
    if (typeof money != "string") {
      return false;
    }

    if (!/^\d+000$/.test(money)) {
      return false;
    }
    return true;
  }
}

module.exports = App;
