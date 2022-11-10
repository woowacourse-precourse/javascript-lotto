const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');
const MyLotto = require("./MyLotto.js");

class App {
  constructor() {
    this.myLotto = null;
    this.lotto = null;
  }

  play() {
    // 어플리케이션 시작
    this.inputPurchase();
  }

  inputPurchase() {
    // 로또 구입 금액 입력
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.#myLotto = new MyLotto(parseInt(input));
      this.inputWinNum();
    });
  }

  inputWinNum() {
    // 당첨 번호 입력
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      this.#lotto = new Lotto(input.split(',').map(num => parseInt(num)));
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    // 보너스 번호 입력
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      this.#lotto.setBonusNum(parseInt(input));
    });
  }

  checkMatchLottoNum() {
    // 로또 발행 번호와 당첨 번호 일치 조회 
    
  }

  getWinHistory() {
    // 발행된 모든 로또의 당첨 내역 조회
  }

  calRate() {
    // 수익률 계산 
  }

  printMyLotto() {
    // 구매한 로또 내역 출력
  }

  printWinHistory() {
    // 로또 당첨 내역 출력
  }

  printRate() {
    // 수익률 출력
  }
}

const app = new App();
app.play();

module.exports = App;
