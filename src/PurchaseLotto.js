const { Random, Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class PurchaseLotto {
    #purchaseAmount;
    #purchaseNum;
    #purchasedLotto;

    constructor() {
        this.#purchaseAmount = 0;
        this.#purchaseNum = 0;
        this.#purchasedLotto = [];
    }

    setPurchaseAmount(amount) {
        this.#purchaseAmount = amount;
        this.validatePurchaseAmount(amount);
        this.setPurchaseNum();
    }

    validatePurchaseAmount(amount) {
        if (amount % 1000 !== 0) {
            throw "[ERROR] 로또 구입 금액을 1,000원 단위로 입력 하세요."
        }
    }

    setPurchaseNum() {
        this.#purchaseNum = this.#purchaseAmount / 1000;
    }

    getPurchaseNum() {
        return this.#purchaseNum
    }

    purchase() {
        for (let i = 0; i < this.#purchaseNum; i++) {
            let lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => { a - b });

            let lotto = new Lotto(lottoNums);

            this.#purchasedLotto.push(lotto);
        }

        this.#purchasedLotto.map((lotto) => {
            Console.print(lotto.getNumbersToString());
        });
    }

    getPurchasedLotto() {
        return this.#purchasedLotto
    }

    getPurcahseAmount() {
        return this.#purchaseAmount
    }   
}

module.exports = PurchaseLotto;