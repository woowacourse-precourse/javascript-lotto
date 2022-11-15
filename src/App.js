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
class App {
  play() {}
}

module.exports = App;
