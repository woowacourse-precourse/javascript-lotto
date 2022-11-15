const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constant');

class Output {
  lottoNumbers(lottoAmount, purchasedNumbers) {
    Console.print(`\n${lottoAmount}${MESSAGE.OUTPUT_PURCHASE_AMOUNT}`);

    purchasedNumbers.forEach((numbers) => {
      const strNumbers = numbers.join(', ');

      Console.print(`[${strNumbers}]`);
    });
  }
}

module.exports = Output;
