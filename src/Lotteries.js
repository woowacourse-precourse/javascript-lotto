const { Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/lottoMessage');
const {
  LOTTO_INFO,
  PRIZE_MONEY,
  CORRECT_PRIZE_NAME,
  PRIZE_CORRECT_COUNT,
} = require('./constants/lottoSetting');

const Lotto = require('./Lotto');
const Validator = require('./utils/Validator');

class Lotteries {
  #storage;
  #rankGroup;
  #winningLotto;
  #bonusLotto;

  constructor() {
    this.#storage = [];
    this.#rankGroup = {
      rankFifth: 0,
      rankFourth: 0,
      rankThird: 0,
      rankSecond: 0,
      rankFirst: 0,
    };
  }

  setBonusLotto(digit) {
    if (this.#winningLotto.getLotto().includes(digit)) {
      throw new Error(MESSAGE.ERROR.duplicateBonus);
    }
    if (Validator.validateBonusRange(digit)) this.#bonusLotto = digit;
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  setWinningLotto(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }

  getStorage() {
    return this.#storage;
  }

  getSaleQuantity() {
    return this.#storage.length;
  }

  getRankGroup() {
    return this.#rankGroup;
  }

  getTotalPrize() {
    return this.calcTotalPrize();
  }

  getLottoArray() {
    return this.#storage.reduce(
      (combineConsole, lotto) => (combineConsole += `[${Lotteries.#sortLotto(lotto)}]\n`),
      '',
    );
  }

  static #sortLotto(lotto) {
    return Lotteries.#arrayToString(
      lotto.getLotto().sort((front, back) => front - back),
    );
  }

  static #arrayToString(arr) {
    return [...arr].join(', ');
  }

  purchaseAuto() {
    const { minimumDigit, maximumDigit, digitLength } = LOTTO_INFO;
    this.#storage.push(
      new Lotto(
        Random.pickUniqueNumbersInRange(minimumDigit, maximumDigit, digitLength),
      ),
    );
  }

  setRankGroup(correctCount, lotto) {
    if (CORRECT_PRIZE_NAME[correctCount] === undefined) return;
    if (correctCount === PRIZE_CORRECT_COUNT.rankSecond && lotto.hasDigit(this.#bonusLotto)) {
      return this.#rankGroup.rankSecond += 1;
    }
    return this.#rankGroup[CORRECT_PRIZE_NAME[correctCount]] += 1;
  }

  calcTotalPrize() {
    return Object.entries(this.#rankGroup).reduce(
      (sumPrize, [rank, quantity]) => {
        const rankPrize = PRIZE_MONEY[rank] * quantity;
        return sumPrize + rankPrize;
      },

      0,
    );
  }
}

module.exports = Lotteries;
