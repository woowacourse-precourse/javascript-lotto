const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const Lotto = require("./Lotto");

const ASK_AMOUNTS_MESSAGE = "구입금액을 입력해 주세요.\n";
const ASK_WINNING_NUMBER_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
const ERROR_NOT_THOUSAND_UNIT = "[ERROR] 1,000원 단위로만 구매 가능합니다.";
const ERROR_NOT_NUMBER_AND_COMMA =
  "[ERROR] 숫자와 ,(쉼표) 기호만을 입력해주세요.";

class App {
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(ASK_AMOUNTS_MESSAGE, (amount) => {
      this.checkPurchaseAmount(amount);

      const numberOfLotto = amount / 1000;

      this.showNumberOfPurchasedLotto(numberOfLotto);

      this.createRandomLotto(numberOfLotto);

      this.showEveryLotto();

      this.getWinningNumber(amount);
    });
  }

  checkPurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_NOT_THOUSAND_UNIT);
    }
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

  getWinningNumber(amount) {
    Console.readLine(ASK_WINNING_NUMBER_MESSAGE, (userInput) => {
      const arrayedUserInput = this.getArrayedUserInput(userInput);

      this.checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput);

      const userLotto = this.getUserLotto(userInput);

      const lotto = new Lotto(amount, this.lottoArray, userLotto);
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
        throw new Error(ERROR_NOT_NUMBER_AND_COMMA);
      }
    });
  }

  getUserLotto(userInput) {
    const splitedInput = userInput.split(",");

    const userLotto = splitedInput.map((item) => Number(item));

    return userLotto;
  }
}

const app = new App();
app.play();

module.exports = App;
