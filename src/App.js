const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");

class App {
  play() {
    inputPurchaseAmount()

    const lotto = new Lotto();
  }
}

module.exports = App;

const app = new App();
app.play();

function inputPurchaseAmount() {
  console.log(1)
  MissionUtils.Console.readLine(
    "구입금액을 입력해 주세요.\n",
    (purchaseAmount) => {
      is1000Multiple(purchaseAmount);
    }
  );
}

function is1000Multiple(purchaseAmount) {
  console.log(2)
  if (purchaseAmount % 1000 !== 0) {
    throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.");
  }
  inputWinningNumbers();
}

function inputWinningNumbers() {
  console.log(3)
  MissionUtils.Console.readLine(
    "당첨 번호를 입력해 주세요.\n",
    (winningNumbers) => {
      return winningNumbers;
    }
  );
}
