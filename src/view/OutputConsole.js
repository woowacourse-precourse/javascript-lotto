const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constant');

class OutputConsole {
  printUserLotto(lotto) {
    Console.print(OUTPUT_MESSAGE.PURCHASE(lotto));
    lotto.forEach((numbers) => {
      Console.print(OUTPUT_MESSAGE.NUMBERS(numbers));
    });
  }

  printLank([firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace]) {
    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print(OUTPUT_MESSAGE.FIFTH_PLACE(fifthPlace));
    Console.print(OUTPUT_MESSAGE.FOURTH_PLACE(fourthPlace));
    Console.print(OUTPUT_MESSAGE.THIRD_PLACE(thirdPlace));
    Console.print(OUTPUT_MESSAGE.SECOND_PLACE(secondPlace));
    Console.print(OUTPUT_MESSAGE.FIRST_PLACE(firstPlace));
  }

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGE.PROFIT(profitRate));
  }
}

module.exports = OutputConsole;
