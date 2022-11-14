class Calculator {

  ofPurchaseLottoCount(moneyValue) {
    return Number(moneyValue / 1000);
  }

  matchNumberCount(winNumbers, userPurchaselotto) {
    const matchNumbers = winNumbers.filter((number) => userPurchaselotto.includes(number));
    const matchCount = matchNumbers.length;
    return matchCount;
  }
}

module.exports = Calculator;