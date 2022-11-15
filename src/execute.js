const lottoProcess = require("./lottoProcess");

class execute {
  play() {
    const lotto = new lottoProcess();
    lotto.moneyInput();
    lotto.buy();
  }
}

module.exports = execute;
