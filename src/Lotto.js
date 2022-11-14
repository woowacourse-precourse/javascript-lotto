const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber, candidateNumbers, purchaseAmount) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
    this.candidateNumbers = candidateNumbers;
    this.purchaseAmount = purchaseAmount;
  }

  validate(numbers) {
    const deduplicationNumbers = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (deduplicationNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    this.validateWinningNumbersRange(numbers);
  }

  validateWinningNumbersRange(numbers) {
    console.log(numbers);
    numbers.forEach((element) => {
      if (1 > element || element > 45) {
        throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.");
      }
      if (isNaN(element)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    });
  }

  setBonusNumber(numbers, bonusNumber) {
    this.validateBonus(numbers, bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validateBonus(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 로또번호에 포함된 번호입니다.");
    }

    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자입니다.");
    }

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    this.computeLottoResult(numbers, bonusNumber, this.candidateNumbers);
  }

  async computeLottoResult(numbers, bonusNumber, candidateNumbers) {
    let computeResults = [];
    const promises = candidateNumbers.map((candidateNumber) => {
      const countWinningNumber = candidateNumber.filter((x) =>
        numbers.includes(x)
      ).length;
      const countBonusNumber = candidateNumber.includes(bonusNumber) ? 1 : 0;
      computeResults.push([countWinningNumber, countBonusNumber]);
    });
    await Promise.all(promises);
    this.matchLottoResult(computeResults);
  }

  async matchLottoResult(results) {
    let winningRanks = [0, 0, 0, 0, 0];
    const promises = results.map((result) => {
      const matchWinningNumber = result[0];
      const matchBonusNumber = result[1];
      if (matchWinningNumber === 3) {
        winningRanks[0] += 1;
      }
      if (matchWinningNumber === 4) {
        winningRanks[1] += 1;
      }
      if (matchWinningNumber === 5 && matchBonusNumber === 0) {
        winningRanks[2] += 1;
      }
      if (matchWinningNumber === 5 && matchBonusNumber === 1) {
        winningRanks[3] += 1;
      }
      if (matchWinningNumber === 6) {
        winningRanks[4] += 1;
      }
    });
    await Promise.all(promises);
    console.log(winningRanks);
    this.printLottoResult(winningRanks);
  }

  printLottoResult(results) {
    MissionUtils.Console.print(`당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results[4]}개`);
    this.calculateProfit(results, this.purchaseAmount);
  }

  calculateProfit(results, purchaseAmount) {
    const prizeMoneys = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalprizeMoney = results.reduce((money, cur, curIdx) => {
      return money + cur * prizeMoneys[curIdx];
    }, 0);
    console.log(totalprizeMoney);
    const profit = ((totalprizeMoney / purchaseAmount) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = Lotto;
