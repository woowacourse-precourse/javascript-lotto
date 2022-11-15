const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const Exception = require("./Exception");

class Buyer {
    #money;
    #lottoNumbers;
    #purchaseLottos;

    constructor(money) {
        this.purchaseException(money);
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

    purchaseException(money) {
        const exception = new Exception;
        exception.string(money);
        exception.divide(money);
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
