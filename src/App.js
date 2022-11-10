const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE, LOTTO_RANGE } = require("./Constant");

class App {
  constructor() {
    this.lottoArrays;
    this.winningNumbers;
    this.bonusNumber;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        this.printPurchaseQuantity(money);
        this.printLottoNumberArray(money);

        this.inputWinningNumbers();
      }
    );
  }
  printPurchaseQuantity(money) {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.LINE_UP +
        this.getPurchaseQuantity(money) +
        OUTPUT_PHRASE.PURCHASE_QUANTITY
    );
  }
  getPurchaseQuantity(money) {
    return parseInt(money / 1000);
  }

  printLottoNumberArray(money) {
    let LottoArrays = [];

    for (
      let sequence = 1;
      sequence <= this.getPurchaseQuantity(money);
      sequence++
    ) {
      let LottoArray = this.getLottoNumber();

      MissionUtils.Console.print(LottoArray);
      LottoArrays.push(LottoArray);
    }
    this.lottoArrays = LottoArrays;
  }
  getLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.START_NUMBER,
      LOTTO_RANGE.END_NUMBER,
      LOTTO_RANGE.LENGTH
    ).sort((compare1, compare2) => {
      return compare1 - compare2;
    });
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_WINNING_NUMBER,
      (WinningNumbers) => {
        let splitWinningNumbers = WinningNumbers.split(",");

        this.winningNumbers = splitWinningNumbers.map(Number);
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
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

    this.lottoArrays.forEach((item) => {
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
  }

  getMatchCount(A, B) {
    let arr = new Set(A.concat(B));
    arr = [...arr];

    return A.length + B.length - arr.length;
  }
  getBonusMatch(A, B) {
    return A.includes(B);
  }
}

const app = new App();
app.play();

module.exports = App;
