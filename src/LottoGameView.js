const { Console } = require("@woowacourse/mission-utils");

class LottoGameView {
  requestInput(question, callback) {
    Console.readLine(question, callback);
  }
}

module.exports = LottoGameView;
