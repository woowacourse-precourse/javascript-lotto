const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./constraints");
const { validatePurchaseAmount } = require("./utils/validator");

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
      if (validatePurchaseAmount(money)) {
        // 구입 금액 유효성 검증을 통과한다면, 구입 금액 저장 후 출력
        this.purchaseAmount = +money;
        Console.print(this.purchaseAmount);
      }
      Console.close();
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
