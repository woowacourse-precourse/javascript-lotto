const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");
const Result = require("./Result");
const AppConst = require("./constant/AppConst");

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(AppConst.ASK_AMOUNTS_MESSAGE, (amount) => {
      this.checkAmountStartZero(amount);
      this.checkOnlyNumber(amount);
      const amountTypeofNumber = Number(amount);
      this.checkPurchaseAmount(amountTypeofNumber);

      const numberOfLotto = amountTypeofNumber / 1000;
      this.showNumberOfPurchasedLotto(numberOfLotto);
      this.createRandomLotto(numberOfLotto);
      this.showEveryLotto();

      this.getWinningNumber();
    });
  }

  checkAmountStartZero(amount) {
    if (amount[0] === "0") {
      throw new Error(AppConst.ERROR_DONT_START_ZERO);
    }
  }

  checkOnlyNumber(amount) {
    const regex = /^\d+$/;

    if (!regex.test(amount)) {
      throw new Error(AppConst.ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkPurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(AppConst.ERROR_NOT_THOUSAND_UNIT);
    }
  }

  showNumberOfPurchasedLotto(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  }

  createRandomLotto(amount) {
    this.bundleOfLotto = [];

    while (this.bundleOfLotto.length < amount) {
      const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      const sortedLotto = this.getSortedLotto(randomLotto);

      this.bundleOfLotto.push(sortedLotto);
    }
  }

  getSortedLotto(lotto) {
    lotto.sort((a, b) => a - b);

    return lotto;
  }

  showEveryLotto() {
    this.bundleOfLotto.forEach((item) => {
      Console.print(`[${item.join(", ")}]`);
    });
  }

  getWinningNumber() {
    Console.readLine(AppConst.ASK_WINNING_NUMBER_MESSAGE, (userInput) => {
      const arrayedUserInput = this.getArrayedUserInput(userInput);
      this.checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput);

      const splitedInput = this.getSplitedUserInput(userInput);
      this.checkWinningNumberStartZero(splitedInput);

      this.userLotto = this.getUserLotto(splitedInput);

      new Lotto(this.userLotto);

      this.getBonusNumber();
    });
  }

  getArrayedUserInput(userInput) {
    const arrayedUserInput = userInput.split("");

    return arrayedUserInput;
  }

  checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput) {
    arrayedUserInput.forEach((item) => {
      const ASCII = item.charCodeAt();

      if ((ASCII !== 44 && ASCII < 48) || ASCII > 57) {
        throw new Error(AppConst.ERROR_NOT_NUMBER_AND_COMMA);
      }
    });
  }

  getSplitedUserInput(userInput) {
    const splitedInput = userInput.split(",");

    return splitedInput;
  }

  checkWinningNumberStartZero(userInput) {
    userInput.forEach((item) => {
      if (item[0] === "0") {
        throw new Error(AppConst.ERROR_DONT_START_ZERO);
      }
    });
  }

  getUserLotto(userInput) {
    const userLotto = userInput.map((item) => Number(item));

    return userLotto;
  }

  getBonusNumber() {
    Console.readLine(AppConst.ASK_BONUS_NUMBER, (bonus) => {
      new BonusNumber(this.userLotto, bonus);

      const result = new Result(this.bundleOfLotto, this.userLotto, bonus);

      result.calculateEachLotto();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
