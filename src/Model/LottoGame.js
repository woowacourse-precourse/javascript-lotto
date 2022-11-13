const MissionUtils = require('@woowacourse/mission-utils');
const BonusNumber = require('./BonusNumber');
const Money = require('./Money');

class LottoGame {
  lottos = [];
  winLotto;
  #bonusNumber;
  #money;

  get money() {
    return this.#money.money;
  }
  set money(input) {
    MissionUtils.Console.print(input);
    this.#money = new Money(input);
  }

  get bonusNumber() {
    return this.#bonusNumber.number;
  }

  set bonusNumber(input) {
    this.#bonusNumber = new BonusNumber(this.winLotto, input);
  }
}
module.exports = LottoGame;
