const PRIZE_INDEX = require('./constants').PRIZE_INDEX;

class Matcher {
    constructor(winningNumbers, bonusNumber) {
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
        this.matchResult = [0, 0, 0, 0, 0]; //3, 4, 5, 5+1, 6개 일치
    }

    getMatchResult(lottoWallet) {
        for (let idx = 0; idx < lottoWallet.length; idx++) {
            const lotto = lottoWallet[idx].numbers;
            let resultIdx = this.matchWithWinningNumbers(lotto);
            if (resultIdx === PRIZE_INDEX.NOTHING) continue;
            if (resultIdx === PRIZE_INDEX.THIRD) resultIdx = this.matchWithBonusNumber(lotto);
            this.matchResult[resultIdx]++;
        }
        return this.matchResult;
    }

    matchWithWinningNumbers(lotto) {
        const matchTargetGroup = [...lotto, ...this.winningNumbers];
        const matchTargetGroupRemovedDuplicate = new Set(matchTargetGroup);
        switch (matchTargetGroupRemovedDuplicate.size) {
            case 6: return PRIZE_INDEX.FIRST;
            case 7: return PRIZE_INDEX.THIRD;
            case 8: return PRIZE_INDEX.FOURTH;
            case 9: return PRIZE_INDEX.FIFTH;
            default: return PRIZE_INDEX.NOTHING;
        }
    }

    matchWithBonusNumber(lotto) {
        const bonusMatch = lotto.includes(this.bonusNumber);
        if (bonusMatch) return PRIZE_INDEX.SECOND;
        return PRIZE_INDEX.THIRD;
    }
}

module.exports = Matcher;