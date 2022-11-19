const { Random, Console } = require("@woowacourse/mission-utils");

class UserLotto {
    #userLotto;

    constructor(numOfLotto) {
        this.#userLotto = this.generateLotto(numOfLotto);
        this.printUserLotto(numOfLotto);
    }

    getUserLotto() {
        return this.#userLotto;
    }

    generateLotto(numOfLotto) {
        const userLotto = [];
        for(let i = 0; i < numOfLotto; i++) {
            let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
            lotto = lotto.sort((a,b) => a - b);
            userLotto.push(lotto);
        }
        return userLotto;
    }

    printUserLotto(numOfLotto) {
        const LOTTO_BUY_MESSAGE = `\n${numOfLotto}개를 구매했습니다.`;
        Console.print(LOTTO_BUY_MESSAGE);
        this.#userLotto.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
    }
}

module.exports = UserLotto;