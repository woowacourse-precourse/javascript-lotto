const { Console, Random } = require('@woowacourse/mission-utils');
const { LottoException } = require('../src/Exception');

class Lotto {
    #numbers;

    constructor(numbers) {
        // this.validate(numbers);
        this.#numbers = numbers;
    }

    // 자동 복권 (로또 한장)
    makeRandomLotto() {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        return lotto;
    }

    showLottoNumbers(lotto) {
        lotto.sort((a, b) => a - b);
        console.log(
            `[${lotto[0]},${lotto[1]},${lotto[2]},${lotto[3]},${lotto[4]},${lotto[5]}]`
        );
    }

    // 자동 복권 (로또 여러장)
    makeRandomLottos(number) {
        const lottos = [];

        for (let index = 1; index <= number; index++) {
            const currentNumbers = this.makeRandomLotto();
            this.showLottoNumbers(currentNumbers);
            lottos.push(currentNumbers);
        }

        return lottos;
    }

    compare(lottos) {
        let count = 0;
        lottos.forEach((lotto) => {
            for (let number of lotto) {
                this.#numbers['numbers'].findIndex((e) => e === number)
                    ? count++
                    : (count += 0);
            }

            // judgement
            if (count === 6) return '1등';

            if (count === 5) return '2등';

            if (count === 4) return '3등';

            if (count === 3) return '4등';
        });
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

// const l = new Lotto({});

// l.inputWinningLotto();
