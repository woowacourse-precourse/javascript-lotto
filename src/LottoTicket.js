const MissionUtils = require("@woowacourse/mission-utils");
const {Random} = MissionUtils;

class LottoTicket{
    purchase_numbers;

    constructor() {
        this.purchase_numbers = this.createNumbers();
        this.sort();
    }

    createNumbers(){
        const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        return numbers;
    }

    sort(){
        this.purchase_numbers.sort(function(a, b) {
            return a - b;
        });
    }

    getNumbers(){
        return this.purchase_numbers;
    }
}

module.exports = LottoTicket;