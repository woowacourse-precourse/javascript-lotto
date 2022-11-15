const { Console } = require("@woowacourse/mission-utils");
const { RESULT } = require("./data/Constants");
class Render {
  showHowmanyboughtLotto(lotto) {
    Console.print(`${lotto}개를 구매했습니다.`);
  }

  showLottoMade(madeLotto) {
    let i = 0;

    for (; i < madeLotto.length; i++) {
      Console.print(`[${madeLotto[i].join(", ")}]`);
    }
  }
  lineBreak() {
    Console.print(``);
  }

  showResultOfWinLotto(result) {
    Console.print(`당첨 통계`);
    Console.print(`---`);

    let i = 0;

    for (; i < 5; i++) {
      switch (
        result[i][0] //
      ) {
        case "5등":
          Console.print(`${RESULT.RESULT_LOTTO_5CLASS}${result[i][1]}개`);
          break;

        case "4등":
          Console.print(`${RESULT.RESULT_LOTTO_4CLASS}${result[i][1]}개`);
          break;

        case "3등":
          Console.print(`${RESULT.RESULT_LOTTO_3CLASS}${result[i][1]}개`);
          break;

        case "2등":
          Console.print(`${RESULT.RESULT_LOTTO_2CLASS}${result[i][1]}개`);
          break;

        case "1등":
          Console.print(`${RESULT.RESULT_LOTTO_1CLASS}${result[i][1]}개`);
          break;
      }
    }
  }

  showLottoRateOfReturn(winningAmount, userInputMoney) {
    let rateOfReturn = (winningAmount / userInputMoney) * 100;

    Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}
const render = new Render();

module.exports = render;
