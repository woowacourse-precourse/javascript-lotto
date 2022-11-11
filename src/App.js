const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE } = require("./constant/Constant");
const LottoMachine = require("../src/LottoMachine");
const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");

class App {
  constructor() {
    this.purchaseAmount;
    this.lottoMachineOutput;
    this.winningNumbers;
    this.bonusNumber;
    this.winningAmount;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        const lottoMachine = new LottoMachine(money);
        this.purchaseAmount = money;
        this.lottoMachineOutput = lottoMachine.lottoMachineOutput;

        this.inputLottoNumbers();
      }
    );
  }

  inputLottoNumbers() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_WINNING_NUMBER,
      (winningNumbers) => {
        let splitWinningNumbers = winningNumbers.split(",");
        new Lotto(splitWinningNumbers);
        this.winningNumbers = splitWinningNumbers.map(Number);
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        new Bonus(bonusNumber, this.winningNumbers);
        this.bonusNumber = Number(bonusNumber);
        this.printWinningStastics();
      }
    );
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

const app = new App();
app.play();

module.exports = App;
