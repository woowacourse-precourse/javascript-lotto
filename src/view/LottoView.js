const { Console } = require("@woowacourse/mission-utils");

class LottoView {
    input(value, callback) {
        Console.readLine(value, callback);
    }

    buyLotto(numbers) {
        Console.print(`\n${numbers}개를 구매했습니다.`);
    }
    //구입한 로또들
    lottoList(lottoList, numbers) {
        for (let i = LOTTO_VALUE.zero; i < numbers; i += LOTTO_VALUE.plus) {
            const lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(LOTTO_VALUE.min, LOTTO_VALUE.max, LOTTO_VALUE.digit));
            Console.print(`[${lottoNumber.join(', ')}]`);
            this.lottoList.push(lottoNumber);
        }
        return lottoList;
    }

    printTotal(rate) {
        Console.print(`총 수익률은 ${rate}%입니다.`);
    }
}

module.exports = LottoView;