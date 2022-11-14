const {
  LOTTO_RESULT_PRICE, LOTTO_RESULT_TYPE,
} = require('./lib/Constants');
const { getRate, isLessThanNumber } = require('./lib/Utils');

class Calculation {
  #winResult = {
    [LOTTO_RESULT_TYPE.three]: {
      count: 0,
      price: LOTTO_RESULT_PRICE.three,
    },
    [LOTTO_RESULT_TYPE.four]: {
      count: 0,
      price: LOTTO_RESULT_PRICE.four,
    },
    [LOTTO_RESULT_TYPE.five]: {
      count: 0,
      price: LOTTO_RESULT_PRICE.five,
    },
    [LOTTO_RESULT_TYPE.six]: {
      count: 0,
      price: LOTTO_RESULT_PRICE.six,
    },
    [LOTTO_RESULT_TYPE.bonus]: {
      count: 0,
      price: LOTTO_RESULT_PRICE.bonus,
    },
  };

  #rate = 0;

  matchCount = 0;

  isBonusMatch = false;

  /**
 *
 * @param {Array<number>} lottoList
 * @param {Array<number>} winList
 * @param {number} bonusNumber
 */
  calcList(lottoList, winList, bonus) {
    this.winList = winList;
    this.bonus = bonus;

    lottoList.forEach((lotto) => this.calcMatchCount(lotto));

    return this;
  }

  /**
   *
   * @param {Array<number>} lotto
   * @returns
   */
  calcMatchCount(lotto) {
    const { length: intersecrtCount } = lotto.filter((number) => new Set(this.winList).has(number));

    this.isBonusMatch = new Set(lotto).has(this.bonus);
    this.matchCount = this.isBonusMatch + intersecrtCount;

    return this.matchResult();
  }

  matchResult() {
    const count = this.getMatchResultType();

    if (isLessThanNumber(count, 3)) {
      return;
    }

    this.#winResult[count].count += 1;
  }

  getMatchResultType() {
    return this.isBonusFiveMatch() ? LOTTO_RESULT_TYPE.bonus : this.matchCount;
  }

  isBonusFiveMatch() {
    return this.isBonusMatch && this.matchCount === 5;
  }

  /**
   *
   * @param {number} lottoPrice
   * @returns
   */
  calcLottoRate(lottoPrice) {
    const prizeMoney = this.getPrizeMoney();
    this.#rate = getRate(prizeMoney, lottoPrice);

    return this;
  }

  getPrizeMoney() {
    const initialValue = 0;
    const winResult = Object.values(this.#winResult).filter((resultType) => !!resultType.count);
    return winResult.reduce((acc, { price }) => acc + price, initialValue);
  }

  getWinResult() {
    return this.#winResult;
  }

  getRate() {
    return this.#rate;
  }
}

module.exports = Calculation;
