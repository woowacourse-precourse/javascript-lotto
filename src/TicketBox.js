/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');
const {
  TICKET_NUMBER,
  DECIMAL_NUMBER,
  PRICE_PER_TICKET,
} = require('./Constant');

class TicketBox {
  #budget;

  #tickets = [];

  constructor(budget) {
    this.validate(budget);
    this.#budget = parseInt(budget, DECIMAL_NUMBER);
  }

  validate(budget) {
    if (isNaN(budget, DECIMAL_NUMBER)) {
      throw new Error('[ERROR] 숫자를 입력하여 주십시오.');
    }
    if (budget % PRICE_PER_TICKET) {
      throw new Error('[ERROR] 1000 단위로 입력하여 주십시오.');
    }
  }

  get budget() {
    return this.#budget;
  }

  makeTickets() {
    const ticketCount = this.#budget / PRICE_PER_TICKET;
    while (this.#tickets.length < ticketCount) {
      const ticketNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        TICKET_NUMBER.RANGE_START,
        TICKET_NUMBER.RANGE_END,
        TICKET_NUMBER.COUNT_OF_NUMBER,
      );
      this.#tickets.push(ticketNumbers);
    }
    MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);
  }

  get tickets() {
    return this.#tickets;
  }

  printTickets() {
    this.#tickets.forEach((ticket) =>
      MissionUtils.Console.print(`[${ticket.join(', ')}]`),
    );
  }
}

module.exports = TicketBox;
