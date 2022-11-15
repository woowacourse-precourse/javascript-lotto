const { Console } = require('@woowacourse/mission-utils');

class HandleLotto {
    #rank;
    #rateOfReturn;
    #winnings;

    #winningLotto;
    #bonusNum;
    #purchasedLotto;

    constructor(winningLotto, bonusNum, purchasedLotto) {
        this.#rank = [0, 0, 0, 0, 0];
        this.#winnings = [5000, 50000, 1500000, 30000000, 2000000000];
        this.#winningLotto = winningLotto;
        this.#bonusNum = bonusNum;
        this.#purchasedLotto = purchasedLotto;

        this.validate();
    }

    validate() {
        if (this.#winningLotto.getNumbers().includes(this.#bonusNum)) {
            throw new Error('[ERROR] 보너스 번호는 당첨 번호와 다른 숫자이어야 합니다.');
        }

        this.rank();
    }

    rank() {
        this.#purchasedLotto.getPurchasedLotto().map((lotto) => {
            let matches = this.calMatches(lotto.getNumbers());

            switch (matches) {
                case 3:
                    this.#rank[0]++;
                    break;
                case 4:
                    this.#rank[1]++;
                    break;
                case 5:
                    if (lotto.getNumbers().includes(this.#bonusNum)) {
                        this.#rank[3]++;
                    } else {
                        this.#rank[2]++;
                    }
                    break;
                case 6:
                    this.#rank[4]++;
                    break;
            }
        });

        this.printInfo();
    }

    printInfo() {
        const matchMessage = ['3개 일치 (5,000원) - ', '4개 일치 (50,000원) - ', '5개 일치 (1,500,000원) - ', '5개 일치, 보너스 볼 일치 (30,000,000원) - ', '6개 일치 (2,000,000,000원) - '];

        this.#rank.map((rankNum, idx) => {
            Console.print(`${matchMessage[idx]}${rankNum}개`)
            this.#winnings[idx] = this.#winnings[idx] * rankNum;
        });

        Console.print(`총 수익률은 ${this.calRateOfReturn()}%입니다.`);
    }

    calMatches(lotto) {
        let matches = 0;

        lotto.map((l) => {
            if (this.#winningLotto.getNumbers().includes(l)) {
                matches++;
            }
        });

        return matches
    }

    calRateOfReturn() {
        let totalWinnings = this.#winnings.reduce(function add(a, b) { return a + b }, 0);
        let amount = this.#purchasedLotto.getPurcahseAmount();

        this.#rateOfReturn = Math.round(totalWinnings / amount * 10000) / 100;

        return this.#rateOfReturn
    }
}

module.exports = HandleLotto;