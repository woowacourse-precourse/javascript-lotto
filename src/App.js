const Mission = require("@woowacourse/mission-utils");
const Validator = require("./Validator");
class App {
  play() {
    this.lottoPrice();
  }

  lottoPrice = () => {
    Mission.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      Validator.purchaseInput(input);
      Mission.Console.print(`${input / 1000}개를 구매했습니다.`);
    });
  };
}
module.exports = App;
