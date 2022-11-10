const { Console } = require('@woowacourse/mission-utils');
class View {
  constructor(controller) {
    this.controller = controller;
  }

  getAmountInput() {
    Console.readLine('구입금액을 입력해 주세요', (answer) => {
      this.controller.generateLotto(answer);
    });
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    Console.print(lottos.map((lotto) => lotto.getNumber()));
  }

  winningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.controller.setWinningNumber(answer);
    });
  }
}

module.exports = View;
