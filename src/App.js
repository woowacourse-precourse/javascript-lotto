const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");
const UserLotto = require("./UserLotto.js");
const Lotto = require("./Lotto.js");

class App {
  constructor() {
    this.totalRevenue = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;
    this.fiveBonus = 0;
    this.six = 0;
  }
  play() {
    (async () => {
      this._playAsync();
    })();
  }

  async _playAsync() {
    const inputMoney = await this.phase(messages.INPUT_PURCHASE_AMOUNT_MESSAGE);

    this.buyLotto(inputMoney);

    let winningNumbers = await this.phase(
      messages.INPUT_WINNING_NUMBER_MESSAGE
    );
    winningNumbers = winningNumbers.split(",");
    winningNumbers = winningNumbers.map((number) => parseInt(number));
    this.winningLotto = new Lotto(winningNumbers);

    const bonusNumber = await this.phase(messages.INPUT_BONUS_NUMBER_MESSAGE);
    this.winningLotto.createBonusNumber(bonusNumber);
    this.matchWinningLotto();
  }

  buyLotto(inputMoney) {
    const { isPurchaseable, errorMessage } = this.checkInputUnits(inputMoney);

    if (!isPurchaseable) {
      MissionUtils.Console.close();
      throw new Error(errorMessage);
    }

    const lottoCount = this.purchaseableCount(inputMoney);
    this.printNumberOfLotto(lottoCount);
    this.lottoArray = this.purchaseLotto(lottoCount);
    this.printPurchasedLotto();
    this.money = inputMoney;
    return true;
  }

  async phase(inputMessage) {
    return new Promise((resolve, _) => {
      MissionUtils.Console.readLine(inputMessage, (answer) => {
        resolve(answer);
      });
    });
  }

  checkInputUnits(money) {
    if (isNaN(money)) {
      return {
        isPurchaseable: false,
        errorMessage: messages.NOT_A_NUMBER_ERROR,
      };
    }
    if (parseInt(money) % 1000 !== 0) {
      return { isPurchaseable: false, errorMessage: messages.MONEY_UNIT_ERROR };
    }
    return { isPurchaseable: true };
  }

  purchaseableCount(money) {
    return parseInt(money / terms.PERMISSIBLE_UNITS);
  }

  purchaseLotto(lottoCount) {
    let lottoArray = [];
    for (let i = 0; i < lottoCount; i += 1) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      let lotto = new UserLotto(numbers);
      this.lotto = lotto.getNumbers();
      lottoArray.push(this.lotto);
    }
    return lottoArray;
  }
  printNumberOfLotto(lottoCount) {
    MissionUtils.Console.print(`${lottoCount}${messages.PURCHASED_MESSAGE}`);
  }
  printPurchasedLotto() {
    this.lottoArray.map((items) => MissionUtils.Console.print(items));
  }

  matchWinningLotto() {
    /**
     * this.lottoArray
     * this.winningLotto.winningNumbers
     * this.winningLotto.bonusNumber
     */
    this.winningCount = this.lottoArray.map(
      (numberArray) => this.matchedNumberCount(numberArray) //[개수 개수 개수 .. ]
    );
    this.hasBonusNumber = this.lottoArray.map((numberArray) =>
      this.checkBonusNumber(numberArray)
    );
    this.matchResult();
    this.calculateRevenue();
    this.printResult();
  }

  checkBonusNumber(numberArray) {
    let result = numberArray.filter(
      (item) => item === parseInt(this.winningLotto.getBonusNumber().join(""))
    );
    if (result.length === terms.BONUS_NUMBER_LENGTH) {
      return true;
    }
    return false;
  }

  matchResult() {
    for (let i = 0; i < terms.NUMBERS_LENGTH; i += 1) {
      let count = this.winningCount[i];
      switch (count) {
        case terms.MATCHES_THREE_NUMBERS:
          this.three += 1;
          break;
        case terms.MATCHES_FOUR_NUMBERS:
          this.four += 1;
          break;
        case terms.MATCHES_FIVE_NUMBERS:
          if (this.hasBonusNumber[i]) {
            this.fiveBonus += 1;
            break;
          }
          this.five += 1;
          break;
        case terms.MATCHES_SIX_NUMBERS:
          this.six += 1;
          break;
        default:
          break;
      }
    }
  }

  matchedNumberCount(numberArray) {
    this.resulted = 0;
    for (let i = 0; i < terms.NUMBERS_LENGTH; i += 1) {
      if (this.findWinningLotto(numberArray[i])) {
        this.resulted += 1;
      }
    }
    MissionUtils.Console.print(this.resulted);
    return this.resulted;
  }

  findWinningLotto(item) {
    for (let i = 0; i < terms.NUMBERS_LENGTH; i += 1) {
      if (item === this.winningLotto.getWinningNumbers()[i]) {
        return true;
      }
    }
    return false;
  }
  calculateRevenue() {
    this.totalRevenue += this.three * terms.THREE_REWARD;
    this.totalRevenue += this.four * terms.FOUR_REWARD;
    this.totalRevenue += this.five * terms.FIVE_REWARD;
    this.totalRevenue += this.fiveBonus * terms.FIVE_BONUS_REWARD;
    this.totalRevenue += this.six * terms.SIX_REWARD;
    this.totalRevenue *= 100;
    this.totalRevenue /= this.money;
    this.totalRevenue =
      this.totalRevenue === undefined ? 0 : this.totalRevenue.toFixed(1);
  }
  printResult() {
    MissionUtils.Console.print(messages.WINNING_STATS_MESSAGE);
    MissionUtils.Console.print(messages.DIVISION_LINE);
    MissionUtils.Console.print(
      `${messages.MATCHES_THREE_NUMBERS_MESSAGE} ${this.three}${messages.END_OF_LINE}`
    );
    MissionUtils.Console.print(
      `${messages.MATCHES_FOUR_NUMBERS_MESSAGE} ${this.four}${messages.END_OF_LINE}`
    );
    MissionUtils.Console.print(
      `${messages.MATCHES_FIVE_NUMBERS_MESSAGE} ${this.five}${messages.END_OF_LINE}`
    );
    MissionUtils.Console.print(
      `${messages.MATCHES_FIVE_NUMBERS_BONUS_MESSAGE} ${this.fiveBonus}${messages.END_OF_LINE}`
    );
    MissionUtils.Console.print(
      `${messages.MATCHES_SIX_NUMBERS_MESSAGE} ${this.six}${messages.END_OF_LINE}`
    );
    MissionUtils.Console.print(
      `${messages.TOTAL_REVENUE_MESSAGE} ${this.totalRevenue}${messages.REVENUE_END_OF_LINE}`
    );
    MissionUtils.Console.close();
  }
}
module.exports = App;
