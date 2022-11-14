const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class View {
  static inputMoney(cb) {
    Console.readLine("구입금액을 입력해 주세요.\n", cb);
  }

  static printBuyingLottos(buyingLottos) {
    const lottosAmount = buyingLottos.length;
    Console.print(`\n${lottosAmount}개를 구매했습니다.`);
    buyingLottos.forEach((buyingLotto) => {
      Console.print(Utils.transformArrayToString(buyingLotto));
    });
  }

  static inputWinningNumbers(cb) {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", cb);
  }

  static inputBonusNumber(cb) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", cb);
  }

  static makeStatisticResultMessages(rankCounter) {
    const RANK_MESSAGE_MAP = {
      1: "6개 일치 (2,000,000,000원)",
      2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      3: "5개 일치 (1,500,000원)",
      4: "4개 일치 (50,000원)",
      5: "3개 일치 (5,000원)",
    };

    return Object.keys(RANK_MESSAGE_MAP)
      .sort((rankA, rankB) => parseInt(rankA, 10) - parseInt(rankB, 10))
      .map((rank) => {
        return `${RANK_MESSAGE_MAP[rank]} - ${rankCounter[rank] || 0}개`;
      });
  }

  static printStatistics(rankCounter, profit) {
    const resultMessages = View.makeStatisticResultMessages(rankCounter);
    Console.print("\n당첨 통계\n---");
    resultMessages.forEach((message) => {
      Console.print(message);
    });
    Console.print(`총 수익률은 ${Utils.formatProfit(profit)}%입니다.`);
  }

  static close() {
    Console.close();
  }
}

module.exports = View;
