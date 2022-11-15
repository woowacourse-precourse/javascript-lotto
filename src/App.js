const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.purchase;
  }
  play() {
    let amount;

    this.purchase = this.Input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined) return 0;
  }

  Input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }
}

module.exports = App;
