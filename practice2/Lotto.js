const { LOTTO, MESSAGE } = require("./Constant") ;
const { Console } = require("@woowacourse/mission-utils");

class Lotto{
    #number ;
    
    constructor(number){
        this.validate(number) ;
        this.#number = number ;
    }

    validate(number){
        if ( number.length !== LOTTO.COUNT ) throw new Error (MESSAGE.ERROR_COUNT) ;
        number.forEach( x => {
            if ( !Number.isInteger(x) ) throw new Error (MESSAGE.ERROR_TYPE) ;
            if ( LOTTO.MIN > x || x > LOTTO.MAX ) throw new Error (MESSAGE.ERROR_RANGE)
        })
    }

    lottoPrint(){
        Console.print(`[${this.#number.sort((a,b)=> a-b).join(", ")}]`) ;
    }

    compareUserLotto([userLotto, bonus]){
        let checkOverlap = new Set(this.#number) ;
        userLotto.forEach( x => checkOverlap.add(x)) ;
        if ( 6 <= checkOverlap.size && checkOverlap.size <= 9 ){
            return this.compare(checkOverlap.size, bonus) ;
        }
    }

    compare( size, bonus ){
        if ( size === 7 && this.#number.includes(bonus)) return 3 ;
        if ( size === 6 ) return 4 ;
        return ( 9 - size ) ;
    }

}

module.exports = Lotto ;