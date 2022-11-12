const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
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

    getMoney() {
        return this.#money;
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
        this.printLottoNumbers();
    }

    printLottoNumbers() {
        Console.print(`\n${this.#lottoNumbers}개를 구매했습니다.`);
    }

    getLottoNumbers() {
        return this.#lottoNumbers;
    }

    createLottos() {
        const tempLottos = [];
        for(let i = 0; i < this.#lottoNumbers; i++){
            let purchaseNumbers = this.createRandomNumbers();
            purchaseNumbers = this.AscendingNumber(purchaseNumbers);
            tempLottos.push(purchaseNumbers);
        }

        this.#purchaseLottos = tempLottos;
        this.printPurchaseLottos();
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

    printPurchaseLottos() {
        for(let purchaseLotto of this.#purchaseLottos){
            Console.print(purchaseLotto);
        }
    }

    getPurchaseLottos() {
        return this.#purchaseLottos;
    }
}

module.exports = Buyer;
