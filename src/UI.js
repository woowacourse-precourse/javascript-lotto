const { Console } = require("@woowacourse/mission-utils");

class UI {
  static readLine(message, callbackFn) {
    Console.readLine(message, (userAnswer) => {
      if (userAnswer) new callbackFn(userAnswer);
    });
  }

  static print(message) {
    Console.print(message);
  }
}

module.exports = UI;
