const InputView = require('./ui/InputView');
const OutputView = require('./ui/OutputView');
const LottoMachine = require('./domain/LottoMachine');
const Player = require('./domain/Player');
const { MESSAGE } = require('./utils/constants');

class Game {
  constructor() {
    this.player = new Player();
    this.lottoMachine = new LottoMachine();
  }

  start() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    InputView.requestPurchaseAmount((purchasedAmount) => {
      this.player.purchaseLottos(purchasedAmount);
      const purchasedLottos = this.player.getPurchasedLottos();

      OutputView.printBlankLine();
      OutputView.printPurchasedLottos(purchasedLottos);

      this.setWinningNumbers();
    });
  }

  setWinningNumbers() {
    OutputView.printBlankLine();
    InputView.requestWinningNumbers((input) => {
      const lottoWinningNumbers = this.getWinningNumbersFromInput(input);
      this.lottoMachine.setLottoWinningNumbers(lottoWinningNumbers);

      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    OutputView.printBlankLine();
    InputView.requestBonusNumber((input) => {
      const bonusNumber = this.getBonusNumberFromInput(input);
      this.lottoMachine.setBonusNumber(bonusNumber);

      this.showStatistic();
    });
  }

  showStatistic() {
    OutputView.printBlankLine();
    const lottoWinningNumbers = this.lottoMachine.getLottoWinningNumbers();
    const bonusNumber = this.lottoMachine.getBonusNumber();

    this.player.calculateStatistic(lottoWinningNumbers, bonusNumber);

    const statistic = this.player.getStatistic();
    const purchasedAmount = this.player.getPurchasedAmount();

    OutputView.printStatistic(statistic);
    OutputView.printRateOfReturn(purchasedAmount, statistic);

    this.terminate();
  }

  terminate() {
    OutputView.printBlankLine();
    OutputView.print(MESSAGE.TERMINATE_GAME);
    OutputView.closeConsole();
  }

  getWinningNumbersFromInput = (input) => {
    const lottoWinningNumbers = input.split(',').map((number) => {
      const lottoNumber = parseInt(number, 10);

      return lottoNumber;
    });

    return lottoWinningNumbers;
  };

  getBonusNumberFromInput = (input) => {
    const bonusNumber = parseInt(input, 10);

    return bonusNumber;
  };
}

module.exports = Game;
