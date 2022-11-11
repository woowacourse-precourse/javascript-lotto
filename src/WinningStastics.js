const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_PHRASE } = require("./constant/Constant");

class WinningStastics {
  constructor(winningNumbers, bonusNumber, purchaseAmount, lottoMachineOutput) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.purchaseAmount = purchaseAmount;
    this.lottoMachineOutput = lottoMachineOutput;
    this.winningAmount;
  }
  printWinningStastics() {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.LINE_UP + OUTPUT_PHRASE.WINNING_STATISTICS.INTRO
    );

    let coincide = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveAndBonusMatches: 0,
      allMatches: 0,
    };

    this.lottoMachineOutput.forEach((item) => {
      let matchCount = this.getMatchCount(item, this.winningNumbers);
      let bonusMatch = this.getBonusMatch(item, this.bonusNumber);
      if (matchCount == 3) {
        coincide.threeMatches += 1;
      } else if (matchCount == 4) {
        coincide.fourMatches += 1;
      } else if (matchCount == 5 && bonusMatch == true) {
        coincide.fiveAndBonusMatches += 1;
      } else if (matchCount == 5) {
        coincide.fiveMatches += 1;
      } else if (matchCount == 6) {
        coincide.allMatches += 1;
      }
    });

    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.THREE_MATCHES +
        `${coincide.threeMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FOUR_MATCHES +
        `${coincide.fourMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FIVE_MATCHES +
        `${coincide.fiveMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.FIVE_AND_BONUS_MATCHES +
        `${coincide.fiveAndBonusMatches}개`
    );
    MissionUtils.Console.print(
      OUTPUT_PHRASE.WINNING_STATISTICS.ALL_MATCHES + `${coincide.allMatches}개`
    );

    this.winningAmount =
      5000 * coincide.threeMatches +
      50000 * coincide.fourMatches +
      1500000 * coincide.fiveMatches +
      30000000 * coincide.fiveAndBonusMatches +
      2000000000 * coincide.allMatches;

    let myyield = this.getYield().toFixed(1);

    MissionUtils.Console.print(`총 수익률은 ${myyield}%입니다.`);
    MissionUtils.Console.close();
  }
  getMatchCount(A, B) {
    let arr = new Set(A.concat(B));
    arr = [...arr];

    return A.length + B.length - arr.length;
  }
  getBonusMatch(A, B) {
    return A.includes(B);
  }
  getYield() {
    return parseFloat(100 * (this.winningAmount / this.purchaseAmount));
  }
}

module.exports = WinningStastics;
