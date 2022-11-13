import Lotto from "./Lotto.js";
import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    this.buy();
  }
  buy() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.validatePurchase(input);

      const purchasedNumber = Number(input) / 1000;
      MissionUtils.Console.print(`\n${purchasedNumber}개를 구매했습니다.`);
      let issuedLottos = [];
      for (let i = 0; i < purchasedNumber; i++) {
        const issuedLotto = this.issueLotto();
        MissionUtils.Console.print(`[${issuedLotto}]`);
        issuedLottos.push(issuedLotto);
      }
      return issuedLottos;
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
    return this.ascendingSort(lottoNumbers);
  }
  ascendingSort(array) {
    return array.sort(function (element1, element2) {
      return element1 - element2;
    });
  }
}

const app = new App();
app.play();

export default App;
