const { Console } = require("@woowacourse/mission-utils");
const {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
} = require("./utils/validator");

const Lotto = require("./Lotto");
class App {
  constructor() {
    this.purchaseAmount = 0; // 구입 금액
    this.purchasesCount = 0; // 구매한 로또 개수
    this.winningNumbers = []; // 당첨 번호
    this.bonusNumber = 0; // 보너스 번호
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    Console.readLine("구입 금액을 입력해주세요.", (money) => {
      if (validatePurchaseAmount(money)) {
        // 구입 금액 유효성 검증을 통과한다면, 구입 금액 저장 후 출력
        this.purchaseAmount = +money;
        this.purchasesCount = +money / 1000;
        Console.print(this.purchaseAmount);
      }
      Console.close();
    });
  }

  setWinningNumbers() {
    Console.readLine("당첨 번호를 입력해주세요.", (numbers) => {
      this.winningNumbers = [...validateWiningNumber(numbers)];
      Console.close();
    });
  }

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해주세요.", (number) => {
      this.bonusNumber = validateBonusNumber(number);
      Console.close();
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
