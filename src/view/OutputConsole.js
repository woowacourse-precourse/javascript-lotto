const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, LOTTO_RULE } = require('../utils/constant');

class OutputConsole {
  printUserLotto(lotto) {
    Console.print(`\n${lotto.length}${OUTPUT_MESSAGE.PURCHASE}`);
    lotto.forEach((numbers) => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  }

  printLank([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print(`${OUTPUT_MESSAGE.FIFTH_PLACE} ${fifthPlace}${OUTPUT_MESSAGE.UNIT}`);
    Console.print(`${OUTPUT_MESSAGE.FOURTH_PLACE} ${fourthPlace}${OUTPUT_MESSAGE.UNIT}`);
    Console.print(`${OUTPUT_MESSAGE.THIRD_PLACE} ${thirdPlace}${OUTPUT_MESSAGE.UNIT}`);
    Console.print(`${OUTPUT_MESSAGE.SECOND_PLACE} ${secondPlace}${OUTPUT_MESSAGE.UNIT}`);
    Console.print(`${OUTPUT_MESSAGE.FIRST_PLACE} ${firstPlace}${OUTPUT_MESSAGE.UNIT}`);
  }

  printProfitRate(profitRate) {
    Console.print(
      `${OUTPUT_MESSAGE.PROFIT.START_SENTENCE} ${profitRate.toFixed(
        LOTTO_RULE.PROFIT_RATE_TO_FIXED,
      )}${OUTPUT_MESSAGE.PROFIT.END_SENTENCE}`,
    );
  }
}

module.exports = OutputConsole;
