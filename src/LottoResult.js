const { COMMENT, RANK } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoResult {
  #numberOfRanks;
  #yield;
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber, lottos, money) {
    this.#numberOfRanks = [0, 0, 0, 0, 0];
    this.#yield = 0;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#checkLottos(lottos);
    this.#calculateYeild(money);
  }
}

module.exports = LottoResult;
