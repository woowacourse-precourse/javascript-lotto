const { Console } = require("@woowacourse/mission-utils");

const lottoPrizePrice = [5000, 50000, 1500000, 30000000, 2000000000];

class ProfitResult {
    #totalProfitMoney;
    #percent;

    constructor(lottoPrizeResult, userMoney) {
        this.getProfitSum(lottoPrizeResult);
        this.getProfitPercentage(userMoney);
        this.printPercentage();
    }
    
    getProfitSum(lottoPrizeResult) {
        let sum = 0;
        for(let i = 0; i < lottoPrizeResult.length; i++) {
            sum += (lottoPrizePrice[i] * lottoPrizeResult[i]);
        }
        this.#totalProfitMoney = sum;
    }

    getProfitPercentage(userMoney) {
        this.#percent = (Math.round(((this.#totalProfitMoney /userMoney) * 100) * 10) / 10).toFixed(1);
    }
    
    printPercentage() {
        const PRINT_PERCENTAGE_MESSAGE = `총 수익률은 ${this.#percent}%입니다.`;
        Console.print(PRINT_PERCENTAGE_MESSAGE);
    }
}

module.exports = ProfitResult;