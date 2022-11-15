const { Console } = require('@woowacourse/mission-utils');
const { COMPARE_VALUE } = require('../setting/Constants');

class LottoView {
    input(value, callback) {
        Console.readLine(value, callback);
    }

    buyLotto(numbers) {
        Console.print(`\n${numbers}개를 구매했습니다.`);
    }

    printList(lottoNumber) {
        Console.print(`[${lottoNumber.join(', ')}]`);
    }

    eachResult(howManyWin) {
        Console.print('\n당첨 통계');
        Console.print('---');
        Console.print(`3개 일치 (5,000원) - ${howManyWin[COMPARE_VALUE.zero]}개`);
        Console.print(`4개 일치 (50,000원) - ${howManyWin[COMPARE_VALUE.one]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${howManyWin[COMPARE_VALUE.two]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${howManyWin[COMPARE_VALUE.three]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${howManyWin[COMPARE_VALUE.four]}개`);
    }

    printTotal(rate) {
        Console.print(`총 수익률은 ${rate}%입니다.`);
    }
}

module.exports = LottoView;
