//로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const lottoLogic = new Lotto([1, 2, 3, 4, 5, 6]);

class App {
  constructor() {
    //구입한 로또 번호들
    //사용자가 작성한 로또 번호
    //보너스 번호
    this.purchasedLotto = [];
    this.winningNumber = [];
    this.bonusNumber = [];
  }
  play() {
    //여기서 사용자한테 문구 보여주고 시작
    //금액 받고 금액 맞게 로또 번호 만들기
    //통과되면 당첨번호 문구 보여주고 당첨번호 받기
    //사용자가 입력한 당첨번호 잘못되면 예외처리 하기
    //보너스 번호 받기 -> 예외처리 해주기
    //당첨 통계 로직 사용
    this.purchasedLotto = lottoLogic.purchased();

    // if (this.purchasedLotto) {

    // }
  }
}
const app = new App();
app.play();
module.exports = App;
