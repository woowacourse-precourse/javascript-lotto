const { Console } = require("@woowacourse/mission-utils");
const { validateMoney } = require("./Exception");

class App {
  #lottoMachine;
  #drawingMachine;

  constructor() {
    /* Lotto Machine 인스턴스 생성 */
    /* Drawing Machine 인스턴스 생성 */
  }

  play() {
    Console.readline("구입금액을 입력해 주세요.\n", function (money) {
      validateMoney(money);
      /* 입력받은 금액만큼 로또 발급 및 출력 */
      /* 당첨 번호 입력 */
      /* 보너스 번호 입력 */
      /* 당첨 통계 출력 */
    });
  }

  printStatistics() {
    /* 당첨 통계 출력 함수 */
  }
}

module.exports = App;
