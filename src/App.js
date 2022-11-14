const { Console } = require("@woowacourse/mission-utils");
const { validateMoney } = require("./Exception");
const LottoMachine = require("./LottoMachine");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    /* Drawing Machine 인스턴스 생성 */
  }

  play() {
    Console.readLine(
      "구입금액을 입력해 주세요.\n",
      function (money) {
        money = Number(money);
        validateMoney(money);
        const lottos = this.lottoMachine.buyLottos(money);
        this.printLottos(lottos);
        /* 당첨 번호 입력 */
        /* 보너스 번호 입력 */
        /* 당첨 통계 출력 */
      }.bind(this)
    );
  }

  printLottos(lottos) {
    lottos.forEach(function (lotto) {
      lotto.printNumbers();
    });
  }

  printStatistics() {
    /* 당첨 통계 출력 함수 */
  }
}

module.exports = App;
