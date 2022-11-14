const MissionUtils = require('@woowacourse/mission-utils');

class TicketBox {
  #budget;

  constructor(budget) {
    this.validate(budget);
    this.#budget = budget;
  }

  validate(budget) {
    if (isNaN(budget, 10)) {
      throw new Error('[ERROR] 문자가 아닌 숫자가 들어와야 합니다.');
    }
  }

  get budget() {
    return this.#budget;
  }
}

module.exports = TicketBox;
