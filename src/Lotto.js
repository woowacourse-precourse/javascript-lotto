const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    // console.log("validate", numbers);
    const deduplicationNumbers = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (deduplicationNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateWinningNumbersRange(numbers) {
    // console.log("validateWinningNumbersRange", numbers);
    numbers.forEach((element) => {
      if (1 > element || element > 45) {
        throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.");
      }
      if (isNaN(element)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });
  }

  validateBonus(bonusNumber, candidateNumber, purchaseAmount) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 로또번호에 포함된 번호입니다.");
    }

    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자입니다.");
    }

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    this.computeLottoResult(bonusNumber, candidateNumber, purchaseAmount);
  }

  computeLottoResult(bonusNumber, candidateNumbers, purchaseAmount) {
    let computeResults = [];
    candidateNumbers.map((candidateNumber) => {
      const countWinningNumber = candidateNumber.filter((x) =>
        this.#numbers.includes(x)
      ).length;
      const countBonusNumber = candidateNumber.includes(bonusNumber) ? 1 : 0;
      computeResults.push([countWinningNumber, countBonusNumber]);
    });
    this.matchLottoResult(computeResults, purchaseAmount);
  }

  matchLottoResult(results, purchaseAmount) {
    let winningRanks = [0, 0, 0, 0, 0];
    for (let result of results) {
      winningRanks = this.calculateWinningRanks(winningRanks, result);
    }
    // console.log("winningRanks Lotto", winningRanks);
    this.printLottoResult(winningRanks, purchaseAmount);
  }

  calculateWinningRanks(winningRanks, result) {
    const [matchWinningNumber, matchBonusNumber] = result;
    if (matchWinningNumber === 3) {
      winningRanks[0] += 1;
    } else if (matchWinningNumber === 4) {
      winningRanks[1] += 1;
    } else if (matchWinningNumber === 5 && matchBonusNumber === 0) {
      winningRanks[2] += 1;
    } else if (matchWinningNumber === 5 && matchBonusNumber === 1) {
      winningRanks[3] += 1;
    } else if (matchWinningNumber === 6) {
      winningRanks[4] += 1;
    }
    return winningRanks;
  }

  printLottoResult(winningRanks, purchaseAmount) {
    // console.log("printLottoResult", winningRanks);
    MissionUtils.Console.print(`당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningRanks[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningRanks[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningRanks[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRanks[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${winningRanks[4]}개`
    );
    this.calculateProfit(winningRanks, purchaseAmount);
  }

  calculateProfit(results, purchaseAmount) {
    const prizeMoneys = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalprizeMoney = results.reduce(
      (money, currentValue, currentIndex) => {
        return money + currentValue * prizeMoneys[currentIndex];
      },
      0
    );
    // console.log(totalprizeMoney);
    const profit = ((totalprizeMoney / purchaseAmount) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
