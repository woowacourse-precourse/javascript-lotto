const MissionUtils = require('@woowacourse/mission-utils');
const LottoUser = require('./LottoUser');

class LottoGame {
  #user;

  constructor() {
    this.#user = undefined;
  }

  start() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.#user = new LottoUser(parseInt(amount, 10));
    });
  }
}

module.exports = LottoGame;
