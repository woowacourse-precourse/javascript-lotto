const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const { LOTTO } = require('./Const.js');

class Customer {
    constructor(totalMoney) {
        this.totalMoney = totalMoney;
    }

    buyLotto() {
        const lottoNumbers = Random.pickUniqueNumbersInRange(LOTTO.RANGE_LEFT, LOTTO.RANGE_RIGHT, LOTTO.LENGTH);
        return new Lotto(lottoNumbers);
    }
}


module.exports = Customer;
