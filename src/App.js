const MissionUtils = require('@woowacourse/mission-utils');
const { printError, isPositiveInteger } = require('./Utils');

const LOTTO_PRICE = 1000;
class App {
  #lottoCount;

  constructor() {
    this.#lottoCount = 0;
  }

  #validate(money) {
    if (!isPositiveInteger(money)) {
      printError('금액을 양수로 입력해주세요.');
    }
    if (money % LOTTO_PRICE !== 0) {
      printError('1000원 단위로 입력해주세요.');
    }

    return true;
  }

  #getUserMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      if (this.#validate(money)) {
        this.#lottoCount = parseInt(money / LOTTO_PRICE, 10);
      }
    });
  }

  play() {
    this.#getUserMoney();
  }
}

module.exports = App;
