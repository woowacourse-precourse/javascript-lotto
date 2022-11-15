class CompareLotto {
    constructor(lottoList, winnerLotto, winnerBonusBall) {
        this.lottoList = lottoList;
        this.winnerLotto = winnerLotto;
        this.winnerBonusBall = winnerBonusBall;
        this.rankCount = {
            "1st": 0,
            "2nd": 0,
            "3rd": 0,
            "4th": 0,
            "5th": 0,
        };
        this.rankCounterList(this.lottoList);
    }
    duplicatedCount(lottoList) {
        return lottoList.filter((number) => this.winnerLotto.includes(number)).length;
    }
    rankCounterList(lottoList) {
        for (let i = 0; i < lottoList.length; i++) {
            if (this.duplicatedCount(lottoList[i]) === 4) {
                this.findSecondRank(lottoList[i]);
            } else {
                this.numOfDuplicated(this.duplicatedCount(lottoList[i]));
            }
        }
    }
    findSecondRank(lottoList) {
        if (this.duplicatedBonusBall(lottoList)) {
            this.rankCount["3rd"]++;
        } else {
            this.rankCount["4th"]++;
        }
    }
    duplicatedBonusBall(lottoList) {
        if (lottoList.includes(this.winnerBonusBall)) {
            return true;
        } else return false;
    }
    numOfDuplicated(number) {
        if (number === 3) {
            this.rankCount["5th"]++;
        }
        if (number === 5) {
            this.rankCount["2nd"]++;
        }
        if (number === 6) {
            this.rankCount["1st"]++;
        }
    }
}
module.exports = CompareLotto;
