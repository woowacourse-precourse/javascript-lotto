const { Console } = require('@woowacourse/mission-utils');
const { validate, isPurchaseInput, isWinningNumber } = require('./Validator');
const { MESSAGE, LOTTO } = require('./constants');
const Lotto = require('./Lotto');

class LottoStore {
  #purchaseAmount = 0;

  #lottoTickets = [];

  #winningNumbers = [];

  enter() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(
      `${MESSAGE.PURCHASE_QUESTION}\n`,
      this.handleSellingLotto.bind(this),
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
    Console.readLine(
      `\n${MESSAGE.WINNING_QUESTION}\n`,
      this.handleWinningNumbers.bind(this),
    );
  }

  handleWinningNumbers(answer) {
    validate(answer, isWinningNumber);
    this.#winningNumbers = answer.split(',').map(Number);
  }
}

module.exports = LottoStore;
