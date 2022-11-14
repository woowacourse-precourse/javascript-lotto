const MissionUtils = require("@woowacourse/mission-utils");

class LottoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  lottoCourse() {
    this.getPayInput();
    this.winningNumber();
    this.bonusNumber();
    this.successStatistic();
  }

  getPayInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      MissionUtils.Console.print(this.model.inputValidCheck(input));
      this.view.amountBuyLotto(input);
      this.view.createLottoNumber(input);
    });
  }

  winningNumber() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
        this.view.numberPrint(input);
    });
  }

  bonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.view.bonusNumberPrint(input);
    });
  }

  successStatistic() {
    this.view.successStartContext();
    this.view.successContext();
  }
}

module.exports = LottoController;
