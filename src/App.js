const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.printStart();
    this.orderAmount();
  }

  /** 1. 게임시작 안내 문구 출력*/
  printStart() {
    Console.print('구입금액을 입력해 주세요.');
  }

  /**2. 구입금액 입력 및 금액대비 생성할 로또 수 계산 */
  orderAmount() {
    Console.readLine('', (amount) => {
      if(isNaN(amount) || amount % 1000 !== 0) {
        throw new Error('입력값이 잘못되어, 게임을 종료합니다.');
      } 
      var lottoCount = amount / 1000
      this.creatLottos(lottoCount);
    });
  }

  /** 3. 1~45까지 겹치지 않는 랜덤 숫자 생성 */
  creatLottos(lottoCount) {
    var lottoArr = [];
    for(var i = 0; i < lottoCount; i++) {
      var randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      var lotto = new Lotto(randomNumbers);
      lottoArr.push(lotto);
    }
  }

}

const app = new App();
app.play();

module.exports = App;
