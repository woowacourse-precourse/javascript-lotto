const MissionUtils = require("@woowacourse/mission-utils");
const {
  checkPurchaseAmount,
  checkLottoNumbers,
  checkBonusNumber,
} = require("./Validation");
const { WINNINGS } = require("./Constants");
const RANKING = [
  WINNINGS.FIFTH_WIN,
  WINNINGS.FOURTH_WIN,
  WINNINGS.THIRD_WIN,
  WINNINGS.SECOND_WIN,
  WINNINGS.FIRST_WIN,
];

class LottoView {
  #winningNumbers;

  inputPurchaseAmount(resolve) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      checkPurchaseAmount(answer);
      resolve(answer);
    });
  }

  inputWinningNumbers(resolve) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      this.#winningNumbers = answer.split(",");
      checkLottoNumbers(this.#winningNumbers);
      resolve(this.#winningNumbers);
    });
  }

  inputBonusNumber(resolve) {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (answer) => {
        checkBonusNumber(this.#winningNumbers, answer);
        resolve(answer);
        MissionUtils.Console.close();
      }
    );
  }

  getPurchaseAmount() {
    return new Promise((resolve) => {
      this.inputPurchaseAmount(resolve);
    });
  }

  getWinningNumbers() {
    return new Promise((resolve) => {
      this.inputWinningNumbers(resolve);
    });
  }

  getBonusNumber() {
    return new Promise((resolve) => {
      this.inputBonusNumber(resolve);
    });
  }

  printLottos(amount, lottos) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    for (const lotto of lottos) {
      let lottoNumbers = lotto.getLottoNumbers().sort((a, b) => a - b);
      MissionUtils.Console.print(lottoNumbers);
    }
  }

  makeWinningMessage(numberCount, bonus, amount, winningCount) {
    amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${numberCount}개 일치${
      bonus ? ", 보너스 볼 일치" : ""
    } (${amount}원) - ${winningCount}개`;
  }

  printWinnings(winningRank) {
    for (const rank of RANKING) {
      let bonus = false;
      if (rank.RANK === 2) bonus = true;
      const numberCount = rank.COUNT;
      const winningCount = winningRank[rank.RANK - 1];
      const amount = rank.AMOUNT;
      MissionUtils.Console.print(
        this.makeWinningMessage(numberCount, bonus, amount, winningCount)
      );
    }
  }

  printTotalYield(totalYield) {
    MissionUtils.Console.print(`총 수익률은 ${totalYield}%입니다.`);
  }
}

module.exports = LottoView;
