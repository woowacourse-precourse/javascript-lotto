const {
  LOTTO_RESULT_MESSAGE, LOTTO_RESULT_PRICE, LOTTO_RESURL_STATISTICS_MESSAGE, LOTTO_RESULT_TYPE,
} = require('./lib/Constants');
const { print } = require('./lib/Utils');

class CalculationLotto {
  lottoResult = {
    [LOTTO_RESULT_TYPE.three]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_three_match,
      price: LOTTO_RESULT_PRICE.result_three_number,
    },
    [LOTTO_RESULT_TYPE.four]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_four_match,
      price: LOTTO_RESULT_PRICE.result_four_number,
    },
    [LOTTO_RESULT_TYPE.five]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_five_match,
      price: LOTTO_RESULT_PRICE.result_five_number,
    },
    [LOTTO_RESULT_TYPE.six]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_six_match,
      price: LOTTO_RESULT_PRICE.result_six_number,
    },
    [LOTTO_RESULT_TYPE.bonus]: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_five_bonus_match,
      price: LOTTO_RESULT_PRICE.result_five_bonus_number,
    },
  };

  matchCount = 0;

  isBonusMatch = false;

  lottoRate = 0;

  lottoPrice = 0;

  lottoWinPrice = 0;

  /**
 *
 * @param {Array<number>} lottoList
 * @param {Array<number>} winNumberList
 * @param {number} bonusNumber
 */
  calculationList(lottoList, winNumberList, bonusNumber) {
    this.winNumberList = winNumberList;
    this.bonusNumber = bonusNumber;

    lottoList.forEach((lotto) => this.calculationMatchCount(lotto));

    return this;
  }

  calculationMatchCount(lotto) {
    const myLottoSet = new Set(lotto);
    const winNumberSet = new Set(this.winNumberList);
    const lottoIntersecrt = new Set(lotto.filter((number) => winNumberSet.has(number)));

    this.isBonusMatch = myLottoSet.has(this.bonusNumber);
    this.matchCount = (this.isBonusMatch ? 1 : 0) + lottoIntersecrt.size;
  }

  matchResult() {
    const count = this.isBonusFiveMatch() ? LOTTO_RESULT_TYPE.bonus : this.matchCount;

    this.lottoResult[count].count += 1;
    this.lottoWinPrice += this.lottoResult[count].price;

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
  calculationLottoRate(lottoPrice) {
    const rate = (this.lottoWinPrice / lottoPrice) * 100;
    this.lottoRate = rate;

    return this;
  }

  printWinResult() {
    print(LOTTO_RESURL_STATISTICS_MESSAGE);

    Object.keys(this.lottoResult).forEach((key) => {
      const value = this.lottoResult[key];
      return print(`${value.text}${value.count}개`);
    });

    return this;
  }

  printRate() {
    print(`총 수익률은 ${this.lottoRate || 0}%입니다.`);
    return this;
  }
}

module.exports = CalculationLotto;
