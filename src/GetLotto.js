const { Console, Random } = require('@woowacourse/mission-utils');

class GetLotto {
    constructor() {
        this.lottoList = [];
    }

    lottoNumberPackage(money) {
        const lottoCount = this.howManyLotto(money);
        for (let i = 0; i < lottoCount; i++) {
            let lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(1, 45, 6));
            Console.print(lottoNumber);
            this.lottoList.push(lottoNumber);
        }
    }

    howManyLotto(money) {
        return money / 1000;
    }

    sortLottoNumber(Array) {
        return Array.sort((a,b) => a - b);
    }

    exception() {
        
    }
}

let a = new GetLotto();
a.lottoNumberPackage(5000);

module.exports = GetLotto;