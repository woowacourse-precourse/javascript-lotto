const { Console } = require("@woowacourse/mission-utils");

class Statistic {
  #player;
  #winnigLotto;
  #totalCount;
  constructor(player, winningLotto) {
    this.#player = player;
    this.#winnigLotto = winningLotto;
    this.#totalCount = {
      "3hit": 0,
      "4hit": 0,
      "5hit": 0,
      "5hitBonus": 0,
      "6hit": 0,
    };
  }
}
