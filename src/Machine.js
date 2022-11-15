const User = require('./User');
const Lotto = require('./Lotto');

const {
  WINNING_NUMBER_COUNT_ERROR,
  WINNING_NUMBER_TYPE_ERROR,
  WINNING_NUMBER_DUPLICATE_ERROR,
  WINNING_NUMBER_RANGE_ERROR,
  WINNING_NUMBER_SEPARATOR_ERROR
} = require('./constants/errors/winningNum');
const {
  BONUS_NUMBER_TYPE_ERROR,
  BONUS_NUMBER_DUPLICATE_ERROR,
  BONUS_NUMBER_RANGE_ERROR
} = require('./constants/errors/bonusNum');

const { Console, Random } = require('@woowacourse/mission-utils');

class Machine {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.user = new User();
  }

  #checkAmount() {
    if (this.user.money % 1000 !== 0) {
      throw Error('[ERROR] 로또는 1000원 단위로 구매가 가능합니다.');
    }
    return true;
  }

  #checkLength() {
    if (this.#winningNumbers.length !== 6) {
      throw Error(WINNING_NUMBER_COUNT_ERROR);
    }
  }

  #checkIsAllNum() {
    this.#winningNumbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw Error(WINNING_NUMBER_TYPE_ERROR);
      }
    });
  }

  #checkIsAllUnique() {
    const set = new Set(this.#winningNumbers);
    if (set.size !== this.#winningNumbers.length) {
      throw Error(WINNING_NUMBER_DUPLICATE_ERROR);
    }
  }

  #checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw Error(WINNING_NUMBER_RANGE_ERROR);
      }
    });
  }

  #checkWinningNumbers() {
    this.#checkLength();
    this.#checkIsAllNum();
    this.#checkIsAllUnique();
    this.#checkRange(this.#winningNumbers);
  }

  #checkIsNum() {
    if (Number.isNaN(this.#bonusNumber)) {
      throw Error(BONUS_NUMBER_TYPE_ERROR);
    }
  }

  #checkUnique() {
    const finalNumbers = new Set(
      this.#winningNumbers.concat(this.#bonusNumber)
    );

    if (finalNumbers.size === this.#winningNumbers.length) {
      throw Error(BONUS_NUMBER_DUPLICATE_ERROR);
    }
  }

  #checkBonusRange() {
    if (this.#bonusNumber < 1 || this.#bonusNumber > 45) {
      throw Error(BONUS_NUMBER_RANGE_ERROR);
    }
  }

  #checkBonusNumber() {
    this.#checkIsNum();
    this.#checkBonusRange();
    this.#checkUnique();
  }

  checkSeparator(answer) {
    if (!answer.includes(',')) {
      throw Error(WINNING_NUMBER_SEPARATOR_ERROR);
    }
  }

  sell() {
    this.getMoney(this.#printLotto.bind(this));
  }

  getMoney(cb) {
    Console.readLine('구입금액을 입력해주세요.\n', (answer) => {
      this.user.money = Number(answer);
      this.#checkAmount();
      return cb(answer);
    });
  }

  #printLotto(money) {
    const lottoCount = money / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print('[' + numbers.join(', ') + ']');
      const lotto = new Lotto(numbers);
      this.user.lottos.push(lotto);
    }
    this.#getWinningNumbers(this.#getBonusNumber.bind(this));
  }

  #getWinningNumbers(cb) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (answer) => {
      this.checkSeparator(answer);
      this.#winningNumbers = answer.split(',').map((number) => Number(number));
      this.#checkWinningNumbers();

      return cb();
    });
  }

  #getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
      this.#bonusNumber = Number(answer);
      this.#checkBonusNumber();
      this.#printResult();
    });
  }

  #count() {
    this.user.getLottos().forEach((lotto) => {
      this.setWinningCount(lotto);
      this.setBonusCount(lotto);
      this.#calcScore(lotto);
    });
    this.user.setProfit();
  }

  #calcScore(lotto) {
    if (lotto.winningCount === 3) {
      this.user.three += 1;
    }
    if (lotto.winningCount === 4) {
      this.user.four += 1;
    }
    if (lotto.winningCount === 5) {
      this.user.five += 1;
    }
    if (lotto.winningCount === 6) {
      this.user.six += 1;
    }
    if (lotto.winningCount !== 6) {
      if (lotto.winningCount + lotto.bonusCount === 6) {
        this.user.fiveBonus += 1;
      }
    }
  }

  setWinningCount(lotto) {
    lotto.getNumbers().forEach((number) => {
      if (this.#winningNumbers.includes(number)) {
        lotto.plusWinningCount();
      }
    });
  }

  setBonusCount(lotto) {
    if (this.#bonusNumber === lotto.getNumbers()) {
      lotto.plusBonusCount();
    }
  }

  #printResult() {
    Console.print('\n당첨 통계');
    Console.print('---');
    this.#count();
    this.user.getScore();
    this.user.getProfit();
  }
}

module.exports = Machine;
