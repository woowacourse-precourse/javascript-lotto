const {MONEY, LOTTO, MESSAGE, REWARD} = require("./Constant") ;
const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto") ;

class LottoGame {
    #randomLotto
    #userLotto

    constructor(){
        this.#randomLotto = [] ;
        this.#userLotto = [] ;
    }
    
    requestMoney(){
        Console.readLine(MESSAGE.INPUT_MONEY, money => {
            this.money = +money ;
            this.moneyValidate() ;
            this.moneyCallback() ;
        })
    }

    moneyCallback(){
        for (let i = 0 ; i < this.money/MONEY.UNIT ; i++){
            this.#randomLotto.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)))
        }
        Console.print(`\n${this.money/MONEY.UNIT}${MESSAGE.OUTPUT_BUY}`) ;
        this.#randomLotto.forEach( x => x.lottoPrint()) ;
        this.requestUserLotto()
    }

    moneyValidate(){
        if ( this.money < MONEY.MIN ) throw new Error (MESSAGE.ERROR_RANGE) ;
        if ( !Number.isInteger(this.money/MONEY.UNIT) ) throw new Error (MESSAGE.ERROR_RANGE) ;
    }

    requestUserLotto(){
        Console.readLine(MESSAGE.INPUT_USERLOTTO, userLotto => {
            userLotto = userLotto.split(",").map(Number) ;
            this.userLottoValidate(userLotto) ;
            this.userLottoCallback(userLotto) ;
        })
    }

    userLottoCallback(userLotto){
        this.#userLotto.push(userLotto) ;
        this.requestBonusLotto() ;
    }

    userLottoValidate(userLotto){
        const checkLength = new Set(userLotto) ;
        if (checkLength.size !== LOTTO.COUNT ) throw new Error(MESSAGE.ERROR_COUNT)
        userLotto.forEach( x => {
            if ( !Number.isInteger(x) ) throw new Error (MESSAGE.ERROR_TYPE) ;
            if ( LOTTO.MIN > x || x > LOTTO.MAX ) throw new Error (MESSAGE.ERROR_RANGE) ;
        }) 
    }

    requestBonusLotto(){
        Console.readLine(MESSAGE.INPUT_BONUSLOTTO, bonus => {
            this.bonusLottoValidate(+bonus) ;
            this.bonusLottoCallback(+bonus) ;
        })
    }

    bonusLottoCallback(bonus){
        this.#userLotto.push(bonus) ;
        const rank = [0,0,0,0,0] ;
        this.#randomLotto.forEach( x => {
            const index = x.compareUserLotto(this.#userLotto) ;
            if (index !== undefined ) rank[index]++ ;
        })
        this.isEnd(rank, this.rate(rank)) ;
    }

    bonusLottoValidate(bonus){
        if (!Number.isInteger(bonus)) throw new Error (MESSAGE.ERROR_TYPE) ;
        if ( LOTTO.MIN > bonus || bonus > LOTTO.MAX ) throw new Error (MESSAGE.ERROR_RANGE) ;
        if ( this.#userLotto[0].includes(bonus)) throw new Error (MESSAGE.ERROR_RANGE) ;
    }

    rate(rank){
        const sum = rank[0]*REWARD.FIFTH + rank[1]*REWARD.FOURTH + rank[2]*REWARD.THIRD + rank[3]*REWARD.SECOND + rank[4]*REWARD.FIRST ;
        let rate = Math.round(sum/this.money*1000) ;
        let mod = rate%10  ;
        let integer = rate === 0 ? "0" : this.insertComma(Math.floor(rate/10)+"") ;
        return mod === 0 ? integer+".0" : integer+"."+mod ;
    }

    insertComma(num){ //num = string(숫자) 
        let head = num.length%3, result = "" ;
        if (head !== 0 ){
            result += `${num.slice(0, head)},` ;
        }
        for (let i = head ; i < num.length  ; i += 3 ){
            if (i !== num.length-3 ) result += `${num.slice(i, i+3)},`
            else result += num.slice(i, i+3)
        }
        return result
    }

    isEnd(rank, rate){
        Console.print(MESSAGE.OUTPUT_RESULT) ;
        Console.print(`3개 일치 (5,000원) - ${rank[0]}개\n4개 일치 (50,000원) - ${rank[1]}개\n5개 일치 (1,500,000원) - ${rank[2]}개`)
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[3]}개\n6개 일치 (2,000,000,000원) - ${rank[4]}개\n`)
        Console.print(`총 수익률은 ${rate}%입니다.`)
        Console.close() ;
    }

}


module.exports = LottoGame ;