const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_RESULT_MSG } = require('./Constants');

class Printer {
  purchaseLottoBundle(bundleOfLotto) {
    bundleOfLotto.forEach(lottoNums => Console.print(`[${lottoNums.join(', ')}]`));
  }

  purchaseCount(count) {
    Console.print(count);
  }

  purchaseLottoBundle(lottoBundle) {
    lottoBundle.forEach(lottoNums => Console.print(`[${lottoNums.join(', ')}]`));
  }

  lottoResult(resultMap) {
    const { fifthGrade, forthGrade, thirdGrade, secondGrade, firstGrade, profitRate } = resultMap;
    Console.print(LOTTO_RESULT_MSG.WINNING_STATISTICS);
    Console.print(LOTTO_RESULT_MSG.FIFTH_GRADE(fifthGrade));
    Console.print(LOTTO_RESULT_MSG.FORTH_GRADE(forthGrade));
    Console.print(LOTTO_RESULT_MSG.THIRTH_GRADE(thirdGrade));
    Console.print(LOTTO_RESULT_MSG.SECOND_GRADE(secondGrade));
    Console.print(LOTTO_RESULT_MSG.FIRST_GRADE(firstGrade));
    Console.print(LOTTO_RESULT_MSG.PROFIT_RATE(profitRate));
  }
}

module.exports = Printer;
