const { RANGKING_COUNT } = require('./constant/constantOfLotto');

class CheckWinning {
    #controller;
    #result;

    constructor(controller) {
        this.#controller = controller;
    }

    getCountWinning() {
        const sortedCount = Object.entries(this.#result).sort(([a], [b]) => (a < b ? -1 : 1));
        const winningCount = [];

        sortedCount.forEach((result) => {
            winningCount.push(result[1]);
        });

        return winningCount;
    }



    #compareWinLottos(lottos) {
        return lottos.reduce(
            (total, lotto) => {
                let count = 0;

                this.#controller.winningNumber.getWinningNumber().forEach((number) => {
                    if (lotto.includes(number)) count += 1;
                });

                if (count === RANGKING_COUNT.THIRD_RANKING_COUNT && this.#isNext(lotto)) count += 0.5;

                if (count >= RANGKING_COUNT.FIFTH_RANKING_COUNT) total[count] += 1;

                return total;
            },
            { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 },
        );
    }

    checkLotto() {
        const lottoNumbers = this.#controller.lottos.map((lotto) =>
            lotto.getNumbers().map((number) => String(number)),
        );

        this.#result = this.#compareWinLottos(lottoNumbers);
    }

    #isNext(lotto) {
        const bonusNumber = this.#controller.winningNumber.getBonusNumber();

        if (lotto.includes(bonusNumber)) {
            return true;
        }

        return false;
    }
}

module.exports = CheckWinning;