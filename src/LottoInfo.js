const MissionUtils = require("@woowacourse/mission-utils");

class PrizeInformation {
    constructor() {
        this.message = ["", "6개 일치", "5개 일치", "5개 일치, 보너스 볼 일치", "4개 일치", "3개 일치"];
        this.prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
        this.quantity = [0, 0, 0, 0, 0, 0];
    }

    /**
     * 총 수익을 계산하는 함수
     * @returns 총 수익
     */
    getTotalPrize() {
        let result = 0;
        for (let i = 1; i < this.prize.length; i++) {
            result += this.prize[i] * this.quantity[i];
        }

        return result;
    }

    /**
     * 당첨 통계를 출력하는 함수
     */
    printPrizes() {
        MissionUtils.Console.print("당첨 통계");
        MissionUtils.Console.print("---");
        for (let i = this.prize.length - 1; i > 0; i--) {
            MissionUtils.Console.print(`${this.message[i]} (${this.prize[i].toLocaleString()}원) - ${this.quantity[i]}개`);
        }
    }
}

module.exports = {
    PrizeInformation
}