const { Random } = require('@woowacourse/mission-utils');

class WinningLotto {
    #winningNum;
    #bonusNum;

    constructor(winningNum, bonusNum) {
        this.#winningNum = winningNum;
        this.#bonusNum = bonusNum;
        this.validateWinningLotto();
    }

    validateWinningLotto() {
        // console.log(this.#winningNum, this.#bonusNum);
        if (this.#winningNum.includes(this.#bonusNum)) {
            throw new Error('[ERROR] 보너스 번호는 당첨 번호와 다른 숫자이어야 합니다.');
        }
    }

    getWinningNum() {
        return this.#winningNum
    }

    getBonusNum() {
        return this.#bonusNum
    }
}

module.exports = WinningLotto;