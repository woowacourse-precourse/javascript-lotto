const { Console } = require('@woowacourse/mission-utils');
class Display {
    constructor(controller) {
        this.controller = controller;
    }
    inputCost() {
        Console.readLine('구입금액을 입력해 주세요', (answer) => {
            this.controller.issueLotto(answer);
        });
    }

    printLottoList(lottos) {
        Console.print(`${lottos.length}개를 구매했습니다.`);
        Console.print(lottos.map((lotto) => lotto.getNumbers()));
    }
}
module.exports = Display;