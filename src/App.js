const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#inputMoneyExceptionCheck(money);
    });
  }

  #inputMoneyExceptionCheck(money) {
    if (this.#stringHasNaN(money))
      throw new Error('[ERROR] 금액은 숫자로 입력해 주세요');
    if (money % 1000 !== 0)
      throw new Error('[ERROR] 금액은 1000원 단위로 입력해 주세요');
  }

  #stringHasNaN(money) {
    for (let i = 0; i < money.length; ++i) {
      if (
        money.charCodeAt(i) < '0'.charCodeAt(0) ||
        money.charCodeAt(i) > '9'.charCodeAt(0)
      )
        return true;
    }
    return false;
  }
}

module.exports = App;
