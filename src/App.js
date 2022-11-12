const Lotto = require("./Lotto");

const MissionUtils = require("@woowacourse/mission-utils");
class App {
  boughtLottos = [];

  play() {
    this.inputAmountOfMoneyToBuy();
  }

  inputAmountOfMoneyToBuy() {
    const WORD_TO_PRINT = "구입금액을 입력해 주세요.\n";
    let numberOfLotto;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (money) => {
      money = Number(money);
      numberOfLotto = money / 1000;
      this.checkAmountOfMoneyToBuy(money);
      this.printBoughtNumberOfLotto(numberOfLotto);
      this.makeRandomLottoNumber(numberOfLotto);
    });
  }

  checkAmountOfMoneyToBuy(money) {
    const CHECK_RESULT = money % 1000;

    switch (isNaN(CHECK_RESULT) || CHECK_RESULT) {
      case 0:
        break;
      case true:
        const WRONG_NUMBER = "[ERROR] 숫자가 아닙니다.";
        throw new Error(WRONG_NUMBER);
      default:
        const WRONG_INPUT = "[ERROR] 1000원 단위 금액이 아닙니다.";
        throw new Error(WRONG_INPUT);
    }
  }

  printBoughtNumberOfLotto(NUMBER_OF_LOTTO) {
    const WORD_TO_PRINT = ` \n${NUMBER_OF_LOTTO}개를 구매했습니다.`;
    MissionUtils.Console.print(WORD_TO_PRINT);
  }

  makeRandomLottoNumber(NUMBER_OF_LOTTO) {
    for (let i = 0; i < NUMBER_OF_LOTTO; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => {
        return a - b;
      });
      this.boughtLottos.push(numbers);
    }
    for (const boughtLotto of this.boughtLottos) {
      MissionUtils.Console.print(`[${boughtLotto.join(", ")}]`);
    }

    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    const WORD_TO_PRINT = "\n당첨 번호를 입력해주세요.\n";
    let winngNumbers;
    let bonusNumber;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (numbers) => {
      winngNumbers = numbers.split(",").map(Number);

      const lotto = new Lotto(winngNumbers);
      bonusNumber = lotto.inputBonusNumbers(this.boughtLottos);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
