const Lotto = require('../src/Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.cost = 0;
  }
  play() {}
  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (cost) => {
      if (cost % 1000 !== 0) {
        throw new Error('[ERROR] 1,000원 단위 금액을 입력해주세요.');
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
