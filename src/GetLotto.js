const { Console, Random } = require('@woowacourse/mission-utils');

class GetLotto {
    constructor() {
        this.lottoList = [];
    }

    lottoNumberPackage(money) {
        const lottoCount = this.howManyLotto(money);
        Console.print(`${lottoCount}개를 구매했습니다.`)
        for (let i = 0; i < lottoCount; i++) {
            let lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(1, 45, 6));
            Console.print(lottoNumber);
            this.lottoList.push(lottoNumber);
        }
        return this.lottoList;
    }

    howManyLotto(money) {
        return money / 1000;
    }

    sortLottoNumber(Array) {
        return Array.sort((a,b) => a - b);
    }
}

let a = new GetLotto();
a.lottoNumberPackage(5000);

module.exports = GetLotto;