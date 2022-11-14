const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

class Buyer {
    #money;
    #lottoNumbers;
    #purchaseLottos;

    constructor(money) {
        this.stringException(money);
        this.divideException(money);
        this.#money = money;
    }

    get money() {
        return this.#money;
    }

    get lottoNumbers() {
        return this.#lottoNumbers;
    }

    get purchaseLottos() {
        return this.#purchaseLottos;
    }

    stringException(money) {
        if (!Number(money)) {
            throw new Error("[ERROR] 금액은 정수로 입력해야 합니다.");
        }
    }

    divideException(money) {
        if ((money % 1000 !== 0)) {
            throw new Error("[ERROR] 금액은 1000으로 나누어떨어져야 합니다.");
        }
    }

    countLotto() {
        this.#lottoNumbers = this.#money / 1000;
        return this.#lottoNumbers;
    }

    createLottos() {
        const tempLottos = [];
        for (let i = 0; i < this.#lottoNumbers; i++) {
            let purchaseNumbers = this.createRandomNumbers();
            purchaseNumbers = this.AscendingNumber(purchaseNumbers);
            tempLottos.push(purchaseNumbers);
        }

        this.#purchaseLottos = tempLottos;
        return this.#purchaseLottos;
    }

    createRandomNumbers() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    AscendingNumber(purchaseNumbers) {
        const tempNumbers = purchaseNumbers.sort((a, b) => {
            return a - b;
        })
        return tempNumbers;
    }

    createOutputPurchaseLotto(purchaseLotto) {
        let outputPurchaseLotto = '';
        for (let i = 0; i < purchaseLotto.length; i++) {
            outputPurchaseLotto += purchaseLotto[i];
            if (purchaseLotto[i] === ',') outputPurchaseLotto += ' ';
        }
        return outputPurchaseLotto;
    }
}

module.exports = Buyer;
