import Lotto from "./Lotto.js";
import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    this.buy();
  }
  buy() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. ", (input) => {
      this.validatePurchase(input);
      const lotto = this.issueLotto();
      console.log(lotto);
    });
  }
  validatePurchase(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 구매 금액을 숫자로 입력해주세요.");
      MissionUtils.Console.close();
    }
    if (Number(input) % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액을 1000원 단위로 입력해주세요.");
      MissionUtils.Console.close();
    }
  }
  issueLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

const app = new App();
app.play();

export default App;
