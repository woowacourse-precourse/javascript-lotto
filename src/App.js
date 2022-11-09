const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.readLine('구입금액을 입력해주세요.\n', purchaseAmount => {
      try {
        this.validate(purchaseAmount);
      } catch (err) {
        throw err;
      }
    });
  }
}

module.exports = App;
