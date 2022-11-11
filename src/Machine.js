const User = require('./User');
const Lotto = require('./Lotto');

const { Console, Random } = require('@woowacourse/mission-utils');

class Machine {
  #money;

  #winningNumbers;

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

  #checkLength() {
    if (this.#winningNumbers.length !== 6) {
      throw Error('[ERROR] 당첨 번호는 6개의 숫자여야 합니다.');
    }
  }

  #checkIsAllNum() {
    this.#winningNumbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
      }
    });
  }

  #checkIsAllUnique() {}

  #checkRange() {}

  #checkSeparator() {}

  #checkWinningNumbers() {
    this.#checkLength();
    this.#checkIsAllNum();
    // this.#checkIsAllUnique();
    // this.#checkRange();
    // this.#checkSeparator();
  }

  getMoney(cb) {
    Console.readLine('구입금액을 입력해주세요.\n', (answer) => {
      this.#money = Number(answer);
      this.#checkAmount();

      return cb(answer);
    });
  }

  #printLotto(money) {
    const lottoCount = money / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers);
      const lotto = new Lotto(numbers);
      this.user.lottos.push(lotto);
    }
    this.#getWinningNumbers();
  }

  #getWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (answer) => {
      this.#winningNumbers = answer.split(',').map((number) => Number(number));
      this.#checkWinningNumbers();
    });
  }

  sell() {
    this.getMoney(this.#printLotto.bind(this));
  }
}

module.exports = Machine;
