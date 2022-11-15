const { Console } = require("@woowacourse/mission-utils");
const { APP_MESSAGE, PRINT_LOTTO_MATCH } = require("./constants");

const LottoGame = require("./LottoGame");

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  // [v][구매금액 입력 문구출력 및 사용자 입력 후에 메서드 순서대로 호출 기능]
  readInputMoney() {
    Console.readLine(APP_MESSAGE.INPUT_AMOUNT, (userInputString) => {
      const inputMoney = Number(userInputString);
      this.lottoGame.setInputMoney(inputMoney);

      this.printBuyResult();
    });
  }

  // [v][사용자가 구매한 로또 개수 문구 출력 후 메서드 순서대로 호출 기능]
  printBuyResult() {
    this.lottoGame.setLottoGames();
    const lottoGames = this.lottoGame.getLottoGames();

    Console.print(APP_MESSAGE.OUTPUT_PURCHASE_AMOUNT(lottoGames.length));
    lottoGames.forEach((lottoGame) => Console.print(lottoGame.getNumberString()));

    this.readWinningNumbers();
  }

  // [v][사용자가 당첨 번호 입력 후에 메서드 순서대로 호출 기능]
  readWinningNumbers() {
    Console.readLine(APP_MESSAGE.INPUT_WINNING_NUMBER, (userInputString) => {
      const winningNumbers = userInputString.split(",").map(Number);
      this.lottoGame.setWinningNumbers(winningNumbers);

      this.readBonusNumber();
    });
  }

  // [v][사용자가 보너스 번호 입력 후에 메서드 순서대로 호출 기능]
  readBonusNumber() {
    Console.readLine(APP_MESSAGE.INPUT_BONUS_NUMBER, (userInputString) => {
      const bonusNumber = Number(userInputString);
      this.lottoGame.setBonusNumbers(bonusNumber);

      this.printWinningStatistics();
    });
  }

  // [v][로또 당첨 통계 전 지정 문구 출력 기능]
  printWinningStatistics() {
    const statistics = this.lottoGame.getStatistics();

    Console.print(APP_MESSAGE.OUTPUT_WINNING_STATISTICS);

    for (let i = 0; i < PRINT_LOTTO_MATCH.length; i++) {
      Console.print(PRINT_LOTTO_MATCH[i](statistics[i]));
    }

    Console.close();
  }

  // [v][게임 시작 기능]
  play() {
    this.readInputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
