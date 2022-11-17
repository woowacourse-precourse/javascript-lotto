const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");

class App {
  validatePurchaseAmout(purchaseAmountText) {
    const purchaseAmount = Number(purchaseAmountText);

    if (Number.isInteger(purchaseAmount) && purchaseAmount % 1000 === 0) {
      return purchaseAmount;
    }
    throw new Error("[ERROR] 로또 구입 금액은 1000의 배수여야 합니다.");
  }

  validateWinningNumbers(winningNumbersText) {
    return winningNumbersText.split(",").map((numberText) => {
      const number = Number(numberText);

      if (Number.isInteger(number)) {
        return number;
      } else {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });
  }

  validateBonusNumber(bonusNumberText) {
    const bonusNumber = Number(bonusNumberText);

    if (Number.isInteger(bonusNumber)) {
      return bonusNumber;
    }
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  }

  readText(label) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(label, (text) => {
        resolve(text);
      });
    });
  }

  generatePickedNumberSets(count) {
    return [...Array(count).keys()].map(() =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      )
    );
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async play() {
    const purchaseAmountText = await this.readText(
      "구입금액을 입력해 주세요.\n"
    );
    const purchaseAmount = this.validatePurchaseAmout(purchaseAmountText);

    const pickedNumberSets = this.generatePickedNumberSets(
      purchaseAmount / 1000
    );

    console.log(`${pickedNumberSets.length}개를 구매했습니다`);
    pickedNumberSets.forEach((pickedNumbers) => {
      console.log(`[${pickedNumbers.join(", ")}]`);
    });

    const winningNumbersText = await this.readText(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = this.validateWinningNumbers(winningNumbersText);

    const bonusNumberText = await this.readText(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = this.validateBonusNumber(bonusNumberText);

    const lotto = new Lotto(winningNumbers);

    const result = pickedNumberSets.map((pickedNumbers) =>
      lotto.calculate(pickedNumbers, bonusNumber)
    );
    const awards = [0, 2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000];
    const requiredTexts = [
      "",
      "6개 일치",
      "5개 일치, 보너스 볼 일치",
      "5개 일치",
      "4개 일치",
      "3개 일치",
    ];

    const sum = [...Array(5).keys()]
      .map((i) => i + 1)
      .reverse()
      .reduce((sum, rank) => {
        const matchCount = result.filter((it) => it === rank).length;

        console.log(
          `${requiredTexts[rank]} ${this.numberWithCommas(
            awards[rank]
          )} - ${matchCount}개`
        );

        return sum + matchCount * awards[rank];
      }, 0);

    const profit = ((sum / purchaseAmount) * 100).toFixed(1);
    console.log(`총 수익률은 ${profit}%입니다.`);

    MissionUtils.Console.close();
  }
}

module.exports = App;
