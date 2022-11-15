const { Console } = require("@woowacourse/mission-utils");
const { NOTICE_MESSAGE } = require("./Constants");

const makeStatsBoard = (data, performance) => {
  return `당첨 통계
  ---
  3개 일치 (5,000원) - ${data.three}개
  4개 일치 (50,000원) - ${data.four}개
  5개 일치 (1,500,000원) - ${data.five}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${data.fivePlusBonus}개
  6개 일치 (2,000,000,000원) - ${data.six}개
  총 수익률은 ${performance}%입니다.
    `;
};

class Print {
  static purchasedLottoAmount(purchased) {
    Console.print(purchased.amount + NOTICE_MESSAGE.PURCHASE_AMOUNT);
  }

  static purchasedLottoList(purchased) {
    purchased.lottoArray.forEach((lotto) => {
      const lottoNumbers = lotto.showNumbers().join(", ");
      Console.print(`[${lottoNumbers}]`);
    });
  }

  static purchasedLottoStatus(purchased) {
    Print.purchasedLottoAmount(purchased);
    Print.purchasedLottoList(purchased);
  }

  static totalStats(totalStats) {
    const { data, performance } = totalStats;
    const statsBoard = makeStatsBoard(data, performance);
    Console.print(statsBoard);
  }
}

module.exports = Print;
