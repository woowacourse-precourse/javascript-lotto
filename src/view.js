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
}

module.exports = View;
