const { Console } = require('@woowacourse/mission-utils');
const CONSTANT = require('../constant/constants.js');

class Log {
  getAmount(callback) {
    const { MSG } = CONSTANT;

    Console.readLine(`${MSG.PURCHASE}\n`, callback);
  }

  printLottos(amount, lottos) {
    const { PURCHASED } = CONSTANT.MSG;

    Console.print(`\n${PURCHASED(amount)}`);
    lottos.forEach(lotto => Console.print(`[${lotto.numbers.toString().split(',').join(', ')}]`));
  }

  getWinner(callback) {
    const { WINNER } = CONSTANT.MSG;

    Console.readLine(`\n${WINNER}\n`, callback);
  }

  getBonus(callback) {
    const { BONUS } = CONSTANT.MSG;

    Console.readLine(`\n${BONUS}\n`, answer => {
      callback(answer);
      Console.close();
    });
  }

  printWinner(lottos, sumPrize) {
    Console.print('\n당첨 통계\n---');
    const { PRIZE_DETAILS, MSG, CHECK } = CONSTANT;
    PRIZE_DETAILS.forEach(detail => {
      const { MATCH, ISBONUS, PRIZE } = detail;
      const getNumOfWinner = lottos.filter(lotto => CHECK.IS_WINNER(ISBONUS, MATCH, lotto)).length;

      Console.print(`${MSG.RESULT(MATCH, ISBONUS, PRIZE, getNumOfWinner)}`);
      sumPrize(getNumOfWinner, PRIZE);
    });
  }

  printEarningsRate(prize, amount) {
    const { MSG, RATE } = CONSTANT;
    const earningsRate = RATE(prize, amount);

    Console.print(`${MSG.TOTAL_RATE(earningsRate)}`);
  }
}

module.exports = Log;
