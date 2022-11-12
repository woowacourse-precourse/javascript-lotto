const Lotto = require('../Lotto');
const lottoGenerator = require('../utils/lottoGenerator');
const lottoResult = require('../utils/lottoResult');

class LottoGame {
  constructor(inputConsole, outputConsole, user) {
    this.inputConsole = inputConsole;
    this.outputConsole = outputConsole;
    this.user = user;
  }

  start() {
    this.inputConsole.trigger('구입금액을 입력해 주세요.\n', (money) => {
      this.user.setMoney(money);
      this.generateUserLottoNumbers(this.user.getMoney());
    });
  }

  generateUserLottoNumbers(money) {
    this.user.setLottoNumbers(lottoGenerator.getTimes(money / 1000));
    this.outputConsole.printUserLotto(this.user.getLottoNumbers());
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    this.inputConsole.trigger('\n당첨 번호를 입력해 주세요.\n', (winningNumbers) => {
      const lotto = new Lotto(winningNumbers.split(','));
      this.inputBonusNumber(lotto);
    });
  }

  inputBonusNumber(lotto) {
    this.inputConsole.trigger('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      lotto.setWinningNumbers(bonusNumber);
      this.resultRank(lotto.getWinningNumbers(bonusNumber));
    });
  }

  resultRank(winningNumbers) {
    const matchingNumbersResult = lottoResult.getAllMatchingNumbersResult(
      this.user.getLottoNumbers(),
      winningNumbers.slice(0, 6),
      winningNumbers[6],
    );
    const rank = lottoResult.getLank(matchingNumbersResult);
    this.outputConsole.printLank(rank);
    this.resultProfitRate(rank);
  }

  resultProfitRate(rank) {
    const profit = lottoResult.getProfit(rank);
    const profitRate = Math.round((profit / this.user.money) * 1000) / 10;
    console.log(profitRate);
  }
}

module.exports = LottoGame;
