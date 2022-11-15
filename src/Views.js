const { Console } = require("@woowacourse/mission-utils");
const { INPUT, RANKING } = require("./utils/Constants");
const Utils = require("./utils/Utils");

class Views {
  static printAskLottoPayment = () => {
    Console.print(INPUT.LOTTO_PAYMENT);
  };

  static printLottoCount = (lottoCount) => {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  };

  static printIssuendLotto = (issuedLotto) => {
    issuedLotto.forEach((value) => {
      Views.printLottoNumber(value);
    });
  };

  static printLottoNumber = (lottoNumber) => {
    Console.print(`[${lottoNumber.join(", ")}]`);
  };

  static printRankingResult = (rankingResult) => {
    Console.print("\n당첨 통계\n---");
    for (let rankName of RANKING.OUTPUT_ORDER) {
      const rank = rankingResult.find((rank) => rank.ranking == rankName);
      Console.print(Utils.getResultRanking(rank));
    }
  };

  static printEarningsRate = (earningsRate) => {
    Console.print(
      `총 수익률은 ${Utils.changeNumberWithCommas(earningsRate)}%입니다.`
    );
  };
}

module.exports = Views;
