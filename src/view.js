const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./utils/validation');
class View {
  constructor(controller) {
    this.controller = controller;
  }

  getAmountInput() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      Validation.amountInputValidate(answer);
      this.controller.generateLotto(answer);
    });
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.getNumber()));
  }

  winningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      Validation.winningNumberValidate(answer);
      this.controller.enterWinningNumber(answer.split(','));
    });
  }

  bonusNumberInput() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      Validation.bonusNumberValidate(answer);
      this.controller.enterBonusNumber(answer);
    });
  }

  printWinningResult(result) {
    const [fifthRanking, forthRanking, thirdRanking, secondRanking, firstRanking] = result;
    let grossEarnings = 0;
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (5000원) - ${fifthRanking}개\n4개 일치 (50,000원) - ${forthRanking}개\n5개 일치 (1,500,000원) - ${thirdRanking}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondRanking}개\n6개 일치 (2,000,000,000원) - ${firstRanking}개`,
    );
    result.forEach((result, index) => {
      grossEarnings += result * prizeMoney[index];
    });
    Console.print(
      `총 수익률은 ${((grossEarnings / this.controller.totalAmount) * 100).toFixed(1)}%입니다.`,
    );
  }
}

module.exports = View;
