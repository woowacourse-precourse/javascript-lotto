const { Console, Random } = require('@woowacourse/mission-utils');
const Exception = require('../src/Exception');

class App {
    play() {
        this.process();
    }

    process() {
        Console.readLine('구입금액을 입력해주세요.', (money) => {
            this.verification(money, 'unit');
            Console.print(money);
            Console.close();
        });
    }

    /** @typedef {'unit'} type */
    /** @type {function (string, type) : void} */
    verification(input, type) {
        const exception = new Exception();
        if (type === 'unit') exception.isThousand(input);
    }
}

const app = new App();
app.play();

module.exports = App;
