const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
    #numbers;

    constructor(numbers) {
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

    // TODO: 추가 기능 구현
}

module.exports = Lotto;
