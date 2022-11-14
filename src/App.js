const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  play() {
    this.inputOfLottoPurchaseAmount();
    this.printPurchaseCountMessage();
  }

  inputOfLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.",(amountInput) => {
      amountInput = parseInt(amountInput);
      this.validationInputLottoPurchaseAmount(amountInput);
    });
  }

  validationInputLottoPurchaseAmount(amountInput) {
    const VALIDATE_AMOUNT_1000 = amountInput % 1000
    if (amountInput < 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 음수가 될 수 없습니다.`);
    }

    if (amountInput < 1000) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원보다 작을 수 없습니다.`);
    }

    if (isNaN(amountInput)) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 숫자 이외의 값이 될 수 없습니다.`)
    }

    if (VALIDATE_AMOUNT_1000 != 0) {
      throw new Error(`[ERROR] 입력한 금액 ${amountInput}원은 1,000원 단위로 나누어 떨어지지 않습니다.`)
    }
  }

  printPurchaseCountMessage(VALIDATE_AMOUNT_1000) {
    Console.print(`${VALIDATE_AMOUNT_1000}개를 구매했습니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
