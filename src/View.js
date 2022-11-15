const { Console } = require("@woowacourse/mission-utils");

class View {
  static input(message, callback) {
    Console.readLine(message, callback);
  }

  static output(output) {
    Console.print(output);
  }

  static close() {
    Console.close();
  }
}

module.exports = View;
