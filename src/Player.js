const Console = require('./utils/Console');

class Player {
  #lotto;

  constructor(lotto) {}

  purchaseLotto() {
    Console.readLine('구입금액을 입력해 주세요.', this.callback.bind(this));
  }

  callback(expense) {}
}

module.exports = Player;
