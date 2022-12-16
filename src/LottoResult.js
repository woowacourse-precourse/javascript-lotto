const { caculateTotalPrize, caculateProfitRatio } = require("./Caculator");

class LottoResult {
  #result;

  constructor(result) {
    this.#result = result;
  }

  getProfitRatio() {
    const totalPrize = caculateTotalPrize(this.#result);
    const money = Object.values(this.#result).reduce(
      (sum, each) => sum + each,
      0
    );
    return caculateProfitRatio(money, totalPrize);
  }
}

module.exports = LottoResult;
