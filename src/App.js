const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Lotto = require("./Lotto");
const WinningNumbers = require("./WinningNumbers");
const {
  LOTTO_RESULT_MESSAGE,
  TOTAL_PROFIT_MESSAGE,
  LOTTO_PROCEEDS_INFO,
  GAME_MESSAGES,
  LOTTO_PRICE,
  LOTTO_START_NUMBER,
  LOTTO_END_NUMBER,
  LOTTO_NUMBER,
  RANKING_2_COLLECT_NUMBER,
  LOTTO_PROCEED_INDEX,
  INDEX_CORRECTION_VALUE,
} = require("./constants");

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.user = new User();
    this.lottos = [];
    this.winningNumbers = new WinningNumbers();

    // 5,4,3,1,2등 순서
    this.lottoResults = [0, 0, 0, 0, 0];
  }

  play() {
    this.chargePurchaseMoney();
  }

  chargePurchaseMoney() {
    Console.readLine(GAME_MESSAGES.ENTER_MONEY, (answer) => {
      this.user.changeMoney(answer);
      Console.print(answer);
      this.purchaseLotto(this.user.getMoney());
    });
  }

  purchaseLotto(money) {
    const purChaseNumber = money / LOTTO_PRICE;
    Console.print(GAME_MESSAGES.PURCHASE_MESSAGE(purChaseNumber));
    for (let i = 0; i < purChaseNumber; i += 1) {
      this.lottos.push(this.getNewLotto());
    }
    this.lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNumbersByString());
    });
    this.enterWinningNumbers();
  }

  getNewLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_START_NUMBER,
        LOTTO_END_NUMBER,
        LOTTO_NUMBER
      )
    );
  }

  enterWinningNumbers() {
    Console.readLine(GAME_MESSAGES.ENTER_WINNING_NUMBER, (answer) => {
      Console.print(answer);
      const numbericAnswer = answer.split(",").map((number) => Number(number));
      this.winningNumbers.addWinningNumbers(numbericAnswer);
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine(GAME_MESSAGES.ENTER_BONUS_NUMBER, (answer) => {
      Console.print(answer);
      this.winningNumbers.addBonusNumber(Number(answer));
      this.showResultMessage();
    });
  }

  showResultMessage() {
    Console.print(GAME_MESSAGES.WINNING_RESULT);
    Console.print(GAME_MESSAGES.RESULT_SEPARATOR);
    this.checkResult();
  }

  checkResult() {
    this.lottos.forEach((lotto) => {
      const correctInfo = this.getCorrectInfo(lotto.getLottoNumbers());
      this.plusWinnerCount(correctInfo);
    });
    Console.print(LOTTO_RESULT_MESSAGE(this.lottoResults));
    const totalProceeds = this.getTotalProceeds(this.lottoResults);
    Console.print(
      TOTAL_PROFIT_MESSAGE(this.changeProceedFormat(totalProceeds))
    );
    Console.close();
  }

  getCorrectInfo(lottoNumbers) {
    let correctNumber = 0;
    let bonusNumber = false;
    lottoNumbers.forEach((number) => {
      if (this.winningNumbers.bonusNumber === number) {
        bonusNumber = true;
      }
      if (this.winningNumbers.winningNumbers.includes(number)) {
        correctNumber += 1;
      }
    });
    return { collectNumber: correctNumber, bonusNumber };
  }

  plusWinnerCount(correctInfo) {
    if (
      correctInfo.collectNumber === RANKING_2_COLLECT_NUMBER &&
      correctInfo.bonusNumber
    ) {
      this.lottoResults[LOTTO_PROCEED_INDEX.RANKING2] += 1;
      return;
    }
    if (correctInfo.collectNumber >= LOTTO_PROCEED_INDEX.RANKING5) {
      this.lottoResults[
        correctInfo.collectNumber - INDEX_CORRECTION_VALUE
      ] += 1;
    }
  }

  getTotalProceeds(lottoResults) {
    let proceeds = 0;
    lottoResults.forEach((result, index) => {
      proceeds += result * LOTTO_PROCEEDS_INFO[index].proceed;
    });
    return proceeds;
  }

  changeProceedFormat(number) {
    return ((number / this.user.getMoney()) * 100).toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
