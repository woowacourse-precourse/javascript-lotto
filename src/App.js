const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const { validate, makeIntArray } = require('./Lotto.js');
const { isValidPayAmount, isNumber, isNotDuplicated } = require('./Validator');
const Console = MissionUtils.Console;

class App {
  purchaseAmount = 0;
  winNumberArr = [];

  inputPaymentHandler() {
    Console.readLine('구입 금액을 입력해주세요 \n', input => {
      validate(input, isNumber(input), this.addPurchaseAmount(input));
      this.inputWinningNumberHandler();
    });
  }

  addPurchaseAmount(input) {
    validate(
      input,
      isValidPayAmount(input),
      (this.purchaseAmount += parseInt(input / 1000)),
    );
    Console.print(`총 ${this.purchaseAmount}개를 구매했습니다.`);
  }

  inputWinningNumberHandler() {
    Console.readLine('당첨 번호를 입력해주세요\n', input => {
      const target = makeIntArray(input);
      validate(
        target,
        isNotDuplicated(target),
        target.map(item => isNumber(item)),
      );
      this.winNumberArr = target;
      this.inputBonusNumberHandler();
      Console.print(this.winNumberArr);
    });
  }


  play() {
    this.inputPaymentHandler();
  }
}

const app = new App();
app.play();

module.exports = App;
