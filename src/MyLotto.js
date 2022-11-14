const MissionUtils = require("@woowacourse/mission-utils");

class MyLotto {
    lottoList = [];
    constructor(money) {
        this.validate(money);
    }

    validate(money) {
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 로또 구입 금액은 1000원 단위로 입력 가능합니다.");
        }
    }
}

module.exports = MyLotto;
