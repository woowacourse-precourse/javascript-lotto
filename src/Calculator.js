const Referee = require('./Referee');

class Calculator {
  static calcProfit(cost, income) {
    return +((income / cost) * 100).toFixed(1);
  }

  static calcQuotient(numerator, denominator = 1000) {
    return Math.floor(numerator / denominator);
  }

  static calcLottos(lottos, winningNumbers, bonusNumber) {
    const calcEachLotto = (result, lotto) => {
      const place = Referee.compare(lotto.numbers, winningNumbers, bonusNumber);
      place > 0 && result[place - 1]++;
      return result;
    };
    return lottos.reduce(calcEachLotto, [0, 0, 0, 0, 0]);
  }
}

module.exports = Calculator;
