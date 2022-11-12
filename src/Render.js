const { Console, Random } = require("@woowacourse/mission-utils");
class Render {
  showHowmanybought(lotto) {
    Console.print(`${lotto}개를 구매했습니다.`);
  }

  showMadeLotto(madeLotto) {
    let i = 0;
    for (; i < madeLotto.length; i++) {
      Console.print(String(madeLotto[i]));
    }
  }
  lineBreak() {
    Console.print(``);
  }

  showResult(result) {
    this.lineBreak();

    Console.print(`당첨 통계`);
    Console.print(`---`);

    for (let i = 0; i < 5; i++) {
      switch (
        result[i][0] //
      ) {
        case "5등":
          Console.print(`3개 일치 (5,000원) - ${result[i][1]}개`);
          break;
        case "4등":
          Console.print(`4개 일치 (50,000원) - ${result[i][1]}개`);
          break;
        case "3등":
          Console.print(`5개 일치 (1,500,000원) - ${result[i][1]}개`);
          break;
        case "2등":
          Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[i][1]}개`
          );
          break;
        case "1등":
          Console.print(`6개 일치 (2,000,000,000원) - ${result[i][1]}개`);
          break;
      }
    }
  }

  showRateOfReturn(winningAmount, userInputMoney) {
    let rateOfReturn = (winningAmount / userInputMoney) * 100;
    Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}
module.exports = Render;
