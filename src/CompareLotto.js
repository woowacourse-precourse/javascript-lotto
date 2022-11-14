

class CompareLotto {
    // constructor(lotto, winNumber, bonus) {
    //     lottoList = lotto;
    //     winNumber = winNumber;
    //     bonus = bonus;
    // }

    // 길이리턴
    count(lottoList, winNumber) {
        return lottoList.filter((number) => winNumber.includes(number)).length;
    }

    // 불린 리턴
    countBonus(winNumber, bonus) {
        return winNumber.includes(bonus);
    }

    result(lottoList, winNumber, bonus) {
        let count = []
        
        lottoList.forEach(lotto => {
            let correctNumber = this.count(lotto, winNumber);
            let correctBonus = this.countBonus(winNumber, bonus);

            count.push({ correctNumber, correctBonus });
        });

        console.log(count);

    }
}

module.exports = CompareLotto;