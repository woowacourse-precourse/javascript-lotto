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
        Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
            const lotto = numbers.split(',').map((number) => number.trim());
            this.#numbers['numbers'] = lotto;
            this.inputBonusnumber();
        });
    }

    inputBonusnumber() {
        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            this.verification(this.#numbers['numbers'], bonus);
            this.#numbers['bonus'] = bonus;
        });
    }

    // 자동 복권
    makeLotto() {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        return lotto;
    }

    showLottoNumbers(lotto) {
        lotto.sort((a, b) => a - b);
        console.log(
            `[${lotto[0]},${lotto[1]},${lotto[2]},${lotto[3]},${lotto[4]},${lotto[5]}]`
        );
    }

    verification(lotto, bonus) {
        const exception = new LottoException(lotto, bonus);
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
