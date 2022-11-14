const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

class Customer {
    constructor(totalMoney) {
        this.totalMoney = totalMoney;
    }

    buyLotto() {
        let lottoNumbers = [];
        while(lottoNumbers.length < 6) {
            const currNum = Random.pickNumberInRange(1, 45);
            if(lottoNumbers.includes(currNum)) continue;
            lottoNumbers.push(currNum);
        }
        return new Lotto(lottoNumbers);
    }
}


module.exports = Customer;
