const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');

class App {
  #money = 0;

  #lottos = [];

  #winningNumber;

  #bounsNumber;

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      this.validateMoney(answer);
      this.money = Number(answer);
    });
  }

  validateMoney(money) {
    if (!Number.isNaN(money)) {
      throw new Error('[ERROR] 올바르지 않은 금액입니다.');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해야 합니다.');
    }
  }

  play() {
    this.inputMoney();
    Console.close();
  }
}

module.exports = App;
