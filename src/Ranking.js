const {Console} = require("@woowacourse/mission-utils");

const RANK = {
    fifth : [3, 5000, "5,000"],
    fourth : [4, 50000, "50,000"],
    third : [5, 1500000, "1,500,000"],
    second : [5, 30000000, "30,000,000"],
    first : [6, 2000000000, "2,000,000,000"]
};

class Ranking {
    constructor(rankList) {
        this.rankList = rankList;
        this.rank = null;
    }

    setRank() {
        let count3 = 0,
            count4 = 0,
            count5 = 0,
            count5_ = 0,
            count6 = 0;

        for (let i of this.rankList) {
            if (i === 3) count3 = count3 + 1;
            if (i === 4) count4 = count4 + 1;
            if (i === 5) count5 = count5 + 1;
            if (i === -1) count5_ = count5_ + 1;
            if (i === 6) count6 = count6 + 1;
        }

        const rank = {
            fifth : count3,
            fourth : count4,
            third : count5,
            second : count5_,
            first : count6
        }


        Object.keys(rank).forEach((value, index) => {
            let bonus = " ";
            if (value === "second") {
                bonus = ", 보너스 볼 일치 ";
            }

            Console.print(RANK[value][0] + "개 일치" + bonus + "(" + RANK[value][2] + "원) - " + rank[value] + "개")
        })


        this.rank = rank;
    }

    yield(spentMoney) {
        let money = 0;
        let result;

        for (let ranking in this.rank) {
            money = money + (RANK[ranking][1] * this.rank[ranking]);
        }
        result = ((money / spentMoney) * 100).toFixed(1);

        Console.print("총 수익률은 " + result + "%입니다.");
    }
}

module.exports = Ranking;