const MissionUtils = require("@woowacourse/mission-utils");

class MyLotto {
    #lottoList = [];

    constructor(money) {
        this.validate(money);
        this.createLottoList(this.calculateNumberOfLotto(money));
    }

    validate(money) {
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 로또 구입 금액은 1000원 단위로 입력 가능합니다.");
        }
    }

    calculateNumberOfLotto(money) {
        return Math.floor(money / 1000)
    }

    createLottoList(numbers) {
        for (let i = 0; i < numbers; i++) {
            let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottoList.push(lotto)
        }
    }

    getMyLottoList() {
        return this.#lottoList;
    }
}

module.exports = MyLotto;
