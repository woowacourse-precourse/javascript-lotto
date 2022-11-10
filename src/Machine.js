const User = require('./User');

const { Console } = require('@woowacourse/mission-utils');

class Machine {
  #money;

  constructor() {
    this.user = new User();
    this.#money = 0;
  }

  #checkAmount() {
    if (this.#money % 1000 !== 0) {
      throw Error('[ERROR] 로또는 1000원 단위로 구매가 가능합니다.');
    }
    return true;
  }

  #getMoney() {
    Console.readLine('구입금액을 입력해주세요.\n', (answer) => {
      this.#money = Number(answer);
      this.#checkAmount();
    });
  }

  sell() {
    this.#getMoney();
  }
}

module.exports = Machine;
