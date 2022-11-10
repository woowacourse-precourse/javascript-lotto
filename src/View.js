const { Console } = require("@woowacourse/mission-utils");

class View {
  input(message, callback) {
    Console.readLine(message, callback);
  }

  output(output) {
    Console.print(output);
  }
}

module.exports = View;
