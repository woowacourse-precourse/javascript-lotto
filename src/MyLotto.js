const MissionUtils = require("@woowacourse/mission-utils");

class MyLotto {
    #money;

    constructor(money) {
        this.validate(money);
        this.#money= money;
        this.MY_LOTTO_LIST = [];
    }

    getInputAmount() {
        MissionUtils.Console.readLine (
            "구입금액을 입력해 주세요. \n", (money) => {
                this.validate(money);
                return money;
        });
    }

    getMyLottoCount(money) {
        const LOTTO_COUNT = 0;
        LOTTO_COUNT = parseInt(money) / 1000;
    }

    getMyLottoNum(LOTTO_COUNT) {
        let MY_LOTTO_NUM = [];

        for (let i = 0; i < LOTTO_COUNT; i++) {
            MY_LOTTO_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            this.MY_LOTTO_LIST.push(MY_LOTTO_NUM);
        }
    }

    validate(money) {
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 합니다.");
        }
    }
}

module.exports = MyLotto;