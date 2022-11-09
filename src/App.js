const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      this.checkPurchaseAmount(amount);

      const numberOfLotto = amount / 1000;

      this.showNumberOfPurchasedLotto(numberOfLotto);

      this.createRandomLotto(numberOfLotto);

      this.showEveryLotto();

      this.getNumberSelectedByUser();
    });
  }

  checkPurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로만 구매 가능합니다.");
    }

    return true;
  }

  showNumberOfPurchasedLotto(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  }

  createRandomLotto(amount) {
    this.lottoArray = [];

    while (this.lottoArray.length < amount) {
      const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      const sortedLotto = this.sortLottoNumber(randomLotto);

      this.lottoArray.push(sortedLotto);
    }
  }

  sortLottoNumber(lotto) {
    lotto.sort((a, b) => a - b);

    return lotto;
  }

  showEveryLotto() {
    this.lottoArray.forEach((item) => {
      Console.print(item);
    });
  }

  getNumberSelectedByUser() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (userInput) => {
      const splitedUserInput = this.getUserInputSplitedByComma(userInput);
    });
  }

  getUserInputSplitedByComma(userInput) {
    const splitedUserInput = userInput.split(",");

    return splitedUserInput;
  }
}

const app = new App();
app.play();

module.exports = App;
