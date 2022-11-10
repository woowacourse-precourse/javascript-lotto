const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/lotto');

class App {
  play() {
    this.readMoney();
  }

  readMoney() {
    Console.readLine(GAME_MESSAGE.MONEY_INPUT, (money) => {
      App.#validateMoney(money);
      Console.print(money);
      Console.close();
    });
  }

  static #validateMoney(money) {
    if (money === '') {
      throw new Error('[ERROR] 빈 값을 입력하였습니다.');
    }

    if (money.includes(' ')) {
      throw new Error('[ERROR] 공백을 포함해 입력하였습니다.');
    }

    if (isNaN(money)) {
      throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    }

    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000의 배수여야 합니다.');
    }
  }
}

module.exports = App;
