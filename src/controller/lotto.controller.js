const MissionUtils = require("@woowacourse/mission-utils");

class LottoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.getPayInput();
  }

  getPayInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      MissionUtils.Console.print(this.model.inputValidCheck(input));
      this.view.amountBuyLotto(input);

    });
  }
}

module.exports = LottoController;
