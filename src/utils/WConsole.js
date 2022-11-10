const { Console } = require("@woowacourse/mission-utils");

class WConsole {
  static print(message) {
    Console.print(message);
  }
  static readLine(question) {
    let readAnswer;
    Console.readLine(question, (answer) => {
      readAnswer = answer;
    });
    return readAnswer;
  }
  static close() {
    Console.close();
  }
}

module.exports = WConsole;
