const { Console } = require('@woowacourse/mission-utils');
const { RULE, STATISTIC_PRINT } = require('../constants');

class View {
  static printStart() {
    Console.print('구입금액을 입력해 주세요.');
  }

  static printQuantity(quantity) {
    Console.print('');
    Console.print(`${quantity}개를 구매했습니다.`);
  }

  static printArray(array) {
    Console.print(`[${array.join(', ')}]`);
  }

  static printWinningLottoNotice() {
    Console.print('');
    Console.print('당첨 번호를 입력해 주세요.');
  }

  static printBonusNumberNotice() {
    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
  }

  static printStatistic(counts) {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`${STATISTIC_PRINT.FIFTH} - ${counts[RULE.FIFTH.TYPE]}개`);
    Console.print(`${STATISTIC_PRINT.FOURTH} - ${counts[RULE.FOURTH.TYPE]}개`);
    Console.print(`${STATISTIC_PRINT.THIRD} - ${counts[RULE.THIRD.TYPE]}개`);
    Console.print(`${STATISTIC_PRINT.SECOND} - ${counts[RULE.SECOND.TYPE]}개`);
    Console.print(`${STATISTIC_PRINT.FIRST} - ${counts[RULE.FIRST.TYPE]}개`);
  }

  static printPercentageRevenue(percentageRevenue) {
    Console.print(`총 수익률은 ${percentageRevenue}%입니다.`);
  }

  static readLine(callback) {
    Console.readLine('', callback);
  }

  static close() {
    Console.close();
  }
}

module.exports = View;
