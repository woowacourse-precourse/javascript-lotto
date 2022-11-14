/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

class TicketBox {
  #budget;

  #tickets = [];

  constructor(budget) {
    this.validate(budget);
    this.#budget = parseInt(budget, 10);
  }

  validate(budget) {
    if (isNaN(budget, 10)) {
      throw new Error('[ERROR] 숫자를 입력하여 주십시오.');
    }
    if (budget % 1000) {
      throw new Error('[ERROR] 1000 단위로 입력하여 주십시오.');
    }
  }

  get budget() {
    return this.#budget;
  }

  makeTickets() {
    const ticketCount = this.#budget / 1000;
    while (this.#tickets.length < ticketCount) {
      const ticketNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
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
