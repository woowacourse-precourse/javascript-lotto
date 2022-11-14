const { Random } = require('@woowacourse/mission-utils');
const {
  ERR_MSG,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH,
  RANKS,
  RESULT_MSG,
  PRIZE_MONEY
} = require('./constants');
const Io = require('./Io');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateWinningNumbers(numbers);
    this.#numbers = { winning: numbers };
  }

  static makeLotto() {
    const newLotto = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH
    );
    newLotto.sort((a, b) => a - b);
    return newLotto;
  }

  getYield(result, purchaseMoney) {
    let prizeMoney = 0;
    for (const money in PRIZE_MONEY) {
      prizeMoney += result[money] * PRIZE_MONEY[money];
    }
    return ((prizeMoney / purchaseMoney) * 100).toFixed(1);
  }

  printResult(result) {
    for (const rank in RANKS) {
      Io.printConsole(`${RESULT_MSG[rank]} - ${result[rank]}개`);
    }
  }
  getResult(lottos) {
    const result = {};

    for (const rank in RANKS) {
      result[rank] = 0;
    }

    lottos.forEach(lotto => {
      const resultType = this.getResultType(lotto);
      if (Object.prototype.hasOwnProperty.call(result, resultType)) {
        result[resultType] += 1;
      }
    });

    return result;
  }

  getResultType(lotto) {
    let winning = 0;
    let bonus = 0;
    lotto.forEach(number => {
      if (this.#numbers.winning.includes(number)) {
        winning += 1;
      }
      if (this.#numbers.bonus === number) {
        bonus += 1;
      }
    });
    if (winning === 6) return RANKS.FIRST;
    if (winning === 5 && bonus === 1) return RANKS.SECOND;
    if (winning === 5) return RANKS.THIRD;
    if (winning === 4) return RANKS.FOURTH;
    if (winning === 3) return RANKS.FIFTH;
  }

  setBonusNumber(bounsNumber) {
    this.validateBonusNumber(bounsNumber);
    this.#numbers = { ...this.#numbers, bonus: bounsNumber };
  }

  validateNumberAndRange(number) {
    if (!+number || +number > MAX_LOTTO_NUMBER || +number < MIN_LOTTO_NUMBER) {
      throw new Error(ERR_MSG.invalidLottoNumberRange);
    }
  }

  validateBonusNumber(bounsNumber) {
    this.validateNumberAndRange(bounsNumber);
    if (this.#numbers.winning.includes(bounsNumber)) {
      throw new Error(ERR_MSG.duplicatedNumber);
    }
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_MSG.invalidLottoNumberLength);
    }
    numbers.forEach(number => {
      this.validateNumberAndRange(number);
    });

    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(ERR_MSG.duplicatedNumber);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
