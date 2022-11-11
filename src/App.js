const { Console, Random } = require('@woowacourse/mission-utils');
const { lookup } = require('dns');
const Exception = require('../src/Exception');
const Lotto = require('./Lotto');

class App {
    play() {
        this.process();
    }

    process() {
        Console.readLine('구입금액을 입력해주세요.', (money) => {
            this.verification(money, 'unit');
            Console.print(money);
            const lotto = new Lotto('1');
            lotto.inputWinningnumber();
        });
    }

    /** @typedef {('unit' | 'lottoNumber')} type */
    /** @type {function (string, type) : void} */
    verification(input, type) {
        const exception = new Exception();
        if (type === 'unit') exception.isThousand(input);
    }
}

const app = new App();
app.play();

module.exports = App;
