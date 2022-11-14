const { PRIZE_MATCH_NUMBER_COUNT } = require("./constants/condition.js");

class PrizeCalculator {
  calculatePrize(eachLottoNumbers, winningNumbers, bonusNumber) {
    const eachCompareResult = eachLottoNumbers.map((lottoNumbers) => {
      return this.getCompareResult(lottoNumbers, winningNumbers, bonusNumber);
    });

    const eachLottoPrize = eachCompareResult.map(this.getLottoPrize);

    return eachLottoPrize;
  }

  getCompareResult(lottoNumbers, winningNumbers, bonusNumber) {
    const matchedLottoNumberCount = this.getMatchedLottoNumberCount(lottoNumbers, winningNumbers);
    const hasBonusNumber = this.hasBonusNumber(lottoNumbers, bonusNumber);

    return { matchedLottoNumberCount, hasBonusNumber };
  }

  getMatchedLottoNumberCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  hasBonusNumber(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  getLottoPrize(compareResult) {
    const { matchedLottoNumberCount, hasBonusNumber } = compareResult;

    if (matchedLottoNumberCount === PRIZE_MATCH_NUMBER_COUNT.firstPlace) return "firstPlace";
    if (matchedLottoNumberCount === PRIZE_MATCH_NUMBER_COUNT.secondPlace && hasBonusNumber) {
      return "secondPlace";
    }
    if (matchedLottoNumberCount === PRIZE_MATCH_NUMBER_COUNT.thirdPlace) return "thirdPlace";
    if (matchedLottoNumberCount === PRIZE_MATCH_NUMBER_COUNT.fourthPlace) return "fourthPlace";
    if (matchedLottoNumberCount === PRIZE_MATCH_NUMBER_COUNT.fifthPlace) return "fifthPlace";

    return "fail";
  }
}
module.exports = PrizeCalculator;
