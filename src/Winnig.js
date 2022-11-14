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
            if (randomNumber.includes(winningNumbers[i]))
                count++;
        }
        if(count === 6) // 6개 일치
            count++;
        if(count === 5) // 5개 일치 -> 보너스 번호 검사
            count = this.checkBonus(randomNumber, bonusNumber, count);

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
        printWinningHistory(gradeCounts);
    }

    printWinningHistory(gradeCounts) {
        const WinningAnouncement = [
            '3개 일치 (5,000원) - ',
            '4개 일치 (50,000원) - ',
            '5개 일치 (1,500,000원) - ',
            '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
            '6개 일치 (2,000,000,000원) - '
        ];

        for(let i = 0; gradeCounts.length; i++) {
            MissionUtils.Console.print(`${WinningAnouncement[i]}${gradeCounts}개`);
        }
    }

}

module.exports = Winning;