const { Console, Random } = require('@woowacourse/mission-utils');

class GetLotto {
    constructor() {
        this.lottoList = [];
    }

    howManyLotto(money) {
        return money / 1000;
    }
}

module.exports = GetLotto;