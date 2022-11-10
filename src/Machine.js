const User = require('./User');
const Lotto = require('./Lotto');

const { Console, Random } = require('@woowacourse/mission-utils');

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

  #printLotto(money) {
    const lottoCount = money / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers);
      const lotto = new Lotto(numbers);
      this.user.lottos.push(lotto);
    }
  }

  sell() {
    this.#getMoney(this.#printLotto.bind(this));
  }
}

module.exports = Machine;
