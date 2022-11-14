const MissionUtils = require("@woowacourse/mission-utils");

class Winning {
    constructor() {
        this.printWinningAnnouncement();
    }

    printWinningAnnouncement() {
        MissionUtils.Console.print('당첨 통계\n---');
    }
        
    // 3개 일치 (5,000원) - 1개
    // 4개 일치 (50,000원) - 0개
    // 5개 일치 (1,500,000원) - 0개
    // 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    // 6개 일치 (2,000,000,000원) - 0개
        
    calculateWinningCount(randomNumbers, winningNumbers, bonusNumber) {
        let count = 0;

        for(let i = 0; i < winningNumbers.length; i++) {
            if (randomNumbers.includes(winningNumbers[i]))
                count++;
        }
    }


    checkBonus() {

    }

    printWinningHistory() {

    }

}

module.exports = Winning;