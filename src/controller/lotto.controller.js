const MissionUtils = require("@woowacourse/mission-utils");

class LottoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.getPayInput();
    this.winningNumber();
    this.bonusNumber();
  }

  getPayInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      MissionUtils.Console.print(this.model.inputValidCheck(input));
      this.view.amountBuyLotto(input);
    });
  }

  winningNumber() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
        console.log('당첨번호 =>', input)
    });
  }

  bonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (input) => {
        console.log('보너스번호 =>', input)
    });
  }
}

module.exports = LottoController;
