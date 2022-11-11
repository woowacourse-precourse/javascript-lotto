const { Console } = require('@woowacourse/mission-utils');

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

  static printWinningLotto() {
    Console.print('');
    Console.print('당첨 번호를 입력해 주세요.');
  }

  static printBonusNumber() {
    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
  }

  static printStatistic(statistic) {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${statistic.stat.FIFTH}개`);
    Console.print(`4개 일치 (50,000원) - ${statistic.stat.FOURTH}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistic.stat.THIRD}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic.stat.SECOND}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${statistic.stat.FIRST}개`);
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
