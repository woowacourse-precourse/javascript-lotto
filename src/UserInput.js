const { readLine } = require("./util.js");
const { INPUT_QUERY } = require("./constants.js");
const LottoGenerator = require("./LottoGenerator");
const Lotto = require("./Lotto")

class UserInput {

  play() {
    readLine(INPUT_QUERY.LOTTO_AMOUNT, this.publishLotto.bind(this));
  }

  publishLotto(money) {
    this.lotto = new LottoGenerator(money);
    readLine(INPUT_QUERY.WINNING_NUMBER, this.handleLottoNumber.bind(this));
  }

  handleLottoNumber(winningNumber) {
    this.winningNumber = new Lotto(winningNumber);
    readLine(INPUT_QUERY.BONUS_NUMBER, this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(bonusNumber) {}
}

module.exports = UserInput;
