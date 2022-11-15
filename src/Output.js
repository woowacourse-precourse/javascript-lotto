const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('./utils/constant');

class Output {
  lottoNumbers(lottoAmount, purchasedNumbers) {
    Console.print(`\n${lottoAmount}${MESSAGE.OUTPUT_PURCHASE_AMOUNT}`);

    purchasedNumbers.forEach((numbers) => {
      const strNumbers = numbers.join(', ');

      Console.print(`[${strNumbers}]`);
    });
  }

  result(totalRank, rateOfReturn) {
    Console.print(RESULT.STATISTIC);
    Console.print(RESULT.BOUNDARY_LINE);

    for (let rank = 1; rank <= 6; rank++) {
      Console.print(`${RESULT.MATCHES[rank]}${totalRank[rank]}${RESULT.PEICE}`);
    }

    Console.print(`${RESULT.RATE_OF_RETURN}${rateOfReturn}%입니다.`);
  }
}

module.exports = Output;
