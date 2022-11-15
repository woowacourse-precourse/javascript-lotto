const MissionUtils = require("@woowacourse/mission-utils");

class MyLotto {
    #money;

    constructor(money) {
        this.validate(money);
        this.#money = money;
    }

    getInputAmount() {
    MissionUtils.Console.readLine (
        "구입금액을 입력해 주세요. \n", (money) => {
            this.#money = parseInt(money);
        });
    }
}

module.exports = MyLotto;