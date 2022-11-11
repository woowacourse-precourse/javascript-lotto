const { Console, Random } = require("@woowacourse/mission-utils");

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
    });
  }
}

const app = new App();
app.play();

module.exports = App;
