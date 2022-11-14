const MissionUtils = require("@woowacourse/mission-utils");

class Winning {
    constructor() {
        this.printWinningAnnouncement();
    }

    printWinningAnnouncement() {
        MissionUtils.Console.print('당첨 통계\n---');
    }
        
    calculateCorrectCount(randomNumber, winningNumbers, bonusNumber) {
        let count = 0;

        for(let i = 0; i < winningNumbers.length; i++) {
            if (randomNumbers.includes(winningNumbers[i]))
                count++;
        }
        if(count === 6)
            count++;
        if(count === 5) 
            count = this.checkBonus(randomNumbers, bonusNumber, count);

        return count;
    }

    checkBonus(randomNumber, bonusNumber, count) {
        if (randomNumber.includes(bonusNumber))
            return count++;      
    }

    calculateGradeCount(randomLottos, winningNumbers, bonusNumber) {
        let gradeCounts = new Array(5).fill(0); // [5등, 4등, 3등, 2등, 1등]

        for(let i = 0; i < randomLottos.length; i++) {
            const correctCount = calculateWinningCount(randomLottos[i], winningNumbers, bonusNumber);

            gradeCounts[correctCount - 3]++;
        }
        return gradeCounts;
    }

    printWinningHistory() {

    }

    // 3개 일치 (5,000원) - 1개
    // 4개 일치 (50,000원) - 0개
    // 5개 일치 (1,500,000원) - 0개
    // 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    // 6개 일치 (2,000,000,000원) - 0개
}

module.exports = Winning;