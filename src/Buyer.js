const MissionUtils = require("@woowacourse/mission-utils");

class Buyer {
    #money;

    constructor(money) {
        this.stringException(money);
        this.#money = money;
    }

    getMoney() {
        return this.#money;
    }

    stringException(money) {
        if (!Number(money)) {
            throw new Error("[ERROR] 금액은 정수로 입력해야 합니다.");
        }
    }
}

module.exports = Buyer;
