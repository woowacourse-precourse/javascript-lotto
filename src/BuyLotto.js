const MissionUtils = require("@woowacourse/mission-utils");

class BuyLotto {
    constructor() {
        this.printNumberOfLotto(this.inputAmount());
    }

    inputAmount() {
        let numberOfLotto;

        MissionUtils.Console.readLine('구입 금액을 입력하세요.', (amount) => {
            if(!isValidAmount(amount)) {
                throw new Error('[ERROR] 1,000원 단위로 구입 가능합니다.');
            } 
            numberOfLotto = amount / 1000;
        });
        return numberOfLotto;
    }

    printNumberOfLotto(numberOfLotto) {
        MissionUtils.Console.print(`${numberOfLotto}개를 구매했습니다.`);
    }

}

const isValidAmount = (amount) => {
    if(amount % 1000 === 0) {
        return true;
    }
    return false;
}

module.exports = BuyLotto;