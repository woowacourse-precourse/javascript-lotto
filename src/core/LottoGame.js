const Lotto = require('../Lotto');
const lottoGenerator = require('../utils/lottoGenerator');

class LottoGame {
  constructor(inputConsole, outputConsole, user) {
    this.inputConsole = inputConsole;
    this.outputConsole = outputConsole;
    this.user = user;
  }

  start() {
    this.inputConsole.userMoney((money) => {
      this.user.validateMoney(money);
      this.user.setMoney(money);
      this.purchase(this.user.getMoney());
    });
  }

  purchase(money) {
    const lottoNumbers = lottoGenerator.getTimes(money / 1000);
    this.user.setLotto(lottoNumbers);
    this.outputConsole.userLotto(this.user.getLotto());
    this.inputConsole.winningNumbers((numbers) => {
      const lotto = new Lotto(numbers.split(','));
      this.inputConsole.bonusNumber((number) => {
        lotto.setWinningNumbers(number);
      });
    });
  }
}

module.exports = LottoGame;
