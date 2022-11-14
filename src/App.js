import Lotto from "./Lotto.js";
import MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.issuedLottos = [];
    this.lotto = null;
  }

  play() {
    this.buy();
    // this.getWinningNumber();
    // this.getBonusNumber();
  }
  buy() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.validatePurchase(input);

      const purchasedNumber = Number(input) / 1000;
      MissionUtils.Console.print(`\n${purchasedNumber}개를 구매했습니다.`);
      for (let i = 0; i < purchasedNumber; i++) {
        const issuedLotto = this.issueLotto();
        MissionUtils.Console.print(`[${issuedLotto}]`);
        this.issuedLottos.push(issuedLotto);
      }
      this.getWinningNumber();
    });
  }
  validatePurchase(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 구매 금액을 숫자로 입력해주세요.");
    }
    input = Number(input);
    if (input % 1000 !== 0 || !Number.isInteger(input)) {
      throw new Error("[ERROR] 구매 금액을 1000원 단위로 입력해주세요.");
    }
    if (input <= 0) {
      throw new Error("[ERROR] 유효한 구매 금액을 입력해주세요.");
    }
    MissionUtils.Console.close();
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
  getWinningNumber() {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      this.lotto = new Lotto(input.split(","));
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (input) => {
        this.lotto.bonusNumber = Number(input);
        this.checkWin(this.lotto, this.issuedLottos);
      }
    );
  }
  checkWin(lotto, issuedLottos) {
    let result = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0 };
    issuedLottos.forEach((issuedLotto) => {
      const winCount = issuedLotto.filter((number) =>
        lotto.numbers.includes(number)
      ).length;
      switch (winCount) {
        case 3:
          result["5등"] += 1;
          break;
        case 4:
          result["4등"] += 1;
          break;
        case 5:
          this.checkSecond(issuedLotto, lotto, bonusNumber)
            ? (result["2등"] += 1)
            : (result["3등"] += 1);
          break;
        case 6:
          result["1등"] += 1;
          break;
      }
    });
    return result;
  }
  checkSecond(issuedLotto, lotto, bonusNumber) {
    const NumbersExceptMatch = issuedLotto.filter(
      (number) => !lotto.numbers.includes(number)
    );
    if (NumbersExceptMatch.includes(bonusNumber)) return true;
    return false;
  }
}

const app = new App();
app.play();

export default App;
