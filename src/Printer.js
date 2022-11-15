const { Console } = require("@woowacourse/mission-utils/");

class Printer {
  printscore(rewards) {
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
