const { print, close } = require("@woowacourse/mission-utils").Console;

class App {
  play() {
    print('구입금액을 입력해 주세요.');
    readLine('', (purchaseAmount) =>  {
      close();
    });
  }
}

module.exports = App;
