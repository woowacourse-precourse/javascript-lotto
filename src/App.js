const { Console, Random } = require('@woowacourse/mission-utils');
const { InputException } = require('../src/Exception');
const Lotto = require('./Lotto');

class App {
    play() {
        this.process();
    }

    // 구입 금액 입력 받기, 구매할 로또 개수와 번호 보여주기
    // 정답 로또 번호 입력받기, 비교해서 결과 도출하기
    process() {
        Console.readLine('구입금액을 입력해주세요.', (money) => {
            this.verification(money, 'unit');
            Console.print(money);
            const lotto = new Lotto([]);
            lotto.inputWinningnumber();
        });
    }

    /** @typedef {'unit'} type */
    /** @type {function (string, type) : void} */
    verification(input, type) {
        const exception = new InputException();
        if (type === 'unit') exception.isThousand(input);
    }
}

const app = new App();
app.play();

module.exports = App;
