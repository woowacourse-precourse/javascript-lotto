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
    const WORD_TO_PRINT = `${NUMBER_OF_LOTTO}개를 구매했습니다.\n`;
    MissionUtils.Console.print(WORD_TO_PRINT);
  }

  makeRandomLottoNumber(NUMBER_OF_LOTTO) {
    for (let i = 0; i < NUMBER_OF_LOTTO; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.boughtLottos.push(numbers);
    }
    MissionUtils.Console.print(this.boughtLottos);
    this.inputWinningNumbers();
  }
  // 당첨 번호 입력 받기
  // 이때 new Lotto 생성하자.

  inputWinningNumbers() {
    const WORD_TO_PRINT = "당첨 번호를 입력해주세요.\n";
    let winngNumbers;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (numbers) => {
      winngNumbers = numbers.split(",").map(Number);
      MissionUtils.Console.print(winngNumbers);
      const lotto = new Lotto(winngNumbers);
      lotto.inputBonusNumbers();
    });
  }

  // 보너스 번호 입력 받기, playfh return: lotto에서 정의.

  // 비교하는 거 lotto에서 정의(play에서 보너스 번호랑, 로또 2차원배열 전달)
  // 그리고 개수 반환받아서 통계 배열에 push

  // play가 통계 배열을 lotto로 전달
  // lotto에서 통계 출력하는 함수 정의
}

const app = new App();
app.play();
module.exports = App;
