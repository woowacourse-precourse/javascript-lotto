const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.priceInput();
  }
  
  priceInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
        console.log(`구입금액을 입력해 주세요.\n ${price}`);
      }
    );
  }
}

module.exports = App;
