const MissionUtils = require('@woowacourse/mission-utils');

class TicketBox {
  #budget;

  constructor(budget) {
    this.validate(budget);
    this.#budget = budget;
  }

  validate(budget) {}

  get budget() {
    return this.#budget;
  }
}

module.exports = TicketBox;
