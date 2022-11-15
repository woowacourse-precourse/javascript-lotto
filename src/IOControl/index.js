const { Console } = require('@woowacourse/mission-utils');
const { PRIZE, PRIZE_MONEY } = require('../Constants/number');
const { PRIZE_MESSAGE } = require('../Constants/message');

class IO {
  /**
   * @param {Number} lottoCnt
   * @desc 로또를 구매한 개수를 출력
   */
  static printLottoBuy(lottoCnt) {
    Console.print(PRIZE_MESSAGE.BUY(lottoCnt));
  }

  /**
   * @param {Number Array} lotto
   * @desc 로또 번호를 출력
   */
  static printLotto(lotto) {
    const lottoNumbers = lotto.join(', ');
    Console.print(`[${lottoNumbers}]`);
  }

  /**
   * @desc 로또 통계 출력
   */
  static printState() {
    Console.print(PRIZE_MESSAGE.STATS);
  }

  /**
   * @param {Number} prize
   * @param {Number} prizeCnt
   * @desc 당첨 통계를 출력
   */
  static printPrize(prize, prizeCnt) {
    if (Number(prize) !== PRIZE.SECOND)
      Console.print(
        PRIZE_MESSAGE.PRIZE(prize, PRIZE_MONEY[prize].str, prizeCnt)
      );

    if (Number(prize) === PRIZE.SECOND)
      Console.print(
        PRIZE_MESSAGE.PRIZE_BONUS(PRIZE_MONEY[prize].str, prizeCnt)
      );
  }

  /**
   * @param {Number} profitRate
   * @desc 수익률을 출력
   */
  static printProfit(profitRate) {
    Console.print(PRIZE_MESSAGE.PROFIT(profitRate));
  }

  static close() {
    Console.close();
  }
}

module.exports = IO;
