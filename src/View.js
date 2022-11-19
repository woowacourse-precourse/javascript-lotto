const { Console } = require("@woowacourse/mission-utils");

class View {
  constructor(lottoMachine) {
    this.lottoMachine = lottoMachine;
  }

  showUserLotto(lottoQuantity) {
    const numbers = [];
    Console.print("\n" + lottoQuantity + "개를 구매했습니다.");
    for (let i = 0; i < lottoQuantity; i++) {
      numbers.push(this.lottoMachine.getRandomNum());
    }
    numbers.forEach((number) => Console.print(`[${number.join(", ")}]`));
    return numbers;
  }

  showWinResult(equalScores) {
    Console.print("\n당첨 통계\n---");
    Console.print("3개 일치 (5,000원) - " + equalScores[4] + "개");
    Console.print("4개 일치 (50,000원) - " + equalScores[3] + "개");
    Console.print("5개 일치 (1,500,000원) - " + equalScores[2] + "개");
    Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " + equalScores[1] + "개"
    );
    Console.print("6개 일치 (2,000,000,000원) - " + equalScores[0] + "개");
  }

  showProfit(lottoYield) {
    Console.print(`총 수익률은 ${lottoYield.toFixed(1)}%입니다.`);
  }
}

module.exports = View;
