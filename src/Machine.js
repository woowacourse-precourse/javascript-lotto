const User = require('./User');
const Lotto = require('./Lotto');

const { Console, Random } = require('@woowacourse/mission-utils');

class Machine {
  #money;

  #winningNumbers;

  #bonusNumber;

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

  #checkIsAllUnique() {
    const set = new Set(this.#winningNumbers);
    if (set.size !== this.#winningNumbers.length) {
      throw Error('[ERROR] 당첨 번호는 중복되지 않아야 합니다.');
    }
  }

  #checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw Error('[ERROR] 당첨 번호는 1과 45 사이의 숫자여야 합니다.');
      }
    });
  }

  #checkWinningNumbers() {
    this.#checkLength();
    this.#checkIsAllNum();
    this.#checkIsAllUnique();
    this.#checkRange(this.#winningNumbers);
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
    this.#getWinningNumbers(this.#getBonusNumber.bind(this));
  }

  #checkIsNum() {
    if (Number.isNaN(this.#bonusNumber)) {
      throw Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
  }

  #checkUnique() {
    const finalNumbers = new Set(
      this.#winningNumbers.concat(this.#bonusNumber)
    );

    if (finalNumbers.size === this.#winningNumbers.length) {
      throw Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
    }
  }

  #checkBonusRange() {
    if (this.#bonusNumber < 1 || this.#bonusNumber > 45) {
      throw Error('[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.');
    }
  }

  #checkBonusNumber() {
    this.#checkIsNum();
    this.#checkBonusRange();
    this.#checkUnique();
  }

  #getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
      this.#bonusNumber = Number(answer);
      this.#checkBonusNumber();
    });
  }

  checkSeparator(answer) {
    if (!answer.includes(',')) {
      throw Error('[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.');
    }
  }

  #getWinningNumbers(cb) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (answer) => {
      this.checkSeparator(answer);
      this.#winningNumbers = answer.split(',').map((number) => Number(number));
      this.#checkWinningNumbers();

      return cb();
    });
  }

  sell() {
    this.getMoney(this.#printLotto.bind(this));
  }
}

module.exports = Machine;
