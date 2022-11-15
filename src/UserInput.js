const { readLine, print, close } = require('./common/util.js');
const { INPUT_QUERY, prizeCount, OUTPUT } = require('./common/constants.js');
const LottoAmount = require('./Lotto/LottoGenerator');
const Lotto = require('./Lotto/Lotto');
const Bonus = require('./Lotto/Bonus.js');

class UserInput {
  play() {
    readLine(INPUT_QUERY.LOTTO_AMOUNT, this.handleInputMoney.bind(this));
  }

  handleInputMoney(money) {
    this.lottoAmount = new LottoAmount(money);
    this.publishedLotto = this.lottoAmount.publishUserLotto();
    readLine(INPUT_QUERY.WINNING_NUMBER, this.handleWinningNumber.bind(this));
  }

  handleWinningNumber(winningNumber) {
    this.lotto = new Lotto(winningNumber);
    this.winningNumber = this.lotto.getWinningNumber();
    this.lotto.checkEachLottoNumber(this.publishedLotto);
    readLine(INPUT_QUERY.BONUS_NUMBER, this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(bonusNumber) {
    this.bonus = new Bonus(bonusNumber, this.winningNumber);
    this.bonus.compareUserAndBonus(this.publishedLotto);
    this.printLottoResult();
  }

  printLottoResult() {
    print(OUTPUT.THREE(prizeCount.fifth));
    print(OUTPUT.FOUR(prizeCount.fourth));
    print(OUTPUT.FIVE(prizeCount.third));
    print(OUTPUT.FIVEBONUS(prizeCount.second));
    print(OUTPUT.SIX(prizeCount.first));
    print(OUTPUT.PROFIT(this.lottoAmount.calculateProfit()));
    close();
  }
}

module.exports = UserInput;
