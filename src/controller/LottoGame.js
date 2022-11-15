const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const { INPUT_MESSAGE, LOTTO_RULE } = require('../utils/constant');
const lottoGenerator = require('../utils/lottoGenerator');
const lottoResult = require('../utils/lottoResult');

class LottoGame {
  constructor(inputConsole, outputConsole, user) {
    this.inputConsole = inputConsole;
    this.outputConsole = outputConsole;
    this.user = user;
  }

  start() {
    this.inputConsole.trigger(INPUT_MESSAGE.PURCHASE_AMOUNT, (money) => {
      this.user.setMoney(money);
      this.generateUserLottoNumbers(this.user.getMoney());
    });
  }

  generateUserLottoNumbers(money) {
    this.user.setLottoNumbers(lottoGenerator.getTimes(money / LOTTO_RULE.MONEY_UNIT));
    this.outputConsole.printUserLotto(this.user.getLottoNumbers());
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    this.inputConsole.trigger(INPUT_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      const lotto = new Lotto(winningNumbers.split(LOTTO_RULE.INPUT_WINNING_NUMBERS_SPLIT));
      this.inputBonusNumber(lotto);
    });
  }

  inputBonusNumber(lotto) {
    this.inputConsole.trigger(INPUT_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      lotto.setWinningNumbers(bonusNumber);
      this.resultRank(lotto.getWinningNumbers(bonusNumber));
    });
  }

  resultRank(winningNumbers) {
    const matchingNumbersResult = lottoResult.getAllMatchingNumbersResult(
      this.user.getLottoNumbers(),
      winningNumbers.slice(0, LOTTO_RULE.WINNING_NUMBERS_LENGTH),
      winningNumbers[LOTTO_RULE.WINNING_NUMBERS_LENGTH],
    );
    const rank = lottoResult.getLank(matchingNumbersResult);
    this.outputConsole.printLank(rank);
    this.resultProfitRate(rank);
  }

  resultProfitRate(rank) {
    const profit = lottoResult.getProfit(rank);
    const profitRate = (profit / this.user.money) * LOTTO_RULE.PROFIT_RATE_PERCENT;
    this.outputConsole.printProfitRate(profitRate);
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = LottoGame;
