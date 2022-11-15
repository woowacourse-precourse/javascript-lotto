const { LOTTO_PRIZE } = require('./Constants');

class Calculator {
  ofPurchaseLottoCount(moneyValue) {
    return Number(moneyValue / 1000);
  }

  matchNumberCount(winNumbers, userPurchaselotto) {
    const matchNumbers = winNumbers.filter(number => userPurchaselotto.includes(number));
    const matchCount = matchNumbers.length;
    return matchCount;
  }

  profit(lottoResultMap) {
    return Object.entries(lottoResultMap).reduce((accemulateProfit, [grade, count]) => {
      return accemulateProfit + LOTTO_PRIZE[grade] * count;
    }, 0);
  }
}

module.exports = Calculator;
