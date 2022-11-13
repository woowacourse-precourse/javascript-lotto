const { Console } = require('@woowacourse/mission-utils');
const {
  validate,
  isPurchaseInput,
  areWinningNumbers,
  isBonusNumber,
} = require('./Validator');
const { MESSAGE, LOTTO } = require('./constants');
const Lotto = require('./Lotto');

class LottoStore {
  #purchaseAmount = 0;

  #lottoTickets = [];

  #winningNumbers = [];

  #bonusNumber = 0;

  enter() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(`${MESSAGE.PURCHASE_QUESTION}\n`, answer =>
      this.handleSellingLotto(answer),
    );
  }

  handleSellingLotto(answer) {
    validate(answer, isPurchaseInput);
    this.#purchaseAmount = Number(answer);
    this.sellLottoTickets();
    this.printSoldTickets();
    this.askWinningNumbers();
  }

  sellLottoTickets() {
    const count = this.#purchaseAmount / LOTTO.PRICE;
    this.#lottoTickets = Array.from({ length: count }, Lotto.generateTicket);
  }

  printSoldTickets() {
    Console.print(`\n${this.#lottoTickets.length}${MESSAGE.PURCHASE_RESULT}`);
    this.#lottoTickets.forEach(ticket => Console.print(ticket.toString()));
  }

  askWinningNumbers() {
    Console.readLine(`\n${MESSAGE.WINNING_QUESTION}\n`, answer =>
      this.handleWinningNumbers(answer),
    );
  }

  handleWinningNumbers(answer) {
    validate(answer, areWinningNumbers);
    this.#winningNumbers = answer.split(',').map(Number);
    this.askBonusNumber();
  }

  askBonusNumber() {
    Console.readLine(`\n${MESSAGE.BONUS_QUESTION}\n`, answer =>
      this.handleBonusNumber(answer),
    );
  }

  handleBonusNumber(answer) {
    validate(answer, isBonusNumber(this.#winningNumbers));
    this.#bonusNumber = Number(answer);
  }
}

module.exports = LottoStore;
