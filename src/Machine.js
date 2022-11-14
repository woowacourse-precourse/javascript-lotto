const { Console } = require("@woowacourse/mission-utils");

const GET_COST_SENTENCE = '구입금액을 입력해 주세요.';

class Machine {
  constructor() {
    this.count;
  }

  getCost() {
    Console.print(GET_COST_SENTENCE);
  }

  calculateCount(cost) {
    Console.print(cost);
  }
}

module.exports = Machine;