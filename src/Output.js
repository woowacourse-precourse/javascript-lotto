const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT, RANK } = require('./utils/constant');

class Output {
  lottoAmount(lottoAmount) {
    Console.print(MESSAGE.OUTPUT_PURCHASE_AMOUNT(lottoAmount));
  }

  lottoNumbers(purchasedNumbers) {
    purchasedNumbers.forEach((numbers) => {
      const strNumbers = numbers.join(', ');

      Console.print(`[${strNumbers}]`);
    });
  }

  purchasedResult(lottoAmount, purchasedNumbers) {
    this.lottoAmount(lottoAmount);
    this.lottoNumbers(purchasedNumbers);
  }

  drawResultHeader() {
    Console.print(RESULT.HEADER);
    Console.print(RESULT.BOUNDARY_LINE);
  }

  drawResultStatistic(totalRank) {
    for (let rank = RANK.FIFTH; rank >= RANK.FIRST; rank--) {
      Console.print(RESULT.STATISTIC(rank, totalRank[rank]));
    }
  }

  drawResultRateOfReturn(rateOfReturn) {
    Console.print(RESULT.RATE_OF_RETURN(rateOfReturn));
  }

  drawResult(totalRank, rateOfReturn) {
    this.drawResultHeader();
    this.drawResultStatistic(totalRank);
    this.drawResultRateOfReturn(rateOfReturn);
    Console.close();
  }
}

module.exports = Output;
