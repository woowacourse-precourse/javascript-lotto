const { Console } = require("@woowacourse/mission-utils");

class TotalLottoResult {
  #sameNumberCount;

  constructor(lottoResults) {
    this.#sameNumberCount = lottoResults;
  }

  print() {
    Console.print(`
      3개 일치 (5,000원) - ${this.#getFifthWinningCount(
        this.#sameNumberCount
      )}개
      4개 일치 (50,000원) - ${this.#getFourthWinningCount(
        this.#sameNumberCount
      )}개
      5개 일치 (1,500,000원) - ${this.#getThirdWinningCount(
        this.#sameNumberCount
      )}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#getSecondWinningCount(
        this.#sameNumberCount
      )}개
      6개 일치 (2,000,000,000원) - ${this.#getFirstWinningCount(
        this.#sameNumberCount
      )}개
    `);
  }

  #getFirstWinningCount(lottoResults) {
    return lottoResults.filter((lottoResult) => {
      const MATCHED_NUMBER_COUNT = 6;
      const matchedNumberCount = lottoResult.getMatchedNumberCount();

      return matchedNumberCount === MATCHED_NUMBER_COUNT;
    }).length;
  }

  #getSecondWinningCount(lottoResults) {
    return lottoResults.filter((lottoResult) => {
      const MATCHED_NUMBER_COUNT = 5;
      const matchedNumberCount = lottoResult.getMatchedNumberCount();
      const isBonusNumberMatched = lottoResult.isBonusNumberMatched();

      return (
        matchedNumberCount === MATCHED_NUMBER_COUNT && isBonusNumberMatched
      );
    }).length;
  }

  #getThirdWinningCount(lottoResults) {
    return lottoResults.filter((lottoResult) => {
      const MATCHED_NUMBER_COUNT = 5;
      const matchedNumberCount = lottoResult.getMatchedNumberCount();
      const isBonusNumberMatched = lottoResult.isBonusNumberMatched();

      return (
        matchedNumberCount === MATCHED_NUMBER_COUNT && !isBonusNumberMatched
      );
    }).length;
  }

  #getFourthWinningCount(lottoResults) {
    return lottoResults.filter((lottoResult) => {
      const MATCHED_NUMBER_COUNT = 4;
      const matchedNumberCount = lottoResult.getMatchedNumberCount();

      return matchedNumberCount === MATCHED_NUMBER_COUNT;
    }).length;
  }

  #getFifthWinningCount(lottoResults) {
    return lottoResults.filter((lottoResult) => {
      const MATCHED_NUMBER_COUNT = 3;
      const matchedNumberCount = lottoResult.getMatchedNumberCount();

      return matchedNumberCount === MATCHED_NUMBER_COUNT;
    }).length;
  }
}

module.exports = TotalLottoResult;
