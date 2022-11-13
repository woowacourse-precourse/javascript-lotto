const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./constraints");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.purchaseAmount;
  }

  play() {
    this.setInputMoney();
  }

  setInputMoney() {
    Console.readLine("구입 금액을 입력해주세요.", (money) => {
      // 구입 금액이 숫자인지 검사
      if (isNaN(+money)) throw new Error(MESSAGES.BUYING.TYPE_EXCEPTION);

      // 구입 금액이 1,000원 단위인지 검사
      if (+money % 1000 !== 0) throw new Error(MESSAGES.BUYING.UNIT_EXCEPTION);

      // 모두 충족한다면 구입 금액 저장 후 출력
      this.purchaseAmount = +money;
      Console.print(this.purchaseAmount);
      Console.close();
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
