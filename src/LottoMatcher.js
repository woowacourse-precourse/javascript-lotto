const { PRIZE, prizeMsg } = require("./utils/string");
const WConsole = require("./utils/WConsole");

class LottoMatcher {
  #rankResult;

  constructor() {
    this.#rankResult = { FIFTH: 0, FOURTH: 0, THIRD: 0, SECOND: 0, FIRST: 0 };
  }
  getLottoPrize(lottos, matchingLotto) {
    let lottoResults = this.#rankResult;
    let result;
    for (const lotto of lottos) {
      result = lotto.compareNums(matchingLotto);
      lottoResults = this.isInRank(result, lottoResults);
    }
    this.printLottoResults(lottoResults);
    return this.calculatePrize(lottoResults);
  }
  isInRank(result, lottoResults) {
    if (result.rank) {
      lottoResults[result.rank]++;
    }
    return lottoResults;
  }
  calculatePrize(lottoResults) {
    let prize = 0;
    for (const [rank, count] of Object.entries(lottoResults)) {
      prize += PRIZE[rank] * count;
    }
    return prize;
  }
  printLottoResults(lottoResults) {
    for (const [rank, count] of Object.entries(lottoResults)) {
      WConsole.print(prizeMsg(rank, count));
    }
  }
}

module.exports = LottoMatcher;
