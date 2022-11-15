const Lotto = require("./Lotto");

const MissionUtils = require("@woowacourse/mission-utils");
class App {
  boughtLottos = [];
  
  inputAmountMoney() {
    const WORD_TO_PRINT = "구입금액을 입력해 주세요.\n";
    let numberOfLotto;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (money) => {
      money = Number(money);
      numberOfLotto = money / 1000;
      this.checkAmountOfMoneyToBuy(money);
      this.printBoughtNumberOfLotto(numberOfLotto);
      this.randomLottoNumber(numberOfLotto);
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
}

const app = new App();
app.play();
module.exports = App;