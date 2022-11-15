const { Console } = require('@woowacourse/mission-utils');
const { COMPARE_VALUE, MATCH, LOTTO_WIN, PRIZE } = require('./setting/Constants');

class CompareLotto {
  static countPrize(lottoList, winNumber) {
    return lottoList.filter((number) => winNumber.includes(number)).length;
  }

  static countBonus(winNumber, bonus) {
    return winNumber.includes(bonus);
  }

  static result(lottoList, winNumber, bonus) {
    const count = [];

    lottoList.forEach((lotto) => {
      const correctNumber = this.countPrize(lotto, winNumber);
      const correctBonus = this.countBonus(winNumber, bonus);

      count.push({ correctNumber, correctBonus });
    });

    const howManyWin = this.eachResult(count);

    return howManyWin;
  }

  static eachResult(count) {
    const howManyWin = this.makeZeroArray();
    
    for (let i = COMPARE_VALUE.zero; i < count.length; i += COMPARE_VALUE.one) {
      const { correctNumber, correctBonus } = count[i];

      if (correctNumber === MATCH.three) howManyWin[COMPARE_VALUE.zero] += PRIZE;
      if (correctNumber === MATCH.four) howManyWin[COMPARE_VALUE.one] += PRIZE;
      if (correctNumber === MATCH.five) howManyWin[COMPARE_VALUE.two] += PRIZE;
      if (correctNumber === MATCH.five && correctBonus) howManyWin[COMPARE_VALUE.three] += PRIZE;
      if (correctNumber === MATCH.six) howManyWin[COMPARE_VALUE.four] += PRIZE;
    }

    return howManyWin;
  }

  static makeZeroArray() {
    return Array.from({ length: COMPARE_VALUE.length }, () => COMPARE_VALUE.zero);
  }

  static totalMoney(howManyWin) {
    const total = [];
    for (let i = COMPARE_VALUE.zero; i < howManyWin.length; i += COMPARE_VALUE.one) {
      total.push(howManyWin[i] * LOTTO_WIN[i]);
    }

    return total.reduce((a, b) => a + b);
  }
}

module.exports = CompareLotto;
