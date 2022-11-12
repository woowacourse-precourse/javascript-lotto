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

    // 필드를 반환하는 메서드
    getMoney() {
        return this.#money;
    }

    getLottoNumbers() {
        return this.#lottoNumbers;
    }

    getPurchaseLottos() {
        return this.#purchaseLottos;
    }

    // 입력된 금액을 예외처리하는 메서드
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

    // 금액에 맞체 로또 개수를 정하고 출력하는 메서드
    countLotto() {
        this.#lottoNumbers = this.#money / 1000;
        this.printLottoNumbers();
    }

    printLottoNumbers() {
        Console.print(`\n${this.#lottoNumbers}개를 구매했습니다.`);
    }

    // 로또 개수에 맞게 번호가 담긴 리스트를 생성하고 출력하는 메서드
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

    
}

module.exports = Buyer;
