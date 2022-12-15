const { Random } = require("@woowacourse/mission-utils");
const { lottoNumPrint } = require("./Output_two") ;
const {ALL_LOTTO, RANDOM_LOTTO, ERROR_MESSAGE} = require("./Constant_two");

class Lotto {
    #number

    constructor(number){  //arr
        this.validate(number) ;
        this.#number = number ;
    }


    validate(number){
        if (number.length !== RANDOM_LOTTO.COUNT) throw new Error (ERROR_MESSAGE.LOTTO) ;
        number.forEach(ele => {
            if (ele < ALL_LOTTO.MIN || ele > ALL_LOTTO.MAX ) throw new Error (ERROR_MESSAGE.LOTTO) ;
        });
    }

    printNumber(){
        lottoNumPrint(this.#number) ;
    }

    compareCorrectLotto([correctLotto, bonus]){
        const setForCompare = new Set(correctLotto) ; //3개 일치 = size = 9
        this.#number.forEach(x => setForCompare.add(x)) ;
        switch (setForCompare.size){
            case 9 : return 0 ;
            case 8 : return 1 ;
            case 7 : 
                if (this.#number.includes(bonus)) return 3 ;
                return 2 ;
            case 6 : return 4 ;
        }
    }

}

module.exports = Lotto ; 