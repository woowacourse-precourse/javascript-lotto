const { readLine } = require("./util.js");
const { INPUT_QUERY } = require("./constants.js");
const LottoGenerator = require("./LottoGenerator");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus.js");
const LottoResult = require("./LottoResult.js");

class UserInput {
  constructor() {
    this.lottoResult = new LottoResult();
  }

  play() {
    readLine(INPUT_QUERY.LOTTO_AMOUNT, this.publishLotto.bind(this));
  }

  publishLotto(money) {
    this.lotto = new LottoGenerator(money);
    this.publishedLotto = this.lotto.publishUserLotto();
    readLine(INPUT_QUERY.WINNING_NUMBER, this.handleLottoNumber.bind(this));
  }

  handleLottoNumber(winningNumber) {
    this.winningNumber = new Lotto(winningNumber);
    this.winningNumbers = this.winningNumber.getWinningNumber();
    this.lottoResult.checkEachLottoNumber(this.publishedLotto, this.winningNumbers);
    readLine(INPUT_QUERY.BONUS_NUMBER, this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(bonusNumber) {
    const winningNumber = this.winningNumber.getWinningNumber()
    this.bonusNumber = new Bonus(bonusNumber, winningNumber);
  }
}

module.exports = UserInput;
