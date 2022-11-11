const { Console } = require('@woowacourse/mission-utils');

class App {
  getCount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.lottoCount = amount / 1000;
    });
  }

  play() {}
}

module.exports = App;
