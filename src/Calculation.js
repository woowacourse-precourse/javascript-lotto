const {
  LOTTO_RESULT_MESSAGE, LOTTO_RESULT_PRICE, LOTTO_RESULT_TYPE,
} = require('./lib/Constants');
const { isLessThanNumber } = require('./lib/Utils');

class Calculation {
  #winResult = {
    [LOTTO_RESULT_TYPE.three]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.three,
      price: LOTTO_RESULT_PRICE.three,
    },
    [LOTTO_RESULT_TYPE.four]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.four,
      price: LOTTO_RESULT_PRICE.four,
    },
    [LOTTO_RESULT_TYPE.five]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.five,
      price: LOTTO_RESULT_PRICE.five,
    },
    [LOTTO_RESULT_TYPE.six]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.six,
      price: LOTTO_RESULT_PRICE.six,
    },
    [LOTTO_RESULT_TYPE.bonus]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.bonus,
      price: LOTTO_RESULT_PRICE.bonus,
    },
  };

  #rate = 0;

  matchCount = 0;

  isBonusMatch = false;

  prizeMoney = 0;

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

  calcMatchCount(lotto) {
    const myLottoSet = new Set(lotto);
    const winListSet = new Set(this.winList);
    const lottoIntersecrt = new Set(lotto.filter((number) => winListSet.has(number)));

    this.isBonusMatch = myLottoSet.has(this.bonus);
    this.matchCount = this.isBonusMatch + lottoIntersecrt.size;

    return this.matchResult();
  }

  matchResult() {
    const count = this.isBonusFiveMatch() ? LOTTO_RESULT_TYPE.bonus : this.matchCount;

    if (isLessThanNumber(count, 3)) {
      return this;
    }

    this.#winResult[count].count += 1;
    this.prizeMoney += this.#winResult[count].price;

    return this;
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
    this.#rate = (this.prizeMoney / lottoPrice) * 100;

    return this;
  }

  getWinResult() {
    return this.#winResult;
  }

  getRate() {
    return this.#rate;
  }
}

module.exports = Calculation;
