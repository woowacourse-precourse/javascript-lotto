class Matcher {
    constructor(winningNumbers, bonusNumber) {
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
        this.matchResult = [0, 0, 0, 0, 0]; //3, 4, 5, 5+1, 6개 일치
    }

    getMatchResult(lottoWallet) {
        for (let idx = 0; idx < lottoWallet.length; idx++) {
            const lotto = lottoWallet[idx].numbers;
            const resultIdx = this.matchWithWinningNumbers(lotto);
            if (resultIdx === -1) continue;
            if (resultIdx === 2) {
                this.matchWithBonusNumber(lotto);
                continue;
            }
            this.matchResult[resultIdx]++;

        }
        return this.matchResult;
    }

    matchWithWinningNumbers(lotto) {
        const matchTargetGroup = [...lotto, ...this.winningNumbers];
        const matchTargetGroupRemovedDuplicate = new Set(matchTargetGroup);
        switch (matchTargetGroupRemovedDuplicate.size) {
            case 6: return 4;
            case 7: return 2;
            case 8: return 1;
            case 9: return 0;
            default: return -1;
        }
    }

    matchWithBonusNumber(lotto) {
        const bonusMatch = lotto.includes(this.bonusNumber);
        console.log(lotto, bonusMatch);
        if (bonusMatch) {
            this.matchResult[3]++;
            return true;
        }
        this.matchResult[2]++;
        return false;
    }
}

module.exports = Matcher;