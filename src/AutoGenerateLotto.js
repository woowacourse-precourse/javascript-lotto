const { Random } = require("@woowacourse/mission-utils");

class AutoGenerateLotto {
    constructor(money) {
        this.money = money;
        this.papper = this.purchaseQuantity(money);
        this.lottoList = [];
        this.validate();
        this.saveLottoList();
    }
    validate() {
        if (this.money % 1000 !== 0) {
            throw new Error("[ERROR]1000원 단위로 입력하여 주세요.");
        }
    }
    purchaseQuantity() {
        return this.money / 1000;
    }
    makeRandomLotto() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }
    sortLottoNumber(lottoList) {
        lottoList.sort((a, b) => {
            return a - b;
        });
        return lottoList;
    }
    saveLottoList() {
        for (let i = 0; i < this.papper; i++) {
            let tempNum = this.sortLottoNumber(this.makeRandomLotto());
            this.lottoList.push(tempNum);
        }
    }
}
module.exports = AutoGenerateLotto;
