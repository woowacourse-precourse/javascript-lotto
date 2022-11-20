const { requireUserInput, printMessage, exitProgram } = require('./userInterface');
const { REQUIRE, NOTICE } = require('./constant');
const WinningNumbers = require('./WinningNumbers');
const BonusNumber = require('./BonusNumber');
const PrizeStatus = require('./PrizeStatus');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');

class App {
  state = {
    amount: 0,
    lottos: [],
    winningNumbers: [],
    bonusNumber: 0,
  };

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  purchasePhase() {
    requireUserInput(REQUIRE.purchaseAmount, (input) => {
      const purchase = new Purchase(input);
      this.setState({ amount: Number(input) });

      const count = purchase.count();
      const lottos = new Lotto(count);
      this.setState({ lottos: lottos.getLottos() });

      this.state.lottos.forEach((lotto) => printMessage(lotto));

      return this.winningNumbersPhase();
    });
  }

  winningNumbersPhase() {
    requireUserInput(REQUIRE.winningNumbers, (input) => {
      const winningNumbers = new WinningNumbers(input);
      this.setState({ winningNumbers: winningNumbers.get() });

      return this.bonusNumberPhase();
    });
  }

  bonusNumberPhase() {
    requireUserInput(REQUIRE.bonusNumber, (input) => {
      const bonusNumber = new BonusNumber(input, this.state.winningNumbers);
      this.setState({ bonusNumber: bonusNumber.get() });

      return this.statusPhase();
    });
  }

  statusPhase() {
    const prizeStatus = new PrizeStatus(
      this.state.lottos,
      this.state.winningNumbers,
      this.state.bonusNumber,
    );

    const earningsRate = prizeStatus.calculateEarningsRate(this.state.amount);

    const { fifth, fourth, third, second, first } = prizeStatus.get();

    printMessage(NOTICE.winningStatus);
    printMessage(NOTICE.fifth(fifth));
    printMessage(NOTICE.fourth(fourth));
    printMessage(NOTICE.third(third));
    printMessage(NOTICE.second(second));
    printMessage(NOTICE.first(first));
    printMessage(NOTICE.earningsRate(earningsRate));

    exitProgram();
  }

  play() {
    this.purchasePhase();
  }
}

const app = new App();
app.play();

module.exports = App;
