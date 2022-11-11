const MissionUtils = require("@woowacourse/mission-utils");
const { calRate } = require("./AppUtils");
const AppUtils = require('./AppUtils');
const Lotto = require('./Lotto.js');
const MyLotto = require("./MyLotto.js");

class App {
  constructor() {
    this.myLotto = null;
    this.winlotto = null;
  }

  play() {
    // 어플리케이션 시작
    this.inputPurchase();
  }

  inputPurchase() {
    // 로또 구입 금액 입력
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      MissionUtils.Console.print('');
      this.myLotto = new MyLotto(parseInt(input));
      AppUtils.printCountLotto(this.myLotto);
      AppUtils.printMyLotto(this.myLotto);
      MissionUtils.Console.print('');
      this.inputWinNum();
    });
  }

  inputWinNum() {
    // 당첨 번호 입력
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      MissionUtils.Console.print('');
      this.winlotto = new Lotto(input.split(',').map(num => parseInt(num)));
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    // 보너스 번호 입력
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      MissionUtils.Console.print('');
      this.winlotto.setBonusNum(parseInt(input));
      this.getResult();
    });
  }

  getResult() {
    // 결과 출력 및 종료
    AppUtils.printWinStat(this.myLotto, this.winlotto)
    MissionUtils.Console.close();
  }
}

// const app = new App();
// app.play();

module.exports = App;
