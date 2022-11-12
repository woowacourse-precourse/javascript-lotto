const { Console, Random } = require('@woowacourse/mission-utils');
const { LottoException } = require('../src/Exception');

class Lotto {
    #numbers;

    constructor(numbers) {
        // this.validate(numbers);
        this.#numbers = numbers;
    }

    inputLotto() {
        this.inputWinningnumber();
    }

    inputWinningnumber() {
        Console.readLine('당첨 번호를 입력해 주세요.\n', (lotto) => {
            const lottoArray = lotto.split(',').map((number) => number.trim());
            this.#numbers = lottoArray;
            this.verification(lottoArray, 'notBonus');
            this.inputBonusnumber();
        });
    }

    inputBonusnumber() {
        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            this.verification(bonus, 'bonus');
            this.#numbers.push(bonus);
        });
    }

    /** @typedef {('notBonus' | 'bonus' )} type */
    /** @type {function (string, type) : void} */
    verification(input, type) {
        const exception = new LottoException(input, type);
        exception.checkLottoException();
    }

    // validate(numbers) {
    //     if (numbers.length !== 6) {
    //         throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    //     }
    // }

    // TODO: 추가 기능 구현
}

module.exports = Lotto;
