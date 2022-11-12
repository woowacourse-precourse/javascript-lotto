const { Random, Console } = require('@woowacourse/mission-utils');

class Lotto {
    #numbers;

    constructor(numbers = [1, 2, 3, 4, 5, 6]) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        let newSet = new Set(numbers);
        if (newSet.size !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
    }

    // TODO: 추가 기능 구현

    // 자동 복권 (로또 한장)
    makeRandomLotto() {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        lotto.sort((a, b) => a - b);
        return lotto;
    }

    showLottoNumbers(lotto) {
        Console.print(
            `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`
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
}

module.exports = Lotto;
