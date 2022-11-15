const { LOTTO } = require('./constants');
const { ConsoleAdapter } = require('./adapters');
const { LottoGenerator, LottoChecker } = require('./domain');
const { CostValidator, LottoValidator } = require('./validators');
const {
  INPUT_MESSAGE,
  PURCHASE_NOTIFIER,
  STATISTIC_NOTIFIER,
  STATISTICS,
  PROFIT_RATE,
} = require('./constants');

class App {
  #console;
  #lottoGenerator;
  #lottoTickets;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#console = new ConsoleAdapter();
    this.#lottoGenerator = new LottoGenerator();
    this.#lottoTickets = [];
    this.#winningNumbers = [];
    this.bonusNumber = null;
  }

  play() {
    this.#queryPurchaseCost();
  }

  #queryPurchaseCost() {
    this.#console.readLine(INPUT_MESSAGE.COST, (input) => {
      const cost = Number(input);

      CostValidator.validatePurchaseCost(cost);

      const lottoTickets = this.#purchaseLottoTickets(cost);
      this.#lottoTickets = lottoTickets;

      this.#printPurchaseInformation(lottoTickets);
      this.#queryWinningNumbers();
    });
  }

  #purchaseLottoTickets(cost) {
    const quantity = cost / LOTTO.PRICE;
    const lottoTickets = this.#lottoGenerator.createMultipleLotto(quantity);

    return lottoTickets;
  }

  #printPurchaseInformation(lottoTickets) {
    this.#console.print(`\n${lottoTickets.length}${PURCHASE_NOTIFIER}`);

    lottoTickets.forEach(({ numbers }) => {
      this.#console.print(`[${numbers.join(', ')}]`);
    });
  }

  #queryWinningNumbers() {
    this.#console.readLine(INPUT_MESSAGE.WINNING_NUMBERS, (input) => {
      const winningNumbers = input.split(',').map(Number);

      LottoValidator.validateWinningNumbers(winningNumbers);
      this.#winningNumbers = winningNumbers;

      this.#queryBonusNumber(winningNumbers);
    });
  }

  #queryBonusNumber() {
    this.#console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      const bonusNumber = Number(input);

      LottoValidator.validateBonusNumber(bonusNumber, this.#winningNumbers);
      this.#bonusNumber = bonusNumber;

      this.#printWinningStatistics();
      this.#quit();
    });
  }

  #printWinningStatistics() {
    const lottoChecker = new LottoChecker(
      this.#lottoTickets,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    const ranks = lottoChecker.getLottoRankings();
    const profitRate = lottoChecker.getProfitRate();

    this.#console.print(STATISTIC_NOTIFIER);

    Object.entries(STATISTICS).forEach(([key, message]) => {
      this.#console.print(message(ranks[key]));
    });

    this.#console.print(PROFIT_RATE(profitRate));
  }

  #quit() {
    this.#console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
