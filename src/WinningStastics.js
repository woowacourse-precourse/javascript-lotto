const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_PHRASE } = require("./constant/Constant");

class WinningStastics {
  constructor(lottoNumbers, bonusNumber, purchaseAmount, lottoMachineOutput) {
    this.lottoNumbers = lottoNumbers;
    this.bonusNumber = bonusNumber;
    this.purchaseAmount = purchaseAmount;
    this.lottoMachineOutput = lottoMachineOutput;
    this.winningAmount;
    this.coincide = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveAndBonusMatches: 0,
      allMatches: 0,
    };
  }

  printWinningStastics() {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.LINE_UP + OUTPUT_PHRASE.WINNING_STATISTICS.INTRO
    );

    this.matchCounter();
    this.printMatchCount();
    this.printWinningAmount();

    MissionUtils.Console.close();
  }

  matchCounter() {
    this.lottoMachineOutput.forEach((item) => {
      let matchCount = this.getMatchCount(item, this.lottoNumbers);
      let bonusMatch = this.getBonusMatch(item, this.bonusNumber);
      if (matchCount == 3) {
        this.coincide.threeMatches += 1;
      } else if (matchCount == 4) {
        this.coincide.fourMatches += 1;
      } else if (matchCount == 5 && bonusMatch == true) {
        this.coincide.fiveAndBonusMatches += 1;
      } else if (matchCount == 5) {
        this.coincide.fiveMatches += 1;
      } else if (matchCount == 6) {
        this.coincide.allMatches += 1;
      }
    });
  }
  getMatchCount(A, B) {
    let arr = new Set(A.concat(B));
    arr = [...arr];

    return A.length + B.length - arr.length;
  }
  getBonusMatch(A, B) {
    return A.includes(B);
  }

  printMatchCount() {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.THREE_MATCHES +
        `${this.coincide.threeMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FOUR_MATCHES +
        `${this.coincide.fourMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FIVE_MATCHES +
        `${this.coincide.fiveMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FIVE_AND_BONUS_MATCHES +
        `${this.coincide.fiveAndBonusMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.ALL_MATCHES +
        `${this.coincide.allMatches}개`
    );
  }

  printWinningAmount() {
    this.winningAmount =
      5000 * this.coincide.threeMatches +
      50000 * this.coincide.fourMatches +
      1500000 * this.coincide.fiveMatches +
      30000000 * this.coincide.fiveAndBonusMatches +
      2000000000 * this.coincide.allMatches;

    let myyield = this.getYield().toFixed(1);

    MissionUtils.Console.print(`총 수익률은 ${myyield}%입니다.`);
  }
  getYield() {
    return parseFloat(100 * (this.winningAmount / this.purchaseAmount));
  }
}

module.exports = WinningStastics;
