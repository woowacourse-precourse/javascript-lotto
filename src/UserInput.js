const { readLine } = require("./util.js");
const { INPUT_QUERY } = require("./constants.js");
const LottoGenerator = require("./LottoGenerator");

class UserInput {

  play() {
    readLine(INPUT_QUERY.LOTTO_AMOUNT, this.publishLotto.bind(this));
  }

  publishLotto(money) {
    this.lotto = new LottoGenerator(money);
  }
}

module.exports = UserInput;
