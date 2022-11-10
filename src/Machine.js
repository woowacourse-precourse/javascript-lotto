const User = require('./User');

const { Console } = require('@woowacourse/mission-utils');

class Machine {
  #money;

  constructor() {
    this.user = new User();
    this.#money = 0;
  }

  #getMoney() {
    Console.readLine('구입금액을 입력해주세요.\n', (answer) => {
      this.#money = Number(answer);
    })
  }

  sell() {
    this.#getMoney();
  }
}

module.exports = Machine;
