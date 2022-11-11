const MissionUtils = require("@woowacourse/mission-utils");
const {
  READLINE_PHRASE,
  OUTPUT_PHRASE,
  LOTTO_RANGE,
  ERROR_MESSAGE,
} = require("./Constant");

class App {
  constructor() {
    this.purchaseAmount;
    this.lottoArrays;
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
        this.isValidPurchaseAmount(money);
        this.purchaseAmount = money;

        this.printPurchaseQuantity();
        this.printLottoNumberArray();
        this.inputWinningNumbers();
      }
    );
  }
  isValidPurchaseAmount(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.NOT_A_NUMBER);
    }
    if (input % 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_UNIT);
    }
    if (input < 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_NUMBER);
    }
  }
  printPurchaseQuantity() {
    MissionUtils.Console.print("");
    MissionUtils.Console.print(
      this.getPurchaseQuantity(this.purchaseAmount) +
        OUTPUT_PHRASE.PURCHASE_QUANTITY
    );
  }
  getPurchaseQuantity() {
    return parseInt(this.purchaseAmount / 1000);
  }

  printLottoNumberArray() {
    let lottoArrays = [];

    for (
      let sequence = 1;
      sequence <= this.getPurchaseQuantity(this.purchaseAmount);
      sequence++
    ) {
      let lottoArray = this.getLottoNumber();

      let stringLottoArray = lottoArray.join(", ");
      MissionUtils.Console.print("[" + stringLottoArray + "]");
      lottoArrays.push(lottoArray);
    }
    this.lottoArrays = lottoArrays;
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
      (winningNumbers) => {
        let splitWinningNumbers = winningNumbers.split(",");
        this.isValidWinningNumbers(splitWinningNumbers);

        this.winningNumbers = splitWinningNumbers.map(Number);
        this.inputBonusNumber();
      }
    );
  }

  isValidWinningNumbers(splitWinningNumbers) {
    if (isNaN(splitWinningNumbers.join(""))) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_A_NUMBER);
    }
    if (splitWinningNumbers.length != 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.INVALID_LENGTH);
    }
    splitWinningNumbers.map((item) => {
      if (item > 45 || item < 1) {
        throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_IN_RANGE);
      }
    });
    let removedDuplication = new Set(splitWinningNumbers);
    removedDuplication = [...removedDuplication];
    if (removedDuplication.length != 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.IS_DUPLICATED);
    }
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        this.isValidBonusNumber(bonusNumber);
        this.bonusNumber = Number(bonusNumber);

        this.printWinningStastics();
      }
    );
  }
  isValidBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_A_NUMBER);
    }
    if (this.winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.IS_DUPLICATED);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_IN_RANGE);
    }
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
