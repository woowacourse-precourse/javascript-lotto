

class CompareLotto {
    // 길이리턴
    count(winNumber, lotto) {
        return winNumber.filter((number) => lotto.includes(number)).length;
    }

    // 불린 리턴
    countBonus(winNumber, bonus) {
        return winNumber.includes(bonus);
    }

    result(lottoList, winNumber, bonus) {
        
    }
}

module.exports = CompareLotto;