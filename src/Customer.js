const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

class Customer {
    constructor(totalMoney) {
        this.totalMoney = totalMoney;
    }

    buyLotto() {
        const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(lottoNumbers);
    }
}


module.exports = Customer;
