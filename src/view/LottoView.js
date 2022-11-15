const { Console } = require("@woowacourse/mission-utils");

class LottoView {
    input(value, callback) {
        Console.readLine(value, callback);
    }

    buyLotto(numbers) {
        Console.print(`\n${numbers}개를 구매했습니다.`);
    }

    printTotal(rate) {
        Console.print(`총 수익률은 ${rate}%입니다.`);
    }
}

module.exports = LottoView;