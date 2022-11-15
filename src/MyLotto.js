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
            this.validate(money);
            this.#money;
        });
    }

    validate(money) {
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 합니다.");
        }
    }
}

module.exports = MyLotto;