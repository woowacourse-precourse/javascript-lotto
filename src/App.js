const { Console } = require("@woowacourse/mission-utils");
const {
  validatePurchaseAmount,
  validateWiningNumber,
} = require("./utils/validator");

const Lotto = require("./Lotto");
class App {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
  }

  play() {
    this.setWinningNumbers();
  }

  setPurchaseAmount() {
    Console.readLine("구입 금액을 입력해주세요.", (money) => {
      if (validatePurchaseAmount(money)) {
        // 구입 금액 유효성 검증을 통과한다면, 구입 금액 저장 후 출력
        this.purchaseAmount = +money;
        Console.print(this.purchaseAmount);
      }
      Console.close();
    });
  }

  setWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      this.winningNumbers = [...validateWiningNumber(numbers)];
      Console.close();
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
