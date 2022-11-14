const Lotto = require("./Lotto.js");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.issuedLottos = [];
    this.lotto = null;
  }

  play() {
    this.buy();
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
    this.calculateReturnRate(issuedLottos.length, result);
  }
  checkSecond(issuedLotto, lotto, bonusNumber) {
    const NumbersExceptMatch = issuedLotto.filter(
      (number) => !lotto.numbers.includes(number)
    );
    if (NumbersExceptMatch.includes(bonusNumber)) return true;
    return false;
  }
  calculateReturnRate(purchasedNumber, result) {
    const returnRate =
      (result["5등"] * 5e3 +
        result["4등"] * 5e4 +
        result["3등"] * 15e5 +
        result["2등"] * 3e7 +
        result["1등"] * 2e9) /
      (purchasedNumber * 1000);
    let roundedReturnRate = +(Math.round(returnRate + "e+2") + "e-2");
    this.printResult(result, roundedReturnRate);
  }
  printResult(result, returnRate) {
    MissionUtils.Console.print(`당첨 통계
---
3개 일치 (5000원) - ${result["5등"]}개
3개 일치 (50,000원) - ${result["4등"]}개
5개 일치 (1,500,000원) - ${result["3등"]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["2등"]}개
6개 일치 (2,000,000,000원) - ${result["1등"]}개
총 수익률은 ${returnRate}%입니다.
`);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
