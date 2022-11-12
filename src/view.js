const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./utils/constant');

class View {
  constructor(controller) {
    this.controller = controller;
  }

  static endgame() {
    Console.close();
  }

  getAmountInput() {
    Console.readLine(OUTPUT_MESSAGE.ENTER_AMOUNT, (answer) => {
      this.controller.generateLotto(answer);
    });
  }

  static printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => Console.print(`[${String(lotto.getNumber()).replace(/,/g, ', ')}]`));
  }

  winningNumber() {
    Console.readLine(OUTPUT_MESSAGE.ENTER_WINNING_NUMBER, (answer) => {
      this.controller.enterWinningNumber(answer.split(','));
    });
  }

  bonusNumberInput() {
    Console.readLine(OUTPUT_MESSAGE.ENTER_BONUS_NUMBER, (answer) => {
      this.controller.enterBonusNumber(answer);
    });
  }

  static printWinningResult(result, earningRate) {
    const [fifthRanking, forthRanking, thirdRanking, secondRanking, firstRanking] = result;

    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);

    Console.print(
      `3개 일치 (5,000원) - ${fifthRanking}개\n4개 일치 (50,000원) - ${forthRanking}개\n5개 일치 (1,500,000원) - ${thirdRanking}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondRanking}개\n6개 일치 (2,000,000,000원) - ${firstRanking}개`,
    );

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

module.exports = View;
