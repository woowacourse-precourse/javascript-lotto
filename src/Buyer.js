const MissionUtils = require("@woowacourse/mission-utils");

class Buyer {
    #money;

    constructor(money) {
        this.#money = money;
    }

    getMoney() {
        return this.#money;
    }
}

module.exports = Buyer;
