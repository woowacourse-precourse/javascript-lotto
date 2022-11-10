const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    MissionUtils.Console.print('로또 게임을 시작합니다~!');
  }
  

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      this.onValidation(Number(input));
    });
  }

  onValidation(input) {
    
    if(typeof input !== 'number' || Number.isNaN(input)) throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');
  }
}

const app = new App();
app.play();

module.exports = App;
