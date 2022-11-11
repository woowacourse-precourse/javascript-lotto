class Stat {
    constructor(lotto , winNum , bonus){
        this.LOTTO = lotto
        this.WIN_NUM = winNum
        this.BONUS = bonus
    }

    checkBonus(lotto,bonus){
        console.log('this is checkBonus')
        if (lotto.includes(parseInt(bonus))) {
            return 2
        }
    }

    // 등수 확인
    checkRank(count,lotto,winNum,bonus){
        console.log('this is checkRank')
        switch (count) {
            case 6:
                return 1
            case 5:
                // 보너스점수 확인
                return this.checkBonus(lotto,bonus) || 3
            case 4:
                return 4
            case 3:
                return 5
        }
    }
    
    checkNumber(lotto,winNum,bonus){
        // 로또 번호 몇개가 맞았는지 확인
        let COUNT = 0
        for ( let i = 0 ; i < lotto.length; i ++) {
            if (winNum.includes(String(lotto[i]))){
                COUNT += 1
            }
        }
        return this.checkRank(COUNT,lotto,winNum,bonus)
    }
    checkMatch(){
        let RANK = this.checkNumber(this.LOTTO,this.WIN_NUM,this.BONUS)
        console.log('+++++++++++')
        console.log(RANK)
    }
}


module.exports = Stat;