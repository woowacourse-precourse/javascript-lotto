const MissionUtils = require("@woowacourse/mission-utils");

class Receipt { 
    constructor(purchasedLottos) {
        this.purchasedLottos = purchasedLottos;
    }

    print() {
        MissionUtils.Console.print(this.purchasedLottos.length+'개를 구매했습니다.');

        this.purchasedLottos.forEach((element) => {
            this.printLottoNum(element);
        });
    }
    printLottoNum(lotto) {
        MissionUtils.Console.print(JSON.stringify(lotto.getNumbers()).replace(/,/g, ', '));
    }
}

module.exports = Receipt;