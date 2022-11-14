const { Random } = require('@woowacourse/mission-utils');

class WinningLotto {
    #winningNum;
    #bonusNum;

    constructor(winningNum, bonusNum) {
        this.#winningNum = winningNum;
        this.#bonusNum = bonusNum;
    }
}

module.exports = WinningLotto;