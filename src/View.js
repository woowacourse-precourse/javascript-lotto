const { Console } = require('@woowacourse/mission-utils');
const { MATCHING_MESSAGE, WINNING_MONEY } = require('./utils/constants');
class View {
  printBoughtLotto(amount, lottoBundle) {
    Console.print(amount + '개를 구매했습니다.');
    for (const lotto of lottoBundle) {
      Console.print('[' + lotto.join(', ') + ']');
    }
  }

  printResult(result, rate) {
    Console.print('당첨 통계');
    Console.print('---');
    result.map((count, idx) => {
      const matchingMessage = MATCHING_MESSAGE[idx];
      const winningMoney = WINNING_MONEY[idx].toLocaleString();
      Console.print(`${matchingMessage} (${winningMoney}원) - ` + count + '개');
    });
    Console.print(`총 수익률은 ${rate}%입니다.`);
    Console.close();
  }
}
module.exports = View;
