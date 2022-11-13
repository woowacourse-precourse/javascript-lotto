const { Console } = require("@woowacourse/mission-utils");
const App = require("./App");

class Printer {
  theNumberOfLotto(purchaseLottoCount) {
    Console.print(`${purchaseLottoCount}개 구매하셨습니다.`);
  }
}

module.exports = Printer;