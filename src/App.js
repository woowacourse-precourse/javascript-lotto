const { LOTTO } = require('./constants');
const { ConsoleAdapter } = require('./adapters');
const { LottoGenerator } = require('./domain');
const { CostValidator, LottoValidator } = require('./validators');

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
    this.#console.readLine('구입 금액을 입력해 주세요.\n', (input) => {
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
    this.#console.print(`\n${lottoTickets.length}개를 구매했습니다.`);

    lottoTickets.forEach(({ numbers }) => {
      this.#console.print(`[${numbers.join(', ')}]`);
    });
  }

  #queryWinningNumbers() {
    this.#console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      const winningNumbers = input.split(',').map(Number);

      LottoValidator.validateWinningNumbers(winningNumbers);
      this.#winningNumbers = winningNumbers;

      this.#queryBonusNumber(winningNumbers);
    });
  }

  #queryBonusNumber() {
    this.#console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      const bonusNumber = Number(input);

      LottoValidator.validateBonusNumber(bonusNumber, this.#winningNumbers);
      this.#bonusNumber = bonusNumber;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
