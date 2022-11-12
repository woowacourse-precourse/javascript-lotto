const { LOTTO_RESULT_MESSAGE, LOTTO_RESULT_PRICE } = require('./lib/Constants');
const { print } = require('./lib/Utils');

class CalculationLotto {
  lottoRate = 0;

  lottoResult = {
    three: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_three_match,
      price: LOTTO_RESULT_PRICE.result_three_number,
    },
    four: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_four_match,
      price: LOTTO_RESULT_PRICE.result_four_number,
    },
    five: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_five_match,
      price: LOTTO_RESULT_PRICE.result_five_number,
    },
    bonus: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_five_bonus_match,
      price: LOTTO_RESULT_PRICE.result_five_bonus_number,
    },
    six: {
      count: 0,
      text: LOTTO_RESULT_MESSAGE.result_six_match,
      price: LOTTO_RESULT_PRICE.result_six_number,
    },
  };

  matchCount = 0;

  isBonusMatch = false;

  /**
 *
 * @param {Array<number>} lottoList
 * @param {Array<number>} winNumberList
 * @param {number} bonusNumber
 */
  calculationLottoResult(lottoList, winNumberList, bonusNumber) {
    this.winNumberList = winNumberList;
    this.bonusNumber = bonusNumber;

    lottoList.forEach((lotto) => this.matchLottoNumber(lotto));
  }

  matchLottoNumber(lotto) {
    this.isBonusMatch = !!lotto.filter((number) => number === this.bonusNumber).length;

    const matchLottoList = lotto.filter((number) => this.winNumberList.includes(number));
    const { length } = matchLottoList;

    this.matchCount = (this.isBonusMatch ? 1 : 0) + length;

    return this;
  }

  matchResult() {
    if (this.isBonusMatch && this.matchCount === 5) {
      this.lottoResult.bonus.count += 1;
      this.lottoWinPrice += this.lottoResult.bonus.price;
      return true;
    }

    switch (this.matchCount) {
      case 3:
        this.lottoResult.three.count += 1;
        this.lottoWinPrice += this.lottoResult.three.price;
        break;
      case 4:
        this.lottoResult.four.count += 1;
        this.lottoWinPrice += this.lottoResult.four.price;
        break;
      case 5:
        this.lottoResult.five.count += 1;
        this.lottoWinPrice += this.lottoResult.five.price;
        break;
      case 6:
        this.lottoResult.six.count += 1;
        this.lottoWinPrice += this.lottoResult.six.price;
        break;
      default:
        return false;
    }

    return this;
  }

  calculationLottoRate() {
    const rate = (this.lottoWinPrice / this.lottoPrice) * 100;
    this.lottoRate = rate;

    return this;
  }

  printResult() {
    print('\n당첨 통계');
    print('---\n');

    Object.keys(this.lottoResult).forEach((key) => {
      const value = this.lottoResult[key];
      return print(`${value.text}${value.count}개`);
    });

    print(`총 수익률은 ${this.lottoRate}%입니다.`);
    return true;
  }
}

module.exports = CalculationLotto;
