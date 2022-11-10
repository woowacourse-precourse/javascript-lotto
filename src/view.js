const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./utils/validation');
class View {
  constructor(controller) {
    this.controller = controller;
  }

  getAmountInput() {
    Console.readLine('구입금액을 입력해 주세요', (answer) => {
      Validation.amountInputValidate(answer);
      this.controller.generateLotto(answer);
    });
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.getNumber()));
  }

  winningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      Validation.winningNumberValidate(answer);
      this.controller.enterWinningNumber(answer.split(','));
    });
  }

  bonusNumberInput() {
    Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.controller.enterBonusNumber(answer);
    });
  }
}

module.exports = View;
