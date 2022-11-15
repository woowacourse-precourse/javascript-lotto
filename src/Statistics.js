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
  countHit(lottoNumber, winningNumber) {
    let hit = 0;
    for (let number = 0; number < winningNumber.length - 1; number++) {
      if (lottoNumber[number] !== winningNumber[number]) {
        return hit;
      }
      hit += 1;
    }
    return hit;
  }
  checkBonusNumber(lottoNumber, winningNumber) {
    if (lottoNumber.indexOf(winningNumber[winningNumber.length - 1]) !== -1) {
      return true;
    }
    return false;
  }
}
