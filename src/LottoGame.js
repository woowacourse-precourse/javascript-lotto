const MissionUtils = require('@woowacourse/mission-utils');
const LottoUser = require('./LottoUser');

class LottoGame {
  #user;

  constructor() {
    this.#user = undefined;
  }

  //Call the appropriate method according to the lotto game scenario
  start() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.#user = new LottoUser(parseInt(amount, 10));
      this.#user.printUserLottos();
    });
  }
}

module.exports = LottoGame;
