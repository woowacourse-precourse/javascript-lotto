const MissionUtils = require("@woowacourse/mission-utils");

const User = require("./User");

class Lotto {
  #numbers;

  constructor() {
    const user = new User();
    this.setWinningNumbers();

    const bonusNumber = this.setBonusNumber();

    let winningResults = this.compareLottos(user.lottos, bonusNumber);
    this.printWinningResult(winningResults, user.purchaseAmount);
  }

  validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  validateNumberBetweenOneToFiftyFive(numbers) {
    for (let num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  // TODO: 추가 기능 구현
  setWinningNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const numbers = answer.split(",").map((item) => Number(item));
      this.validateNumberCount(numbers);
      this.validateNumberBetweenOneToFiftyFive(numbers);
      this.#numbers = numbers;
    });
  }

  setBonusNumber() {
    let bonusNumber = 0;
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (answer) => {
        bonusNumber = Number(answer);
      }
    );

    return bonusNumber;
  }

  compareLottos(lottos, bonusNumber) {
    const winningResults = [];

    for (let lotto of lottos) {
      let winningNumbersObj = {
        winningNumbersCount: 0,
        winningBonusNumberCount: 0,
      };
      winningNumbersObj.winningNumbersCount = this.checkWinningNumber(lotto);
      if (lotto.includes(bonusNumber))
        winningNumbersObj.winningBonusNumberCount = 1;
      winningResults.push(winningNumbersObj);
    }

    return winningResults;
  }

  checkWinningNumber(lotto) {
    let count = 0;

    for (let number of this.#numbers) {
      if (lotto.includes(number)) count++;
    }

    return count;
  }

  printWinningResult(winningResults, purchaseAmount) {
    const [winThree, winFour, winFive, winFiveAndBonus, winSix] =
      this.gatherWinningResult(winningResults);
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winThree}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winFour}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winFive}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winFiveAndBonus}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winSix}개`);
    MissionUtils.Console.print(
      `총 수익률은 ${(
        ((winThree * 5000 +
          winFour * 50000 +
          winFive * 1500000 +
          winFiveAndBonus * 30000000 +
          winSix * 2000000000) /
          purchaseAmount) *
        100
      ).toFixed(1)}%입니다.`
    );
  }

  gatherWinningResult(winningResults) {
    let winThree = 0;
    let winFour = 0;
    let winFive = 0;
    let winFiveAndBonus = 0;
    let winSix = 0;
    for (let result of winningResults) {
      if (result.winningNumbersCount === 3) winThree++;
      if (result.winningNumbersCount === 4) winFour++;
      if (result.winningNumbersCount === 5) winFive++;
      if (
        result.winningNumbersCount === 5 &&
        result.winningBonusNumberCount === 1
      )
        winFiveAndBonus++;
      if (result.winningNumbersCount === 6) winSix++;
    }

    return [winThree, winFour, winFive, winFiveAndBonus, winSix];
  }
}

module.exports = Lotto;
