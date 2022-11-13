const MissionUtils = require("@woowacourse/mission-utils");
const {Random} = MissionUtils;


class LottoTicket{
    purchase_numbers;

    constructor() {
        this.purchase_numbers = this.createNumbers();
    }

    createNumbers(){
        const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        return numbers;
    }

    getNumbers(){
        return this.purchase_numbers;
    }
}

module.exports = LottoTicket;