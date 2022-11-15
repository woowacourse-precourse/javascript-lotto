const { readLine, print, close } = require("./util.js");
const { INPUT_QUERY, prizeCount, OUTPUT } = require("./constants.js");
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
    this.bonusNumber = new Bonus(bonusNumber, this.winningNumbers);
    this.bonusNumber.compareUserAndBonus(this.publishedLotto);
    this.printLottoResult();
  }

  printLottoResult() {
    print(OUTPUT.THREE(prizeCount.fifth));
    print(OUTPUT.FOUR(prizeCount.fourth));
    print(OUTPUT.FIVE(prizeCount.third));
    print(OUTPUT.FIVEBONUS(prizeCount.second));
    print(OUTPUT.SIX(prizeCount.first));
    print(OUTPUT.PROFIT(this.lotto.calculateProfit()));
    close();
  }
}

module.exports = UserInput;
