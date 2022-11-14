const View = require("./View");
class Execution {
  play() {
    const lotto = new View();
    lotto.lottoStart();
    // lotto.buyLotto();
  }
}

module.exports = Execution;
