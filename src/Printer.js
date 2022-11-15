const { Console } = require("@woowacourse/mission-utils/");

class Printer {
  printMoney(payMoney) {
    Console.print(`\n${payMoney / 1000}개를 구매했습니다.`);
  }

  printLottosNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  printScore(rewards) {
    Console.print("\n당첨 통계\n---\n");
    rewards.forEach((reward) => {
      reward[0] != 5.5
        ? Console.print(
            `${reward[0]}개 일치 (${reward[1].toLocaleString()}원) - ${
              reward[2]
            }개`
          )
        : Console.print(
            `${Math.floor(
              reward[0]
            )}개 일치, 보너스 볼 일치 (${reward[1].toLocaleString()}원) - ${
              reward[2]
            }개`
          );
    });
  }

  printRevenue(revenue) {
    Console.print(`총 수익률은 ${revenue}%입니다.`);
    Console.print("```\n\n---");
  }
}
module.exports = Printer;
