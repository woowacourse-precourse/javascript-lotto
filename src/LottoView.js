const { Console } = require("@woowacourse/mission-utils");
const { WINNINGS } = require("./Constants");
const {
  checkPurchaseAmount,
  checkLottoNumbers,
  checkBonusNumber,
} = require("./Validation");
const RANKING = [
  WINNINGS.FIFTH_WIN,
  WINNINGS.FOURTH_WIN,
  WINNINGS.THIRD_WIN,
  WINNINGS.SECOND_WIN,
  WINNINGS.FIRST_WIN,
];
const LottoModel = require("./LottoModel");
const lottoModel = new LottoModel();

class LottoView {
  #winningNumbers;
  #purchaseAmount;
  #lottoCount;

  startLotto() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.#purchaseAmount = answer;
      this.#lottoCount = answer / 1000;
      checkPurchaseAmount(this.#purchaseAmount);
      this.printLottos(this.#lottoCount);
      return this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (answer) => {
      this.#winningNumbers = answer.split(",");
      checkLottoNumbers(this.#winningNumbers);
      return this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (answer) => {
      checkBonusNumber(this.#winningNumbers, answer);
      Console.close();
      return this.getWinningRank(answer);
    });
  }

  getWinningRank(bonusNumber) {
    const winningRank = lottoModel.checkWinning(
      this.#winningNumbers.map(Number),
      Number(bonusNumber)
    );
    return this.printWinnings(winningRank);
  }

  printLottos(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
    const lottos = lottoModel.createLottos(this.#lottoCount);
    for (const lotto of lottos) {
      let lottoNumbers = lotto.getLottoNumbers().sort((a, b) => a - b);
      Console.print(`[${lottoNumbers.join(", ")}]`);
    }
  }

  makeWinningMessage(numberCount, bonus, amount, winningCount) {
    amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${numberCount}개 일치${
      bonus ? ", 보너스 볼 일치" : ""
    } (${amount}원) - ${winningCount}개`;
  }

  printWinnings(winningRank) {
    Console.print("\n당첨 통계");
    Console.print("---");
    for (const rank of RANKING) {
      let bonus = false;
      if (rank.RANK === 2) bonus = true;
      const numberCount = rank.COUNT;
      const winningCount = winningRank[rank.RANK - 1];
      const amount = rank.AMOUNT;
      Console.print(
        this.makeWinningMessage(numberCount, bonus, amount, winningCount)
      );
    }
    return this.getTotalYield();
  }

  getTotalYield() {
    const totalYield = lottoModel.calcYield(this.#purchaseAmount);
    return this.printTotalYield(totalYield);
  }

  printTotalYield(totalYield) {
    Console.print(`총 수익률은 ${totalYield}%입니다.`);
  }
}

module.exports = LottoView;
