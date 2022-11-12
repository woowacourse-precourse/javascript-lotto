const { Console, Random } = require('@woowacourse/mission-utils');
const { LottoException } = require('../src/Exception');

class Lotto {
    #numbers;

    constructor(numbers) {
        // this.validate(numbers);
        this.#numbers = numbers;
    }

    inputWinningLotto() {
        this.inputWinningnumber();
    }

    inputWinningnumber() {
        Console.readLine('당첨 번호를 입력해 주세요.\n', (lotto) => {
            const lottoArray = lotto.split(',').map((number) => number.trim());
            this.#numbers[numbers] = lottoArray;
            this.verification(lottoArray, 'notBonus');
            this.inputBonusnumber();
        });
    }

    inputBonusnumber() {
        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            this.verification(bonus, 'bonus');
            this.bonusNumber[bonus] = bonus;
        });
    }

    // 자동 복권
    makeLotto() {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        return lotto;
    }

    showLottoNumbers(Lotto) {
        console.log();
        console.log(
            `[${Lotto[0]},${Lotto[1]},${Lotto[2]},${Lotto[3]},${Lotto[4]},${Lotto[5]}]`
        );
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

console.log(Random.pickUniqueNumbersInRange(1, 45, 6));
