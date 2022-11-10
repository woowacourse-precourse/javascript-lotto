const { Console } = require("@woowacourse/mission-utils");

class WConsole {
  static print(message) {
    Console.print(message);
  }
  static readLine(question) {
    Console.readLine(question, (answer) => {
      this.print(answer);
      return answer;
    });
  }
  static close() {
    Console.close();
  }
}

module.exports = WConsole;
