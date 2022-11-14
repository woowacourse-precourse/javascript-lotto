const View = require("./View");
class Execution {
  play() {
    const lotto = new View();
    lotto.payMoney();
    lotto.buyLotto();
  }
}

module.exports = Execution;
